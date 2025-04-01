/*()=>{}  otra forma de nombrar una funcion anonima */
document.addEventListener("DOMContentLoaded",function () {
    const colores=["red","orange","yellow"];//arreglos
    const secciones=document.querySelectorAll("section");
    secciones.forEach((seccion,index)=>{
        seccion.textContent=`seccion ${index+1}`;
        seccion.style.color= "white" ;
        seccion.style.borderRadius="5px";
        seccion.style.fontWeight="600";
        seccion.style.borderRadius= `${index*10}px` ;
        seccion.style.backgroundColor=colores[index];
    });
    /* 
    const boton1=document.querySelector(".container");
    const botonCrea=document.querySelector(".container button");

    const nuevo= document.createElement("section");
    nue

    */
    const boton= document.getElementById("btn");
    const nuevo= document.createElement("section");
          nuevo.style.width= "200px";
          nuevo.textContent=`hola`;
          nuevo.style.height= "200px";
          nuevo.style.backgroundColor= "green" ;
    boton.addEventListener("click", ()=>{
          const main = document.querySelector(".container");
          main.appendChild(nuevo);
    });
    
});


const persona = { 
nombre: "Juan", 
edad: 30, 
ciudad: "Madrid" 
};

for (let clave in persona) {
console.log(`${clave}: ${persona[clave]}`);
}
/*DOM */
let nuevo=document.createElement("h3");

//2. crear contenido
let contenido1=document.createTextNode('Este es mi nuevo elemento');

//3. Juntar elementos 
nuevo.appendChild(contenido1);

//4. Agregar nuevo elemento 
document.body.appendChild(nuevo);
