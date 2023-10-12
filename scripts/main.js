let myHeading = document.querySelector("h1");
myHeading.onclick = function() {
    alert("Ouch!!!")
}
myHeading.textContent = "Hello Wordl!";

let myImage = document.querySelector("img");
myImage.onclick = function() {
    let imgSrc = myImage.getAttribute("src");
    if (imgSrc === "../test-site/images/myImage.jpg") {
        myImage.setAttribute("src", "../test-site/images/myImage2.jpg");
    } else {
        myImage.setAttribute("src", "../test-site/images/myImage.jpg");
    }
}

let myButton = document.querySelector("body > button.name");

function setUserName() {
    let myName = prompt("Please Enter your name");
    if (myName === null || !myName) { //myName이 null이거나 OR myName이 undefined일 때,
        setUserName();
    } else {
        localStorage.setItem("name", myName);
        myHeading.textContent = `Welcome ${myName}!!`;
    }
}



myButton.onclick = function() {
    if (!localStorage.getItem("name")) {
        setUserName();
    } else {
        let storedName = localStorage.getItem("name");
        myHeading.textContent = "Welcome " + storedName + "!!";
    }
}

let myButton2 = document.querySelector("body > button.nameChange");
console.log(myButton2.textContent);

myButton2.onclick = function() {
    setUserName();
}