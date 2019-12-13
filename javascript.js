$(function() {
  const loveAnswer = [
    `It is certain.`,
    `Without a doubt.`,
    `Yes - definitely.`,
    `Try again.`,
    `Move on?`,
    `there's an app for that.`
  ];

  const healthAnswer = [
    `You may rely on it.`,
    `As I see it, yes.`,
    `More Water.`,
    `Ask again later.`,
    `Better not tell you now.`,
    `Ask a doctor.`,
    `My sources say no.`
  ];

  const moneyAnswer = [
    `Outlook good.`,
    `Yes.`,
    `Spend it.`,
    `Cannot predict now.`,
    `Invest.`,
    `Outlook not so good`,
    `Save your money`
  ];

  const randomAnswer = function(array) {
    const length = array.length;
    const random = Math.floor(Math.random() * length);
    return array[random];
  };

  const buttonClick = function() {
    $("form").on("submit", function(event) {
      event.preventDefault();
      const userChoice = $("input[type='radio']:checked").val();

      if (userChoice === "love") {
        const answer = randomAnswer(loveAnswer);
        console.log(answer);
        swal({
          // title: "HELLO world!",
          text: `${answer}`,
          button: "ASK AGAIN"
        });
      } else if (userChoice === "health") {
        const answer = randomAnswer(healthAnswer);
        swal({
          // title: "HELLO world!",
          text: `${answer}`,
          button: "ASK AGAIN"
        });
      } else {
        const answer = randomAnswer(moneyAnswer);
        swal({
          // title: "HELLO world!",
          text: `${answer}`,
          button: "ASK AGAIN"
        });
      }

      $("input[type='text']").val("");
      $("input[type='radio']").prop("checked", false);
    });
  };

  buttonClick();

  $("button[type='reset']").on("click", function() {
    $(".answer").hide();
  });
});
