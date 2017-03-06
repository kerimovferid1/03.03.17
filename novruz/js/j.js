var bayram = new Date("Mar 20, 2017 00:00:00").getTime();

function k(){
	var indi = new Date().getTime();

	    var qalib = bayram - indi;

	  var gun= Math.floor(qalib / 86400000); // days
	var saat = Math.floor((qalib % 86400000) / 3600000); // hours
	var deq = Math.round(((qalib % 86400000) % 3600000) / 60000);
    var saniye= Math.floor((qalib%(60000))/(1000));

document.getElementById("timer").innerHTML = ("Bayrama" +gun+ " gun " + saat + " saat " + deq + " deqiqe" + saniye+ "saniye qalib");
} setInterval(k , 1000);
