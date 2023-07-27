var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var randomButton;

function createRandomButton() {
  randomButton = document.createElement("button");
  randomButton.textContent = "DO MAGIC!";
  body.appendChild(randomButton);
}

function generarLetra(){
	var letras = ["a","b","c","d","e","f","0","1","2","3","4","5","6","7","8","9"];
	var numero = (Math.random()*15).toFixed(0);
	return letras[numero];
}

function colorHEX(){
	var coolor = "";
	for(var i=0;i<6;i++){
		coolor = coolor + generarLetra() ;
	}
	return coolor = "#" + coolor;
}

function colorRamdom(){
	color1.value = colorHEX();
	color2.value = colorHEX();
}

createRandomButton();
colorRamdom();

function setGradient() {

	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";

	css.textContent = body.style.background + ";";
}

setGradient();

color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);


function buttonColor(){
	colorRamdom();
	setGradient();
}

randomButton.addEventListener("click", buttonColor);


function copyLine() {
    // Obtener el contenido de la línea que queremos copiar
    const content = document.getElementById("line").innerText;

    // Crear un elemento de texto temporal para copiar el contenido
    const tempInput = document.createElement("input");
    tempInput.setAttribute("value", content);

    // Agregar el elemento temporal a la DOM
    document.body.appendChild(tempInput);

    // Seleccionar el contenido del elemento temporal
    tempInput.select();
    tempInput.setSelectionRange(0, 99999); // Para dispositivos móviles

    // Ejecutar el comando de copiar
    document.execCommand("copy");

    // Remover el elemento temporal
    document.body.removeChild(tempInput);

    alert("Copied line!");
}



