window.addEventListener("load", () => {
  const topicField = document.getElementById("topic-text");
  const newTopicButton = document.getElementById("new-topic-button");

  newTopicButton.addEventListener("click", () => {
    topicField.innerHTML = "I am a topic!!";
  });
});
