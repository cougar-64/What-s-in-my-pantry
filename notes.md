# CS 260 Notes

[My startup - Simon](https://simon.cs260.click)

## Helpful links

- [Course instruction](https://github.com/webprogramming260)
- [Canvas](https://byu.instructure.com)
- [MDN](https://developer.mozilla.org)

## AWS

My IP address is: 54.81.96.130
Launching my AMI I initially put it on a private subnet. Even though it had a public IP address and the security group was right, I wasn't able to connect to it.

## Caddy

No problems worked just like it said in the [instruction](https://github.com/webprogramming260/.github/blob/main/profile/webServers/https/https.md).

## HTML

I really enjoyed the html! It was fun to have ideas, make changes on the fly, and be able to see those changes reflected live through the 'go live' extension. 

## CSS

This took a couple hours to get it how I wanted. It was important to make it responsive and Bootstrap helped with that. It looks great on all kinds of screen sizes.

Bootstrap seems a bit like magic. It styles things nicely, but is very opinionated. You either do, or you do not. There doesn't seem to be much in between.

I did like the navbar it made it super easy to build a responsive header.

```html
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
          <a class="navbar-brand">
            <img src="logo.svg" width="30" height="30" class="d-inline-block align-top" alt="" />
            Calmer
          </a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active" href="play.html">Play</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="about.html">About</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="index.html">Logout</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
```

I also used SVG to make the icon and logo for the app. This turned out to be a piece of cake.

```html
<svg width="100" height="100" xmlns="http://www.w3.org/2000/svg">
  <rect width="100" height="100" fill="#0066aa" rx="10" ry="10" />
  <text x="50%" y="50%" dominant-baseline="central" text-anchor="middle" font-size="72" font-family="Arial" fill="white">C</text>
</svg>
```

## React Part 1: Routing

Setting up Vite and React was pretty simple. I had a bit of trouble because of conflicting CSS. This isn't as straight forward as you would find with Svelte or Vue, but I made it work in the end. If there was a ton of CSS it would be a real problem. It sure was nice to have the code structured in a more usable way.

## React Part 2: Reactivity

This was a lot of fun to see it all come together. I had to keep remembering to use React state instead of just manipulating the DOM directly.

Handling the toggling of the checkboxes was particularly interesting.

```jsx
<div className="input-group sound-button-container">
  {calmSoundTypes.map((sound, index) => (
    <div key={index} className="form-check form-switch">
      <input
        className="form-check-input"
        type="checkbox"
        value={sound}
        id={sound}
        onChange={() => togglePlay(sound)}
        checked={selectedSounds.includes(sound)}
      ></input>
      <label className="form-check-label" htmlFor={sound}>
        {sound}
      </label>
    </div>
  ))}
</div>
```




HTML & CSS Basics
1. What does the <link> element do?
It links external resources to an HTML document — most commonly a CSS stylesheet.
Example:
<link rel="stylesheet" href="styles.css">
2. What does a <div> tag do?
It’s a generic container for grouping elements. It has no semantic meaning, but you can style or structure your layout using it.
3. Difference between #title and .grid selectors?
#title → targets an element with id="title" (IDs are unique per page).
.grid → targets all elements with class="grid" (can be used on many elements).
4. Difference between padding and margin?
Padding: space inside the element’s border (between content and border).
Margin: space outside the element’s border (between elements).
5. Given HTML and CSS using flex — how are images displayed?
With display: flex;, child elements (like images) are laid out:
In a row by default (flex-direction: row)
Evenly spaced or aligned depending on justify-content and align-items.
Example:
.container {
  display: flex;
  justify-content: space-around;
}
→ Images will sit side by side.
6. What does the following padding CSS do?
Example:
padding: 10px 20px;
Top & bottom = 10px, left & right = 20px.
JavaScript Concepts
7. Arrow function syntax:
const add = (a, b) => a + b;
It’s a shorter way to write functions. Arrow functions:
Don’t have their own this.
Are often used for callbacks or simple expressions.
8. What does code using map output?
map() creates a new array by applying a function to each element.
Example:
[1,2,3].map(x => x * 2)  // → [2,4,6]
9. Code using getElementById and addEventListener:
document.getElementById("btn").addEventListener("click", () => {
  console.log("Clicked!");
});
It finds an element with that ID and runs code when clicked.
10. What does this line do using a # selector?
document.querySelector("#title");
Selects the element with id="title".
11. Which of the following are true about the DOM?
It’s the Document Object Model, a tree structure of all HTML elements.
JavaScript can read and change HTML through it.
Every HTML element becomes a node in the DOM tree.
12. Default display value of <span>:
inline (doesn’t start a new line, just flows in text).
13. How to make all divs red in CSS:
div {
  background-color: red;
}
14. How to display an image with a hyperlink:
<a href="https://example.com">
  <img src="photo.jpg" alt="photo">
</a>
15. CSS box model order (inside → out):
content → padding → border → margin
16. Set text “trouble” to green but not “double”:
HTML:
<p><span class="green">trouble</span>double</p>
CSS:
.green { color: green; }
17. Code output using for loop and console.log:
Example:
for (let i = 0; i < 3; i++) {
  console.log(i);
}
// → 0, 1, 2
18. Use JS to select element with id “byu” and make it green:
document.getElementById("byu").style.color = "green";
19. Opening HTML tags:
Paragraph → <p>
Ordered list → <ol>
Unordered list → <ul>
1st-level heading → <h1>
2nd-level → <h2>
3rd-level → <h3>
20. Declare document type as HTML:
<!DOCTYPE html>
JavaScript Syntax & Logic
21. Valid JS syntax examples:
if (x > 0) { ... } 
else { ... }

for (let i = 0; i < 5; i++) { ... }

while (condition) { ... }

switch (day) {
  case "Mon": ...
  default: ...
}
22. Correct syntax for creating an object:
const person = { name: "Sam", age: 25 };
23. Can you add new properties to JS objects?
✅ Yes.
person.job = "developer";
24. Include JS in HTML:
<script src="script.js"></script>
or
<script>
  alert("hi");
</script>
25. Change "animal" to "crow" in HTML:
HTML:
<p id="animal">fish</p>
JS:
document.getElementById("animal").innerText = "crow";
26. Which describes JSON correctly?
JSON = JavaScript Object Notation
Text-based data format (key-value pairs).
Uses double quotes for keys and strings.
Example:
{"name": "Sam", "age": 25}
Terminal / Shell Commands
27. Command meanings:
chmod → change file permissions
pwd → print working directory
cd → change directory
ls → list files
vim, nano → text editors
mkdir → make new directory
mv → move or rename files
rm → remove files
man → show manual/help
ssh → connect to another computer remotely
ps → show running processes
wget → download from the web
sudo → run as superuser (admin)
28. Which command creates a remote shell session?
✅ ssh
29. ls -la means:
List all files (including hidden ones) in long format (permissions, owner, etc.).
Internet & Networking
30. For domain banana.fruit.bozo.click:
Top-level domain → .click
Root domain → bozo.click
Subdomain → banana.fruit
31. Is a web certificate necessary to use HTTPS?
✅ Yes — HTTPS requires a valid SSL/TLS certificate.
32. Can a DNS A record point to another A record?
❌ No. It must point directly to an IP address.
(Use a CNAME record to point to another domain.)
33. Ports:
443 → HTTPS
80 → HTTP
22 → SSH
Promises
34. What will code using Promises output?
Conceptually:
Promises represent future results (success or failure).
Example:
Promise.resolve("done").then(console.log);
// → "done"
If rejected:
Promise.reject("error").catch(console.log);
// → "error"
