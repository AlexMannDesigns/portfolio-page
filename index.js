const hero = document.querySelector(".hero");
const slider = document.querySelector(".slider");
const headline = document.getElementById("headline");
const subheading = document.getElementById("subheading");
const nav = document.getElementById("nav");
const downArrow = document.getElementById("chevron");

const text = "A Web Developer.";
let index = 1;

const tl = new TimelineMax();

setTimeout(() => {writeText()}, 3000)

if (window.innerWidth > 600) {
    tl.fromTo(
        hero,
        1, 
        {height: "0%"},
        {height: "80%", ease: Power2.easeInOut}
    ).fromTo(
        hero,
        1.2, 
        {width: "100%"}, 
        {width: "80%", ease: Power2.easeInOut}
    ).fromTo(
        slider,
        1.2,
        {x: "-100%"},
        {x: "0%", ease: Power2.easeInOut},
        "-=1.2"
    ).fromTo(
        nav,
        0.5,
        {y: "-100%", opacity: "0"},
        {y: "0%", opacity: "1"},
    ).fromTo(
        headline,
        0.5,
        {y: "100%", opacity: "0"},
        {y: "0%", opacity: "1"},
        "-=0.5"
    ).fromTo(
        chevron,
        0.5,
        {y: "100%", opacity: "0"},
        {y: "0%", opacity: "1"},
        "-=0.5"
    )
} else {
    tl.fromTo(
        hero,
        1, 
        {height: "0%"},
        {height: "80%", ease: Power2.easeInOut}
    ).fromTo(
        slider,
        1.2,
        {x: "-100%"},
        {x: "0%", ease: Power2.easeInOut},
    ).fromTo(
        nav,
        0.5,
        {y: "-100%", opacity: "0"},
        {y: "0%", opacity: "1"},
    ).fromTo(
        headline,
        0.5,
        {y: "100%", opacity: "0"},
        {y: "0%", opacity: "1"},
        "-=0.5"
    ).fromTo(
        chevron,
        0.5,
        {y: "100%", opacity: "0"},
        {y: "0%", opacity: "1"},
        "-=0.5"
    )
}



function writeText() {
    subheading.innerHTML = text.slice(0, index);
    index++

    if (index > text.length) {
        return
    }

    setTimeout(() => writeText(), 100);
}