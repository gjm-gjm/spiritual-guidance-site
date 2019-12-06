const loveAnswer = [
  `It is certain.`,
  `Without a doubt.`,
  `Reply hazy, try again.`,
  `Concentrate and ask again.`,
  `Better not tell you now.`
];

const healthAnswer = [
  `As I see it, yes.`,
  `Yes.`,
  `Signs point to yes`,
  `Most likely.`
];

const moneyAnswer = [
  `Don't count on it.`,
  `My sources say no.`,
  `Very doubtful.`
];

const randomAnswer = function(array) {
  const length = array.length;
  const random = Math.floor(Math.random() * length);
  return array[random];
};

const showAnswer = function(array) {
  const response = `<p>${randomAnswer(array)}</p>`;

  $(".answer")
    .html(response)
    .addClass("oval");
};

const buttonClick = function() {
  $("button").on("click", function(event) {
    event.preventDefault();
    showAnswer(loveAnswer);
    $("input").val("");
  });
};

buttonClick();
