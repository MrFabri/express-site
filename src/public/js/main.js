const body = document.getElementById("body");
const nav = document.getElementById("nav");

const toggleMenuDiv = document.getElementById("toggleMenu");
const menuTag = document.getElementById("menu");


// 1. HIDE || SHOW NAV ON SCROLL

window.onscroll = () => {
    changeNavPosi();
}

function changeNavPosi() {

    var prevScrollpos = window.pageYOffset;
    window.onscroll = function() {
        var currentScrollPos = window.pageYOffset;
        if (prevScrollpos > currentScrollPos) {
            toggleMenuDiv.style.display = "block";
            nav.style.top = "0";
        } else {
            toggleMenuDiv.style.display = "none";
            nav.style.top = "-80px";
        }
    prevScrollpos = currentScrollPos;
    }
}

// 2. TOGGLE MENU

toggleMenuDiv.addEventListener("click", toggleMenu);
var toggleStatus = 0;

function toggleMenu() {
    if (toggleStatus == 0) {
        menuTag.style.top = "80px";
        body.style.overflowY = "hidden";
        toggleStatus = 1;
    } else if (toggleStatus ==  1) {
        menuTag.style.top = "-200px";
        body.style.overflowY = "auto";
        toggleStatus = 0;
    }
}