// DARK MODE TOGGLE
document.getElementById("themeToggle").onclick = ()=>{
    const html=document.documentElement;
    html.setAttribute("data-theme",
    html.getAttribute("data-theme")==="dark"?"light":"dark");
};

// 1 DATE
function showDate(){
    document.getElementById("date").innerText=new Date().toDateString();
}

// 2 CLOCK
function startClock(){
    setInterval(()=>{
        document.getElementById("clock").innerText=new Date().toLocaleTimeString();
    },1000);
}

// 3 CALCULATOR
function add(){
    let a=+num1.value;
    let b=+num2.value;
    sum.innerText=a+b;
}

// 4 TOGGLE TEXT
function toggleText(){
    let el=document.getElementById("toggleText");
    el.style.display=(el.style.display==="none")?"block":"none";
}

// 5 CHANGE BG
function changeBg(){
    document.body.style.background=colorPicker.value;
}

// 6 RANDOM
function randomNum(){
    random.innerText=Math.floor(Math.random()*100);
}

// 7 COUNTER
let c=0;
function inc(){count.innerText=++c;}
function dec(){count.innerText=--c;}

// 8 CHAR COUNT
textInput.oninput=()=>{
    charCount.innerText=textInput.value.length;
}

// 9 PASSWORD STRENGTH
password.oninput=()=>{
    let val=password.value;
    strength.innerText=val.length<6?"Weak":"Strong";
}

// =========================
// CONTINUE REAL FEATURES
// =========================

// 10 EMAIL VALIDATION
function validateEmail(){
    let email=document.getElementById("email").value;
    alert(/\S+@\S+\.\S+/.test(email)?"Valid":"Invalid");
}

// 11 ARRAY SORT
function sortArray(){
    let arr=[5,2,9];
    alert(arr.sort());
}

// 12 RANDOM COLOR
function randomColor(){
    document.body.style.background=
    "#"+Math.floor(Math.random()*16777215).toString(16);
}

// 13 COPY TEXT
function copyText(){
    navigator.clipboard.writeText("Copied!");
}

// 14 SCROLL TOP
function scrollTopBtn(){
    window.scrollTo({top:0,behavior:"smooth"});
}

// 15 TIMER
function startTimer(){
    setTimeout(()=>alert("Done"),3000);
}

// 16 STOPWATCH
let sw=0,interval;
function startSW(){
    interval=setInterval(()=>console.log(++sw),1000);
}

// 17 LOCAL STORAGE
function saveData(){
    localStorage.setItem("name","Scorpio");
}

// 18 GET STORAGE
function getData(){
    alert(localStorage.getItem("name"));
}

// 19 REMOVE STORAGE
function clearData(){
    localStorage.clear();
}

// 20 GEOLOCATION
function getLocation(){
    navigator.geolocation.getCurrentPosition(pos=>{
        alert(pos.coords.latitude);
    });
}

// 21 WINDOW WIDTH
function showWidth(){
    alert(window.innerWidth);
}

// 22 WINDOW HEIGHT
function showHeight(){
    alert(window.innerHeight);
}

// 23 ONLINE STATUS
function checkOnline(){
    alert(navigator.onLine);
}

// 24 VIBRATION (mobile)
function vibrate(){
    navigator.vibrate(200);
}

// 25 HISTORY BACK
function goBack(){
    history.back();
}

// 26 HISTORY FORWARD
function goForward(){
    history.forward();
}

// 27 RELOAD
function reloadPage(){
    location.reload();
}

// 28 URL INFO
function showURL(){
    alert(location.href);
}

// 29 JSON PARSE
function parseJSON(){
    let obj=JSON.parse('{"name":"JS"}');
    alert(obj.name);
}

// 30 JSON STRINGIFY
function stringifyJSON(){
    alert(JSON.stringify({name:"JS"}));
}

// 31 SET INTERVAL STOP
function stopInterval(){
    clearInterval(interval);
}

// 32 MATH ROUND
function roundNum(){
    alert(Math.round(4.6));
}

// 33 FLOOR
function floorNum(){
    alert(Math.floor(4.9));
}

// 34 CEIL
function ceilNum(){
    alert(Math.ceil(4.1));
}

// 35 RANDOM BOOLEAN
function randomBool(){
    alert(Math.random()>0.5);
}

// 36 KEY DETECT
document.addEventListener("keydown",(e)=>{
    console.log(e.key);
});

// 37 MOUSE POSITION
document.addEventListener("mousemove",(e)=>{
    console.log(e.clientX,e.clientY);
});

// 38 DOUBLE CLICK
document.body.ondblclick=()=>alert("Double Clicked");

// 39 DRAG EVENT
document.body.ondrag=()=>console.log("Dragging");

// 40 RESIZE
window.onresize=()=>console.log("Resized");

// 41 CONFIRM BOX
function confirmBox(){
    confirm("Are you sure?");
}

// 42 PROMPT
function promptBox(){
    prompt("Enter name");
}

// 43 ALERT
function alertBox(){
    alert("Hello!");
}

// 44 PRINT
function printPage(){
    window.print();
}

// 45 SCROLL DETECT
window.onscroll=()=>console.log("Scrolling");

// 46 SET ATTRIBUTE
function setAttr(){
    document.body.setAttribute("data-test","ok");
}

// 47 REMOVE ATTRIBUTE
function removeAttr(){
    document.body.removeAttribute("data-test");
}

// 48 CLASS ADD
function addClass(){
    document.body.classList.add("test");
}

// 49 CLASS REMOVE
function removeClass(){
    document.body.classList.remove("test");
}

// 50 TOGGLE CLASS
function toggleClass(){
    document.body.classList.toggle("test");
}