# What's in my pantry

The purpose of this application is to help my wife and I know what we have in our pantry (and fridge) at all times regardless of whether we're at home or not. It will have a list of all of the food in our house as well as the quantities of each. I will be able to keep track of how much food I'll have, and the quanitity will change when either my wife or I use some of the food. 

## 🚀 Specification Deliverable

> [!NOTE]
>  Fill in this sections as the submission artifact for this deliverable. You can refer to this [example](https://github.com/webprogramming260/startup-example/blob/main/README.md) for inspiration.

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [ ] Proper use of Markdown
- [x] A concise and compelling elevator pitch
- [x] Description of key features
- [x] Description of how you will use each technology
- [ ] One or more rough sketches of your application. Images must be embedded in this file using Markdown image references.

### Elevator pitch

Have you ever been at the store and seen something that wasn't on your list and said to yourself "dang it! I can't remember if I have this in my pantry or not". You don't think you have it so you buy it, go home, and find you already had 9 containers off-brand sour cream and you just bought a tenth? Well, no more sour cream surprises! "What's in my pantry' will keep track of all the food in your house and keep track of how the quantities adjust when you buy more or use some of it. 

### Design

![Design image 1](IMG_4320.png)
![Design image 2](IMG_4321.png)

Above is what my design will look like. Below is how the sequence of events would function given calls to the server and websockets. 

![Interaction_image](IMG_4322.png)

### Key features

- Secure login
- Ability to add yourself to multiple pantrys (home, work, grandma's, etc.)
- Ability to add and delete quantity of food

### Technologies

I am going to use the required technologies in the following ways.

- **HTML** - I will use HTML to correctly display pages and information. 2 HTML pages, one for login, one for list of active pantrys and adding/deleting food from pantrys.
- **CSS** - My CSS will have good colors, spacing, and styling.
- **React** - React will provide a login and also update the webpage efficiently when food is added/deleted, instead of reloading the entire webpage.
- **Service** - Will have backend Service endpoints for:
   - login
   - creating/adding/removing yourself from a pantry
   - adding/deleting food and food quantities
- **DB/Login** - register/login users stored in Database. Keeps track of what pantrys you're a part of. Cannot view/edit a pantry if you aren't part of it. Login credentials stored securely in database.
- **WebSocket** - When one person makes a change to the pantry, it is broadcast to everyone else who is a part of that pantry. 

## 🚀 AWS deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [ ] **Server deployed and accessible with custom domain name** - [My server link](https://yourdomainnamehere.click).

## 🚀 HTML deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [ ] **HTML pages** - I did not complete this part of the deliverable.
- [ ] **Proper HTML element usage** - I did not complete this part of the deliverable.
- [ ] **Links** - I did not complete this part of the deliverable.
- [ ] **Text** - I did not complete this part of the deliverable.
- [ ] **3rd party API placeholder** - I did not complete this part of the deliverable.
- [ ] **Images** - I did not complete this part of the deliverable.
- [ ] **Login placeholder** - I did not complete this part of the deliverable.
- [ ] **DB data placeholder** - I did not complete this part of the deliverable.
- [ ] **WebSocket placeholder** - I did not complete this part of the deliverable.

## 🚀 CSS deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [ ] **Header, footer, and main content body** - I did not complete this part of the deliverable.
- [ ] **Navigation elements** - I did not complete this part of the deliverable.
- [ ] **Responsive to window resizing** - I did not complete this part of the deliverable.
- [ ] **Application elements** - I did not complete this part of the deliverable.
- [ ] **Application text content** - I did not complete this part of the deliverable.
- [ ] **Application images** - I did not complete this part of the deliverable.

## 🚀 React part 1: Routing deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [ ] **Bundled using Vite** - I did not complete this part of the deliverable.
- [ ] **Components** - I did not complete this part of the deliverable.
- [ ] **Router** - I did not complete this part of the deliverable.

## 🚀 React part 2: Reactivity deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [ ] **All functionality implemented or mocked out** - I did not complete this part of the deliverable.
- [ ] **Hooks** - I did not complete this part of the deliverable.

## 🚀 Service deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [ ] **Node.js/Express HTTP service** - I did not complete this part of the deliverable.
- [ ] **Static middleware for frontend** - I did not complete this part of the deliverable.
- [ ] **Calls to third party endpoints** - I did not complete this part of the deliverable.
- [ ] **Backend service endpoints** - I did not complete this part of the deliverable.
- [ ] **Frontend calls service endpoints** - I did not complete this part of the deliverable.
- [ ] **Supports registration, login, logout, and restricted endpoint** - I did not complete this part of the deliverable.


## 🚀 DB deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [ ] **Stores data in MongoDB** - I did not complete this part of the deliverable.
- [ ] **Stores credentials in MongoDB** - I did not complete this part of the deliverable.

## 🚀 WebSocket deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [ ] **Backend listens for WebSocket connection** - I did not complete this part of the deliverable.
- [ ] **Frontend makes WebSocket connection** - I did not complete this part of the deliverable.
- [ ] **Data sent over WebSocket connection** - I did not complete this part of the deliverable.
- [ ] **WebSocket data displayed** - I did not complete this part of the deliverable.
- [ ] **Application is fully functional** - I did not complete this part of the deliverable.
