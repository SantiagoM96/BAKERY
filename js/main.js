// MENU RESPONSIVE
document.addEventListener("DOMContentLoaded", function () {
  const burgerMenuBtn = document.querySelector("#burger-menu-toggler");

  function navResponsive() {

    burgerMenuBtn.addEventListener('click', function () {
      document.body.classList.toggle('mobile-menu-active');
    });

  }

  navResponsive();
// BARRA DE NAVEGACIÓN

window.addEventListener('scroll', function(){
	let scrolledDistance = window.scrollY;
    	
    if(scrolledDistance > 50) { 
    	document.body.classList.add('scrolled');
    } else {
    	document.body.classList.remove('scrolled');
    }
});

//BOTON IR ARRIBA
document.getElementById("buttonUp").addEventListener("click", scrollUp)

function scrollUp() {
  var currentScroll = document.body.scrollTop;
  if (currentScroll > 0) {
    window.scrollTo(0, 0)
  }
}

buttonUp = document.getElementById("buttonUp");

window.onscroll = function () {

  var scroll = document.body.scrollTop;

  if (scroll > 300) {
    buttonUp.style.transform = "scale(1)";
  } else if (scroll < 300) {
    buttonUp.style.transform = "scale(0)";
  }

}


})


