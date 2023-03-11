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

  // CONTADOR MESA PICNIC 1

  let cont1=document.getElementById('cont1'),
  cont2=document.getElementById('cont2'),
  cont3=document.getElementById('cont3')
  
  let cant1=0,cant2=0,cant3=0,
  tiem=100

 let tiempo1= setInterval(()=>{
cont1.textContent=cant1+=1

if(cant1===170)
{
    clearInterval(tiempo1)
}
  },'${tiem}');

  let tiempo2= setInterval(()=>{
    cont2.textContent=cant2+=1
    
    if(cant2===4100)
    {
        clearInterval(tiempo2)
    }
      },'${tiem}');

      let tiempo3= setInterval(()=>{
        cont3.textContent=cant3+=1
        
        if(cant3===4)
        {
            clearInterval(tiempo3)
        }
          },'${tiem}');