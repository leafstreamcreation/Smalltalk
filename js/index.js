window.addEventListener("load", () => {
  const topicField = document.getElementById("topic-text");
  const newTopicButton = document.getElementById("new-topic-button");

  const topicGenerator = new RandomSubjectGenerator(...DATA);

  newTopicButton.addEventListener("click", () => {
    topicField.innerHTML = topicGenerator.randomSubject();
  });
});
