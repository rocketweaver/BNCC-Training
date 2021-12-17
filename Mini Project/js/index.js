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
