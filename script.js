const menuIcon = document.querySelector('#menu-icon');
const navLinks = document.querySelector('.nav-links')

menuIcon.onclick = () => {
    navLinks.classList.toggle('active')
}

var typed = new Typed(".input-change", {
    strings: ["Front End Developer", "UX Designer", "Graphic Designer", "Full Stack Designer"],
    typedSpeed: 70,
    backSpeed: 55,
    loop: true
})


// class ReusableHeader extends HTMLElement {
//     connectedCallback() {
//         this.innerHTML = `
//         <header class="header">
//         <a href="index.html" class="logo"><span>Ashley Hamilton</span></a>
//         <ul class="nav-links">

//             <li>
//                 <a href="about.html"  target="_blank">About</a>
//             </li>

//             <li>
//                 <a href="graphicdesign.html"  target="_blank">Graphic Design</a>
//             </li>

//             <li>
//                 <a href="uxuidesign.html"  target="_blank">UXUI Design</a>
//             </li>

//             <li>
//                 <a href="webdesign.html"  target="_blank">Web Design</a>
//             </li>

//             <!-- <li>
//                 <a href="contact.html">Contact</a>
//             </li> -->


//         </ul>
//         <i class="fa-solid fa-bars" id="menu-icon"></i>
//         <button class="visit-btn"><a href="https://github.com/Ashhamilton28">Github</a></button>
//         </header>
//         `
//     }
// }

// customElements.define('reusable-header', ReusableHeader)