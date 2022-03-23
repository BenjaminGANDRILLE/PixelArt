
var v = 3
var couleurcrayon = 'white'

    function setcouleurcrayon(crayon){

		couleurcrayon = crayon
}

	function coloriage(pixel){
    
    	pixel.style.backgroundColor = couleurcrayon;
        
    }

    function newcolor (){
        var nouvelle = window.prompt ("Entrer une couleur au format HEX",'#');
     document.getElementById('palette').innerHTML += "<div class='crayon' style='background-color: "+nouvelle+"' onclick='setcouleurcrayon(\""+nouvelle+"\")'></div>"
    }   

    function rase() {
	var elements = document.getElementsByClassName('pixel');
	for(var i = 0; i < elements.length; i++){
		elements[i].style.backgroundColor = "white";
	}
}

    function agrandir(){
 
var newhauteur= document.getElementsByClassName('row')[0].innerHTML;
document.getElementById('art').innerHTML+= "<div class='row'>"+newhauteur+"</div>"
v+=1
    var i 
    var newpixel = "<div class='pixel' onclick='coloriage(this)'></div>"

             for(i = 0; i < v ; i++) {
                 document.getElementsByClassName('row')[i].innerHTML+=newpixel
             }

             document.getElementById('x').innerHTML= v+"x"+v

}





