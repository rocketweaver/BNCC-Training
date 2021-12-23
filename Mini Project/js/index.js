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
          return gender[i].value;
          break;
        }
      }
}

submit.addEventListener("click", () => {
    inputValidation();
    
    userInput = {
        name : firstName.value + " " + lastName.value,
        email : email.value,
        phone_number : phoneNumber.value,
        gender : genderValue(),
        msg_txt: msg.value
    }

    console.log(userInput);
});

const isValidEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

const inputValidation = () => {
    const nameGroup = document.querySelectorAll(".name-input");
    const nameErrorMsg = document.getElementById("error-name");
    const firstNameValue = firstName.value.trim();

    if(firstNameValue === "") {
        nameGroup.forEach(e => {
            e.classList.add("error-border");
        });
        nameErrorMsg.innerHTML = "Please input your first name."
    } else {
        nameGroup.forEach(e => {
            e.classList.add("success-border");
        });
        nameErrorMsg.innerHTML = "";
    }

    const emailValue = email.value.trim();
    const emailErrorMsg = document.getElementById("error-email");

    if(emailValue.length === "") {
        email.classList.add("error-border");
        emailErrorMsg.innerHTML = "Please input your email.";
    } else if(!isValidEmail(emailValue)) {
        email.classList.add("error-border");
        emailErrorMsg.innerHTML = "Please use correct format on your email.";
    } else {
        email.classList.add("success-border");
        emailErrorMsg.innerHTML = "";
    }

    const phoneNumberValue = phoneNumber.value.trim();
    const phoneNumberErrorMsg = document.getElementById("error-phone-number"); 
    if(phoneNumberValue.length < 10 || phoneNumberValue.length > 12) {
        phoneNumber.classList.add("error-border");
        phoneNumberErrorMsg.innerHTML = "The phone number can't be less than 10 or more than 12.";
    } else {
        phoneNumber.classList.add("success-border");
        phoneNumberErrorMsg.innerHTML = "";
    }

    const msgLength = msg.value.split(' ').length;
    const msgErrorMsg = document.getElementById("error-msg"); 
    if(msgLength < 5) {
        msg.classList.add("error-border");
        msgErrorMsg.innerHTML = "The message can't be less than 5 words";
    } else {
        msg.classList.add("success-border");
        msgErrorMsg.innerHTML = "";
    }
};
