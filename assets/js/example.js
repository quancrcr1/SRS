$(document).ready(function(){
    $('.card-container').slick({
        infinite:false,
        prevArrow:"<button type='button' class='prevBtn button-16  slick-prev pull-left'><i class='fa fa-angle-left' aria-hidden='true'></i> Trở lại</button>",
            nextArrow:"<button type='button' class='nextBtn button-16  slick-next pull-right'>Tiếp theo <i class='fa fa-angle-right' aria-hidden='true'> </i></button>"
      });
  });
const c1 = document.querySelector("correct-answer1");
const c2 = document.querySelector("correct-answer2");
const c3 = document.querySelector("correct-answer3");
const c4 = document.querySelector("correct-answer4");
// const correct = document.querySelctor("correct-answer");
// c1.addEventListener("click",isCorrect);

// c2.addEventListener('click',isCorrect);
// c3.addEventListener('click',isCorrect);
// c4.addEventListener('click',isCorrect);
document.getElementById('correct-answer1').onclick = function(event) {
    isCorrect();
};
document.getElementById('correct-answer2').onclick = function(event) {
    isCorrect();
};
document.getElementById('correct-answer3').onclick = function(event) {
    isCorrect();
};
document.getElementById('correct-answer4').onclick = function(event) {
    isCorrect();
};
const isCorrect = () =>{
    confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
    });
}