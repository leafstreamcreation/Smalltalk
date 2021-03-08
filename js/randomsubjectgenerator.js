class RandomSubjectGenerator {
  constructor(...icebreakers) {
    this.icebreakers = icebreakers;
    this.subjects = RandomSubjectGenerator.subjects(this.icebreakers);
  }

  randomSubject() {
    if (this.subjects.length === 0) throw new Error("NoSubjectsError");

    return this.subjects[Math.floor(Math.random() * this.subjects.length)];
  }

  randomIcebreaker(...subjects) {
    if (this.icebreakers.length === 0) throw new Error("NoIcebreakersError");
    const icebreakers = [];
    subjects.forEach((subject) => {
      icebreakers.push(
        ...this.icebreakers.filter(
          (icebreaker) =>
            !icebreakers.includes(icebreaker) &&
            icebreaker.subjects.includes(subject)
        )
      );
    });
    if (icebreakers.length === 0)
      throw new Error("NoIcebreakerForSubectsError");
    return icebreakers[Math.floor(Math.random() * icebreakers.length)].text;
  }

  static subjects(icebreakers) {
    const subjects = [];
    icebreakers.forEach((icebreaker) => {
      subjects.push(
        ...icebreaker.subjects.filter((subject) => !subjects.includes(subject))
      );
    });
    return subjects;
  }
}
