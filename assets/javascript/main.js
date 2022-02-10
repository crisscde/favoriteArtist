
// DOM 
/*
Para crear un evento se realizan 3 pasos:
1. Se obtienen los elementos de la etiqueta o del atributo
2. Se recorren usando la función forEach
3. Se agrega el evento dentro de la función
*/

// let buttons_x = document.querySelectorAll(".close");

// buttons_x.forEach(function(button_x){

//   button_x.addEventListener("click", function(ev){
//     ev.preventDefault();

//   });
// });

/*
Sirve para eliminar o agregar algo, en este caso un icono

iconos = document.querySelectorAll("i");

iconos.forEach(function(icono){
  icono.classList.remove("fa-calendar");
  icono.classList.add("fa-calendar");
});
*/

// Se obtienen los elementos de la clase close
let links = document.querySelectorAll(".close");

// Se recorren
links.forEach(function(link){
  
  // Se agrega un evento click
  link.addEventListener("click", function(ev){
    ev.preventDefault();
    let content = document.querySelector('.content');

    // Se queitan las animaciones que ya tiene
    content.classList.remove("animate__slideInUp");
      
    // Se agregan nuevas animacioes cuando se sale
    content.classList.add("animate__rollOut");

    setTimeout(function(){
      location.href =   ("../boletines");
    },700)

  });
});

