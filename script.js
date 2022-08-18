const questions = [...document.querySelectorAll(".question")];
const answers = [...document.querySelectorAll(".answer")];
const arrows = [...document.querySelectorAll(".arrow")];

console.log(questions);

questions.forEach((question, index) => {
  question.addEventListener("click", () => {
    arrows[index].classList.toggle("clicked-arrow");
    // answers[index].classList.toggle("clicked");
    question.classList.toggle("clicked");
    // set one answer to display at a time
    questions
      .filter((element) => {
        return element != question;
      })
      .forEach((element) => {
        element.classList.remove("clicked");
        console.log(element);
      });
    arrows
      .filter((element) => {
        return element != arrows[index];
      })
      .forEach((element) => {
        element.classList.remove("clicked-arrow");
        console.log(element);
      });
  });
});
