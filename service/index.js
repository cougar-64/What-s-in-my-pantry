const cookieParser = require('cookie-parser');
const bcrypt = require('bcryptjs');
const express = require('express');
const uuid = require('uuid');
const app = express();
const cors = require('cors');

app.use(cors({
   origin: 'http://localhost:5173',
   credentials: true
 }));

const port = process.argv.length > 2 ? process.argv[2] : 4000;
app.use(express.static('public'));
const authCookieName = 'token';

let users = [];

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
       setAuthCookie(res, user.token);
       res.send({ email: user.email });
       return;
     }
   }
   res.status(401).send({ msg: 'Unauthorized' });
 });


 async function createUser(email, password) {
   const passwordHash = await bcrypt.hash(password, 10);
 
   const user = {
     email: email,
     password: passwordHash,
     token: uuid.v4(),
   };
   users.push(user);
 
   return user;
 }


 async function findUser(field, value) {
   if (!value) return null;
 
   return users.find((u) => u[field] === value);
 }

 function setAuthCookie(res, authToken) {
   res.cookie(authCookieName, authToken, {
     maxAge: 1000 * 60 * 60 * 24 * 365,
     secure: true,
     httpOnly: true,
     sameSite: 'strict',
   });
 }


app.listen(port, () => {
   console.log(`Listening on port ${port}`);
 })