
window.onbeforeunload = function () {
  window.scrollTo(0, 0);
}
/*==================== MENU SHOW Y HIDDEN ====================*/

const navMenu = document.getElementById("nav-menu"),
      navToggle = document.getElementById("nav-toggle"),
      navClose = document.getElementById("nav-close")

/*===== MENU SHOW =====*/
/* Validate if constant exists */
if (navToggle) {
    navToggle.addEventListener("click",()=> {
        console.log("opening");
        navMenu.classList.add("show-menu")
    })
}

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */

if (navClose) {
    navClose.addEventListener("click",()=>{
        //console.log("closing");
        navMenu.classList.remove("show-menu")
    })
}

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll(".nav__link")

function linkAction() {
   const navMenu = document.getElementById("nav-menu")
   navMenu.classList.remove("show-menu");
}
 navLink.forEach(element => {
     element.addEventListener("click",linkAction)
 });
 
/*==================== intro ====================*/
 // not needed right now

// function toggleIntro() {
//     const introOut = document.getElementById("intro")
//     introOut.classList.add("displayIntro")
//     console.log(introOut.classList)
// }
// setTimeout( toggleIntro,3000)

function goto_home() {
    const home_goto = document.getElementById("home");

    home_goto.scrollIntoView({
        block: "start",
        behavior: "smooth",
        inline: "nearest"
    });
}

function scrollTimer() {
    const scroll_timming = document.getElementById("countdown");

    scroll_timming.classList.add("countdownScroll");

}
 setTimeout(goto_home, 8000);
 setTimeout(scrollTimer, 10000);

/*==================== ACCORDION SKILLS ====================*/

const skillsContent = document.getElementsByClassName("skills__content"),
      skillsHeader = document.querySelectorAll(".skills__header")

      function toggleSkills() {
          let itemClass = this.parentNode.className
   
          if(itemClass === "skills__content skills__close"){
              this.parentNode.className = "skills__content skills__open"
          }else{
                this.parentNode.className = "skills__content skills__close"
          }
    
      }

skillsHeader.forEach((elem) => {
    elem.addEventListener("click",toggleSkills)
})

/*==================== PORTFOLIO SWIPER  ====================*/
 let swiper = new Swiper(".portfolio__container", {
            effect: "coverflow",
            grabCursor: true,
            
            centeredSlides: true,
            slidesPerView: "auto",
            coverflowEffect: {
                rotate: 50,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: true,
            },
            pagination: {
                el: ".swiper-pagination",
               
                dynamicBullets:true,
            },
            
        });


/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll("section[id]")

function scrollActive() {
    const scrollY = window.pageYOffset;

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute("id")
      //  console.log(sectionId);
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector(".nav__menu a[href*=" + sectionId + "]").classList.add("active-link")
           
        }else{
            document.querySelector(".nav__menu a[href*=" + sectionId +"]").classList.remove("active-link")
        }
    })
}
setTimeout(window.addEventListener("scroll",scrollActive),6000);

/*==================== CHANGE BACKGROUND HEADER ====================*/ 

function scrollHeader() {
    const nav = document.getElementById("header")
    if (this.scrollY >= 80) {
        nav.classList.add("scroll-header");
     }else{
            nav.classList.remove("scroll-header");
    }
}
 window.addEventListener("scroll",scrollHeader);
/*==================== SHOW SCROLL UP ====================*/ 

function scrolltop() {
    const scrollUp = document.getElementById("scroll-up")
    if (this.scrollY >= 1000) {
        scrollUp.classList.add("show-scroll");
     }else{
            scrollUp.classList.remove("show-scroll");
    }
}
 window.addEventListener("scroll",scrolltop);


/*==================== DARK LIGHT THEME ====================*/ 

const themeButton = document.getElementById("theme-button");
const darkTheme = "dark-theme"
const iconTheme = "uil-sun"

const selectedTheme = localStorage.getItem("selected-theme");
const selectedIcon = localStorage.getItem("selected-icon");

const getcurrentTheme =() => document.body.classList.contains(darkTheme) ? "dark" :"light";
const getcurrentIcon =() => document.body.classList.contains(iconTheme) ? "uil-moon" :"uil-sun";

if(selectedTheme){
    document.body.classList[selectedTheme === "dark" ? "add" : "remove"](darkTheme);
    themeButton.classList[selectedIcon === "uil-moon" ? "add" : "remove"](iconTheme)
}

themeButton.addEventListener("click",()=> {
    document.body.classList.toggle(darkTheme);
    themeButton.classList.toggle(iconTheme);
    localStorage.setItem("selected-theme",getcurrentTheme());
    localStorage.setItem("selected-icon",getcurrentIcon());
})

setTimeout(() => {
    $('#modalform').modal({
        fadeDuration:  300,
        fadeDelay: 1.5
    });
}, 31000);


(function($) { "use strict";
	
 document.getElementsByTagName("body")[0].addEventListener("mousemove", function(n) {
        t.style.left = n.clientX + "px", 
		t.style.top = n.clientY + "px", 
		e.style.left = n.clientX + "px", 
		e.style.top = n.clientY + "px", 
		i.style.left = n.clientX + "px", 
		i.style.top = n.clientY + "px"
    });
    var t = document.getElementById("cursor"),
        e = document.getElementById("cursor2"),
        i = document.getElementById("cursor3");
    function n(t) {
        e.classList.add("hover"), i.classList.add("hover")
    }
    function s(t) {
        e.classList.remove("hover"), i.classList.remove("hover")
    }
    s();
    for (var r = document.querySelectorAll(".hover-target"), a = r.length - 1; a >= 0; a--) {
        o(r[a])
    }
    function o(t) {
        t.addEventListener("mouseover", n), t.addEventListener("mouseout", s)
    }
    	
})(jQuery); 
