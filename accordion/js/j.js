var acc = document.getElementsByClassName("acc");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].onclick = function(){
        var p = this.nextElementSibling;
        if (p.style.display === "block") {
            p.style.display = "none";
        } else {
            p.style.display = "block";
        }
    }
}