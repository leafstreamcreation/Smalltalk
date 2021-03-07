class RandomSubjectGenerator {
  constructor(...subjects) {
    this.subjects = subjects;
  }

  randomSubject() {
    if (this.subjects.length === 0) throw new Error("NoSubjectsError");
    return this.subjects[Math.floor(Math.random() * this.subjects.length)];
  }
}
