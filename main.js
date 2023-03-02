// NAVBAR 
 
 // search-box open close js code
 let navbar = document.querySelector(".navbar");
 let searchBox = document.querySelector(".search-box .bx-search");
 // let searchBoxCancel = document.querySelector(".search-box .bx-x");
 
 searchBox.addEventListener("click", ()=>{
   navbar.classList.toggle("showInput");
   if(navbar.classList.contains("showInput")){
     searchBox.classList.replace("bx-search" ,"bx-x");
   }else {
     searchBox.classList.replace("bx-x" ,"bx-search");
   }
 });
 
 // sidebar open close js code
 let navLinks = document.querySelector(".nav-links");
 let menuOpenBtn = document.querySelector(".navbar .bx-menu");
 let menuCloseBtn = document.querySelector(".nav-links .bx-x");
 menuOpenBtn.onclick = function() {
 navLinks.style.left = "0";
 }
 menuCloseBtn.onclick = function() {
 navLinks.style.left = "-100%";
 }
 
 
 // sidebar submenu open close js code
 let htmlcssArrow = document.querySelector(".htmlcss-arrow");
 htmlcssArrow.onclick = function() {
  navLinks.classList.toggle("show1");
 }
 let moreArrow = document.querySelector(".more-arrow");
 moreArrow.onclick = function() {
  navLinks.classList.toggle("show2");
 }
 let jsArrow = document.querySelector(".js-arrow");
 jsArrow.onclick = function() {
  navLinks.classList.toggle("show3");
 }

 const color=document.getElementById('fondo_color')
 const numero=document.getElementById('numero')
 
let cantidad=0
 let tiempo=setInterval(() => {
     cantidad+=1
     color.style.height=`${cantidad}%`
     numero.textContent=cantidad
     if(cantidad===100){
         clearInterval(tiempo)
     }
 }, 100);

  // CONTADOR

  addEventListener('DOMContentLoaded', ()=>{
    const contadores = document.querySelectorAll('.contador_cantidad');
    const velocidad = 1000;

    const animarContadores = () =>{
        for(const contador of contadores){
            const actualizar_contador =() =>{
                let cantidad_maxima = +contador.dataset.cantidadTotal,
                valor_actual = +contador.innerText,
                incremento = cantidad_maxima / velocidad;
                if(valor_actual < cantidad_maxima){
                    contador.innerText = Math.ceil(valor_actual + incremento)
                    setTimeout((actualizar_contador), 5);
                }else{
                    contador.innerText = cantidad_maxima;

                }
            }
            actualizar_contador();
        }
    }

    const mostrarContadores = elementos =>{
        elementos.forEach(element => {
            if(element.isIntersecting){
                   element.target.classList.add('animar');
                   element.target.classList.remove('ocultar');
                   setTimeout(animarContadores, 300)
            }
        });
    }

    const observer = new IntersectionObserver(mostrarContadores, {
        threshold: 0.75 //0 - 1 
    })

    const elementosHTML = document.querySelectorAll('.contador')
    elementosHTML.forEach(elementoHTML =>{
        observer.observe(elementoHTML)
    })
    
})