window.addEventListener("load", () => {
  const subjectField = document.getElementById("subject-text");
  const icebreakerField = document.getElementById("icebreaker-text");
  const newSubjectButton = document.getElementById("new-subject-button");
  const newIcebreakerButton = document.getElementById("new-icebreaker-button");

  const topicGenerator = new RandomSubjectGenerator(...DATA);

  newSubject();

  newSubjectButton.addEventListener("click", () => {
    newSubject();
  });

  newIcebreakerButton.addEventListener("click", () => {
    icebreakerField.innerHTML = topicGenerator.randomIcebreaker(
      subjectField.innerHTML
    );
  });

  function newSubject() {
    const subject = topicGenerator.randomSubject();
    subjectField.innerHTML = subject;
    icebreakerField.innerHTML = topicGenerator.randomIcebreaker(subject);
  }
});
