const cookieParser = require('cookie-parser');
const bcrypt = require('bcryptjs');
const express = require('express');
const uuid = require('uuid');
const app = express();
const cors = require('cors');
const DB = require('./database.js');

app.use(cors({
   origin: 'https://startup.byu260.click',
   credentials: true
 }));

const port = process.argv.length > 2 ? process.argv[2] : 4000;
app.use(express.static('public'));
const authCookieName = 'token';

// JSON body parsing using built-in middleware
app.use(express.json());

// Use the cookie parser middleware for tracking authentication tokens
app.use(cookieParser());

// Serve up the front-end static content hosting
app.use(express.static('public'));

// Router for service endpoints
var apiRouter = express.Router();
app.use(`/api`, apiRouter);

apiRouter.post('/auth/create', async (req, res) => {
   if (await findUser('email', req.body.email)) {
     res.status(409).send({ msg: 'Existing user' });
   } else {
     const user = await createUser(req.body.email, req.body.password);
     setAuthCookie(res, user.token);
     res.send({ email: user.email });
   }
 });
 
 // GetAuth login an existing user
 apiRouter.post('/auth/login', async (req, res) => {
   const user = await findUser('email', req.body.email);
   if (user) {
     if (await bcrypt.compare(req.body.password, user.password)) {
       user.token = uuid.v4();
       await DB.updateUser(user);
       setAuthCookie(res, user.token);
       res.send({ email: user.email });
       return;
     }
   }
   res.status(401).send({ msg: 'Unauthorized' });
 }); 
 // logout the user
 apiRouter.delete('/auth/logout', async (req, res) => {
  const user = await findUser('token', req.cookies[authCookieName]);
  if (user) {
    delete user.token;
    DB.updateUser(user);
  }
  res.clearCookie(authCookieName);
  res.status(204).end();
});


 // get pantrys
 apiRouter.get('/pantry', async (req, res) => {
   const token = req.cookies[authCookieName];
   const user = await DB.getUserByToken(token);
   if (!user) {
     return res.status(401).send({ msg: 'Unauthorized' });
   }
 
   const userPantries = await DB.pantryCollection
   .find({ members: user.email})
   .toArray();
   res.send({ pantrys: userPantries });
 });

 // set pantrys
 apiRouter.post('/pantry', async (req, res) => {
   const token = req.cookies[authCookieName];
   const user = await DB.getUserByToken(token);
   if (! user) {
    return res.status(401).send({ msg: "Unauthorized" });
   }
   await DB.addPantry(req.body);
   const userPantries = await DB.pantryCollection
   .find({ members: user.email })
   .toArray();
   res.send({pantrys: userPantries});
 });


 // Update a pantry
 apiRouter.put('/pantry/:id', async (req, res) => {
  const token = req.cookies[authCookieName];
  const user = await DB.getUserByToken(token);
 
  if (!user) return res.status(401).send({ msg: "Unauthorized" });

  const pantryId = parseInt(req.params.id);

  const result = await DB.pantryCollection.updateOne(
    { ID: pantryId, members: user.email },
    { $set: req.body }
  );

  if (result.matchedCount === 0) {
    return res.status(404).send({ msg: "Pantry not found" });
  }

  const updatedPantry = await DB.pantryCollection.findOne({ ID: pantryId });
  res.send({ pantry: updatedPantry });
});

 apiRouter.get('/auth/currentMe', async (req, res) => {
  const token = req.cookies[authCookieName];
  if (!token) return res.status(401).send({ msg: 'Unauthorized' });

  const user = await findUser('token', token);
  if (!user) return res.status(401).send({ msg: 'Unauthorized' });

  res.send(user);
});


 async function createUser(email, password) {
  const passwordHash = await bcrypt.hash(password, 10);

  const user = {
    email: email,
    password: passwordHash,
    token: uuid.v4(),
  };
  await DB.addUser(user);

  return user;
}

async function findUser(field, value) {
  if (!value) return null;

  if (field === 'token') {
    return DB.getUserByToken(value);
  }
  return DB.getUser(value);
}

 function setAuthCookie(res, authToken) {
   res.cookie('token', authToken, {
     maxAge: 1000 * 60 * 60 * 24,
     httpOnly: false,
     secure: false,
     sameSite: 'lax'
   });
 }

// third party api
 apiRouter.get('/ducks/quack', async (req, res) => {
   try {
     const response = await fetch('https://random-d.uk/api/v2/quack');
     if (!response.ok) {
       return res.status(response.status).send({ msg: 'Failed to fetch duck' });
     }
     const data = await response.json();
     res.json(data);
   } catch (err) {
     console.error('Error fetching duck:', err);
     res.status(500).send({ msg: 'Internal server error' });
   }
 });


app.listen(port, () => {
   console.log(`Listening on port ${port}`);
 })