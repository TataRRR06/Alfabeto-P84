// Crea una referencia para el elemento canvas
canvas=document.getElementById('myCanvas');
ctx=canvas.getContext("2d");

img_width = 300;
img_height = 100;

var img_image;

img_x = 100;
img_y = 100;

function add() {
	img_imgTag = new Image(); //define una variable para una imagen nueva
	img_imgTag.onload = uploadimg; // establece una función para cargar la variable
	img_imgTag.src = img_image;   // carga la imagen
}

function uploadimg() {

	ctx.drawImage(img_imgTag, img_x, img_y, img_width, img_height);
}

//Escribe el código para obtener el evento key-pressed
window.addEventListener("keydown",my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
	
		if((keyPressed >=97 && keyPressed<=122)|| (keyPressed >=65 && keyPressed<=90)){

		
			//Escribe el código para verificar el tipo de tecla que se presionó
		aplhabetkey();
		document.getElementById("d1").innerHTML="Presionaste una tecla del alfabeto";
		console.log("alphabetkey");
		}
		else if(keyPressed >=48 && keyPressed<=57) {
			numberkey();
			document.getElementById("d1").innerHTML="Presionaste un número";
			console.log("numberkey");
		}
		else if(keyPressed >=37 && keyPressed<=40) {
			arrowkey();
			document.getElementById("d1").innerHTML="Presionaste una flecha";
			console.log("arrowkey");
		}
		else if((keyPressed ==17)|| (keyPressed ==18 || keyPressed ==27)) {
			specialkey();
			document.getElementById("d1").innerHTML="Presionaste una tecla especial";
			console.log("specialkey");
		}
			else  {
		otherkey();
		document.getElementById("d1").innerHTML="Presionaste un símbolo u otra tecla";
		console.log("otherkey");
	}
}

function aplhabetkey()
{
	//Sube la imagen con el mensaje. 
img_image="Alpkey.png";
add();
}
function numberkey()
{
	img_image="numkey.png";
add();
}
function arrowkey()
{
	img_image="Arrkey.png";
add();
}
function specialkey()
{
	img_image="spkey.png";
add();
}
function otherkey()
{
	img_image="otherkey.png";
	add();
}
