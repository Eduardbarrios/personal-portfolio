const ScrollHanddle = ()=>{
 const HeaderItem = document.querySelectorAll('.links_section')
 HeaderItem[0].classList.add('onScroll')
 window.onscroll=()=>{
  if(window.scrollY <= 500){
  HeaderItem.forEach((item)=>{
    item.classList.remove('onScroll')
  })
  HeaderItem[0].classList.add('onScroll')
  }
  else if(window.scrollY >= 500 && window.scrollY <= 1000){
    HeaderItem.forEach((item)=>{
      item.classList.remove('onScroll')
    })
    HeaderItem[1].classList.add('onScroll')
  }
  else if(window.scrollY >= 1000 && window.scrollY <= 1300){
    HeaderItem.forEach((item)=>{
      item.classList.remove('onScroll')
    })
    HeaderItem[2].classList.add('onScroll')
  }
  else if(window.scrollY >= 1300){
    HeaderItem.forEach((item)=>{
      item.classList.remove('onScroll')
    })
    HeaderItem[3].classList.add('onScroll')
  }
}}
export {ScrollHanddle}