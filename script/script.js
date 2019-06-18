//navbar-nav
function toggleMenu(){
    var menu = document.getElementById('menu');
    console.log(menu);
    menu.classList.toggle('active');
}
window.onscroll = function changeNav(){
    var scroll =  window.scrollY;
    NAV = document.getElementById('mainNav');
    NAVLink = document.getElementsByClassName('nav-link');
    NAVBAR = document.getElementsByClassName('navbar-brand');
    //console.log(NAVBAR);
    if (scroll >= 500) {
        NAV.classList.add("BGWhite");
        var i;
        for(i=0; i < NAVLink.length;i++){
            NAVLink.item(i).classList.add("FontBL");
        }
        NAVBAR.item(0).classList.add("FontBL");
    } else {
        NAV.classList.remove("BGWhite");
        var i;
        for(i=0; i < NAVLink.length;i++){
            NAVLink.item(i).classList.remove("FontBL");
        }
        NAVBAR.item(0).classList.remove("FontBL");
    }
}

