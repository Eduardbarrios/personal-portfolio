const addClass =(element, className)=>{
  element.classList.add(className)
}

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

  }

const Carousel = ()=>{
    //llamamos todos los elementos HTML que necesitamos
    const mainContainer = document.querySelector('.projects-section')
    const puntos = document.querySelectorAll('.swich')
    const container = document.querySelector('.projects-container')
    const cards = document.querySelectorAll('.project-card')

   //calculamos el elemento central  del array de proyectos
  const middle = Math.floor(puntos.length / 2)

  //agregamos la clase active al elemento central
  puntos.forEach(element => {
    element.classList.remove('active')
  });
  cards.forEach(element => {
    element.classList.remove('active')
  }); 
  addClass(puntos[middle], 'active')
  addClass(cards[middle], 'active')
  container.style.transform = `translatex(0px)`

  puntos.forEach((punto, i) =>{
    punto.addEventListener('click', ()=>{
      //añadir la clase active al punto activado y eliminarla del resto
      puntos.forEach(element => {
        element.classList.remove('active')
      });
      punto.classList.add('active')
  
      //añadir la clase active al card activado y eliminarla del resto
      cards.forEach(element => {
        element.classList.remove('active')
      });
      cards[i].classList.add('active')
      const desplazamiento = middle-i;
      container.style.transform = `translatex(${desplazamiento*200}px)`
      })
    })

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
       const desplazamiento = middle-i;
        container.style.transform = `translatex(${desplazamiento*200}px)`
      })
      })
  


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
       puntos[middle].classList.add('active')
       cards[middle].classList.add('active')
       container.style.transform = `translatex(0px)`
      event.stopPropagation();
    });
}

  export {Galeria, Carousel}