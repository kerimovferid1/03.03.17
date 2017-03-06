var x = document.getElementById("audio"); 

function play() { 
    x.play(); 
} 

function pause() { 
    x.pause(); 
} 
	var mp3=["audio/1.mp3","audio/2.mp3","audio/3.mp3"];
			for(i=0;i<mp3.length;i++){
				document.write("<li>");
				document.write("<a onclick='play()' href="+mp3[i]+">"+mp3[i]+"</a>");
				document.write("</li>");
			}
