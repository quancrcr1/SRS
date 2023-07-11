const ps1 = document.getElementById('ps1');
const ps2 = document.getElementById('ps2');
const ps3 = document.getElementById('ps3');
const ps4 = document.getElementById('ps4');
const ps5 = document.getElementById('ps5');


ps1.addEventListener('click', (e) => {
  e.preventDefault();

  const mps1 = new SpeechSynthesisUtterance(
    "I ride my bike to school every day."
  );
  window.speechSynthesis.speak(mps1);

});
ps2.addEventListener('click', (e) => {
    e.preventDefault();
  
    const mps2 = new SpeechSynthesisUtterance(
      "The sun rises in the East."
    );
    window.speechSynthesis.speak(mps2);
  
  });
$(document).ready(function(){
    $('.card-container').slick({
        infinite:false,
        prevArrow:"<button type='button' class='prevBtn button-16  slick-prev pull-left'><i class='fa fa-angle-left' aria-hidden='true'></i> Trở lại</button>",
        nextArrow:"<button type='button' class='nextBtn button-16  slick-next pull-right'>Tiếp theo <i class='fa fa-angle-right' aria-hidden='true'> </i></button>"
  
      });
  });