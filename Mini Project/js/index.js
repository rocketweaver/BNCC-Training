const sectionCollection = document.querySelectorAll("section");
const navLink = document.querySelectorAll(".nav-link");

window.addEventListener("scroll", () => {
    let current = '';
    // console.log(pageYOffset);
    sectionCollection.forEach(section => {
        const sectionTop = section.offsetTop;
        // console.log(sectionTop);
        const sectionHeight = section.clientHeight;
        if(pageYOffset >= sectionTop) {
            current = section.getAttribute("id");
        }
    })

    // console.log(current);
    navLink.forEach(a => {
        a.classList.remove("active");
        if(a.classList.contains(current)) {
            a.classList.add("active");
        }
    })
});

const hamburgerMenu = document.querySelector("#hamburger-menu");
const navList = document.getElementById("nav-list");

let bool = 0;

hamburgerMenu.addEventListener("click", function() {
    if(!bool) {
        bool = 1;
        navList.style.transform = "translateY(0)";
    } else {
        bool = 0;
        navList.style.transform = "translateY(-120%)";
    }
});

//get user input
const firstName = document.getElementById("first-name"); 
const lastName = document.getElementById("last-name"); 
const email = document.getElementById("email");
const phoneNumber = document.getElementById("phone-number");
const gender = document.getElementsByClassName("gender");
const msg = document.getElementById("message");
const submit = document.getElementById("submit");

let userInput = {};

let genderValue = () => {
    for (var i = 0, length = gender.length; i < length; i++) {
        if (gender[i].checked) {
          // do whatever you want with the checked radio
          return gender[i].value;
      
          // only one radio can be logically checked, don't check the rest
          break;
        }
      }
}

submit.addEventListener("click", () => {
    userInput = {
        name : firstName.value + " " + lastName.value,
        email : email.value,
        phone_number : phoneNumber.value,
        gender : genderValue(),
        msg_txt: msg.value
    }

    console.log(userInput);
});
