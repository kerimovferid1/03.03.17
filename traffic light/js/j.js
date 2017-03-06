
var red = function red() {
    document.getElementsByClassName('r')[0].style.backgroundColor="red";
    document.getElementsByClassName('y')[0].style.backgroundColor="grey";
    document.getElementsByClassName('g')[0].style.backgroundColor="grey";
 // setTimeout(function(){ alert("Hello"); }, 3000);
};
var yellow= function yellow() {
    document.getElementsByClassName('r')[0].style.background="grey";
    document.getElementsByClassName('y')[0].style.background="yellow";
    document.getElementsByClassName('g')[0].style.background="grey";
}

var green =function green() {
    document.getElementsByClassName('r')[0].style.background="grey";
    document.getElementsByClassName('y')[0].style.background="grey";
    document.getElementsByClassName('g')[0].style.background="green";
}

function func(){
    setTimeout(red, 1000);
    setTimeout(yellow, 6000);
    setTimeout(green, 8000);
}
func();
setInterval(func,11000)