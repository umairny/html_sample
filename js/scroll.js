var pageIndex = 1;
    btnact(pageIndex);

function currentBtn(n) {
    btnact(pageIndex = n);
}

//On windows scroll function active class change
window.onscroll = function winscroll (){
    var pages = document.getElementsByClassName("page")
    var navbtns = document.getElementsByClassName("btn")    
        
    var page = window.pageYOffset;
    var home = pages[0].offsetTop;
    var news = pages[1].offsetTop;
    var about = pages[2].offsetTop;
    var contact = pages[3].offsetTop;
    
    //console.log(home, news, about, contact, page)
    
    if (page >= home && page < news - 350) {
        for (i = 0; i < navbtns.length; i++){
            navbtns[i].className = navbtns[i].className.replace(" active", "");
         }
        navbtns[0].className += " active";
    }
    if (page >= news - 100 && page < about - 350) {
        for (i = 0; i < navbtns.length; i++){
            navbtns[i].className = navbtns[i].className.replace(" active", "");
         }
        navbtns[1].className += " active";
    }
    if (page >= about - 100 && page < contact - 350) {
        for (i = 0; i < navbtns.length; i++){
            navbtns[i].className = navbtns[i].className.replace(" active", "");
         }

        navbtns[2].className += " active";
    }
    if (page >= contact - 100) {
        for (i = 0; i < navbtns.length; i++){
            navbtns[i].className = navbtns[i].className.replace(" active", "");
         }
        navbtns[3].className += " active";
    }
}

//Onclick button scroll to page with smooth effec
function btnact(n){
    var i;
    var pages = document.getElementsByClassName("page")
    if(n > pages.length){
        pageIndex = 1
    }
    if (n < 1) {
        pageIndex = pages.length
    }
    window.scrollTo({
        top: pages[pageIndex-1].offsetTop,
        behavior: 'smooth',
      })
}
