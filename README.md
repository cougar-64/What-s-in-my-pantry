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

- [x] **Server deployed and accessible with custom domain name** - [My server link](https://yourdomainnamehere.click).

## 🚀 HTML deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [x] **HTML pages** - I created 5 html pages for my project.
- [x] **Proper HTML element usage** - I used HEADER, FOOTER, BODY, MAIN, etc.
- [x] **Links** - All of the buttens will go to the pages they're supposed to through links
- [x] **Text** - There is lots of text on all of my pages
- [x] **3rd party API placeholder** - I specified I want zoo amimal pictures API on my about.html page
- [x] **Images** - There is a photo of a bison (that I took!) at the bottom of each page by my name
- [x] **Login placeholder** - Login has placeholders including username and password
- [x] **DB data placeholder** - There are multiple places on my pages that say I will be loading data from my databse
- [x] **WebSocket placeholder** - There are multiple places on my pages that say where I will be loading websocket notifications

## 🚀 CSS deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [x] **Header, footer, and main content body** - Headers and footers changed dramatically with layout, color, and links.
- [x] **Navigation elements** - Menu options have nice navigations that look nice too.
- [x] **Responsive to window resizing** - Pages are responsive to window resizings.
- [x] **Application elements** - There are lots of application elements that include body style changing of boldness, font size, and buttons, etc.
- [x] **Application text content** - All content of the text was changed in one way or another, looking much nicer now. 
- [x] **Application images** - Image tag CSS added to not overflow the page.

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
