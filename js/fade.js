var pageIndex = 1;
    btnact(pageIndex);

function currentBtn(n) {
    btnact(pageIndex = n);
}

function btnact(n){
    var i;
    var navbtns = document.getElementsByClassName("btn")
    var pages = document.getElementsByClassName("page")

    if(n > pages.length){
        pageIndex = 1
    }
    if (n < 1) {
        pageIndex = pages.length
    }

    for (i = 0; i < pages.length; i++) {
        pages[i].style.display = "none";  
    }
    
    for (i = 0; i < navbtns.length; i++){
        navbtns[i].className = navbtns[i].className.replace(" active", "");
        console.log(navbtns[i].className = navbtns[i].className.replace(" active", ""))
    }

    console.log(pages[pageIndex-1].style.display = "block")
    console.log(navbtns[pageIndex-1].className += " active")
    pages[pageIndex-1].style.display = "block";
    navbtns[pageIndex-1].className += " active";
}