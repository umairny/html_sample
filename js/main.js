//Nav color and active class acoriding to page
window.onscroll = function() {navActive()};
var home = document.getElementById("home").offsetTop;
var news = document.getElementById("news").offsetTop;
var about = document.getElementById("about").offsetTop;
var contact = document.getElementById("contact").offsetTop;

var hbtn = document.getElementsByClassName("h");
var nbtn = document.getElementsByClassName("n");
var abtn = document.getElementsByClassName("a");
var cbtn = document.getElementsByClassName("c");

var nav = document.getElementById("Navbar");
//console.log(hbtn[0], home, news, about, contact)

function navActive() {
  //page hieght offset of page
  var page = window.pageYOffset

  if (page >= home && page < news - 350){
    //console.log(home, "Home Page")
    hbtn[0].classList.add("active")
    nbtn[0].classList.remove("active")
    abtn[0].classList.remove("active")
    cbtn[0].classList.remove("active")
    nav.style.backgroundColor = "";
  }
  if (page >= news - 200 && page < about - 350){
    //console.log(news, "News Page")
    hbtn[0].classList.remove("active")
    nbtn[0].classList.add("active")
    abtn[0].classList.remove("active")
    cbtn[0].classList.remove("active")
    nav.style.backgroundColor = "#017CFC";
  }

  if (page >= about - 200 && page < contact - 350){
    //console.log(about, "About Page")
    hbtn[0].classList.remove("active")
    nbtn[0].classList.remove("active")
    abtn[0].classList.add("active")
    cbtn[0].classList.remove("active")
    nav.style.backgroundColor = "#E5C400";
  }
  if (page >= contact - 200){
    //console.log(contact, "Contact Page")
    hbtn[0].classList.remove("active")
    nbtn[0].classList.remove("active")
    abtn[0].classList.remove("active")
    cbtn[0].classList.add("active")
    nav.style.backgroundColor = "#3391F2";
  }
}

//smooth scroll on click effetc on navbar
var homebtn = document.getElementById("homebtn");
var newsbtn = document.getElementById("newsbtn");
var aboutbtn = document.getElementById("aboutbtn");
var contactbtn = document.getElementById("contactbtn");

var home = document.getElementById("home").offsetTop;
var news = document.getElementById("news").offsetTop;
var about = document.getElementById("about").offsetTop;
var contact = document.getElementById("contact").offsetTop;

homebtn.addEventListener('click', () => window.scrollTo({
  top: home,
  behavior: 'smooth',
}));
newsbtn.addEventListener('click', () => window.scrollTo({
  top: news,
  behavior: 'smooth',
}));
aboutbtn.addEventListener('click', () => window.scrollTo({
  top: about,
  behavior: 'smooth',
}));
contactbtn.addEventListener('click', () => window.scrollTo({
  top: contact,
  behavior: 'smooth',
}));

