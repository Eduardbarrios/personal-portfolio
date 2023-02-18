
const Galeria = ()=>{
  //llamamos todos los elementos HTML que necesitamos
  const mainContainer = document.querySelector('.projects-section')
  const container = document.querySelector('.projects-container')
  const cards = document.querySelectorAll('.project-card')
  const puntos = document.querySelectorAll('.swich')

  puntos.forEach(element => {
    element.classList.remove('active')
  });
cards.forEach(element => {
    element.classList.remove('active')
  });

   cards.forEach((card,i)=>{
    //añadir la clase active al card activado y eliminarla del resto
    card.addEventListener('click', ()=>{
     cards.forEach(element => {
      element.classList.remove('active')
      });
     card.classList.add('active')
     puntos.forEach(element => {
      element.classList.remove('active')
      });
     puntos[i].classList.add('active')
    })
    })

  //Agregamos escuchadores de eventos para normalizar tamaños
  //al dar click fuera del proyecto
  container.addEventListener('click', function(event) {
    if (event.target !== this) {
      return;
    }
    cards.forEach(element => {
      element.classList.remove('active')
     });
    puntos.forEach(element => {
      element.classList.remove('active')
     });
    event.stopPropagation();
  });
  mainContainer.addEventListener('click', function(event) {
    if (event.target !== this) {
      return;
    }
    cards.forEach(element => {
      element.classList.remove('active')
     });
    puntos.forEach(element => {
      element.classList.remove('active')
     });
    event.stopPropagation();
  });
  
  if(window.innerWidth < 650){
    container.scrollLeft = 180*2;
  }

  }


  export {Galeria}