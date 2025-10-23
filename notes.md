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




# Web Dev Midterm Notes

## HTML & CSS
- `<link>`: links external files (like CSS).
- `<div>`: container for grouping; no semantic meaning.
- `#id` targets a unique element; `.class` targets multiple.
- **Padding** = inside space; **Margin** = outside space.
- **Flexbox:** `display:flex` → children in a row (default).
- `padding:10px 20px` = top/bottom 10px, left/right 20px.
- `<span>` = inline element.
- Make all divs red: `div { background:red; }`
- Image link: `<a href="URL"><img src="img.jpg"></a>`
- Box model (in→out): content → padding → border → margin.
- Set “trouble” green only:
  ```html
  <span class="green">trouble</span>double
.green { color: green; }
Headings: <h1> <h2> <h3>; paragraph <p>; lists <ol> <ul>.
Doctype: <!DOCTYPE html>
JavaScript
Arrow fn: const add = (a,b)=>a+b
map(): transforms array → [1,2,3].map(x=>x*2)=[2,4,6]
getElementById("btn").addEventListener("click", fn) → runs fn on click.
document.querySelector("#id") → select element by id.
DOM = tree of HTML elements; JS can read/change it.
Loop: for(let i=0;i<3;i++) console.log(i);
Change color: document.getElementById("byu").style.color="green";
JS object: const obj={name:"Sam",age:25};
Add property: obj.job="dev";
Include JS: <script src="file.js"></script>
Change text: document.getElementById("animal").innerText="crow";
JSON: text data, key/value → {"name":"Sam"}
JS Logic Syntax
if(x>0){...} else {...}
for(let i=0;i<5;i++){...}
while(cond){...}
switch(val){case 1:...;break;default:...;}
Promises
Promise.resolve("ok").then(console.log) → "ok"
Promise.reject("err").catch(console.log) → "err"
Terminal Commands
chmod perms | pwd dir | cd change dir | ls list
vim/nano editors | mkdir make dir | mv move | rm remove
man manual | ssh remote login | ps processes
wget download | sudo admin
ls -la: show all (even hidden) in detail
Remote shell: ssh
Domains & Networking
banana.fruit.bozo.click →
TLD: .click
Root: bozo.click
Subdomain: banana.fruit
HTTPS needs SSL cert ✅
DNS A record → IP (not another A)
Ports: 443 HTTPS | 80 HTTP | 22 SSH

