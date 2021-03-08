const SUBJECTS = {
  COOKING: "Cooking",
  SPORTS: "Sports",
  VIDEO_GAMES: "Video Games",
  GAME_DESIGN: "Game Design",
  TV_SHOWS: "TV Shows",
  MOVIES: "Movies",
  MUSIC: "Music",
  POLITICS: "Politics",
  RELIGION: "Religion",
  SOCIAL_JUSTICE: "Social Justice",
  ETHICS: "Ethics",
  MATH: "Math",
  SOFTWARE: "Software",
  SCIENCE: "Science",
  DEAFNESS: "Deafness",
  LANGUAGE: "Language",
  VACATIONS: "Vacations",
  SEXUALITY: "Sexuality",
  PLACES_LIVED: "Places Lived",
  EXERCISE: "Exercise",
};

const DATA = [
  new Icebreaker(
    "Do you know how to cook? => favorite dish? (crepe, pancake, cakes, bowls, tempeh blt)",
    SUBJECTS.COOKING
  ),
  new Icebreaker(
    "Do you like sports? => favorite sport? (ski, bike, golf)",
    SUBJECTS.SPORTS
  ),
  new Icebreaker(
    "Do you play video games? => favorite game (unusual games / halo, starcraft)?",
    SUBJECTS.VIDEO_GAMES
  ),
  new Icebreaker(
    "Do you play video games? => most unusual game you played (slay the spire, transistor, subnautica, sunless sea, stanley parable, talos principle)?",
    SUBJECTS.GAME_DESIGN
  ),
  new Icebreaker("Do you know any other languages?", SUBJECTS.LANGUAGE),
  new Icebreaker("Do you know any other HoH people?", SUBJECTS.DEAFNESS),
  new Icebreaker("Do you exercise? => favorite exercises?", SUBJECTS.EXERCISE),
  new Icebreaker(
    "What is your favorite sport for exercise?",
    SUBJECTS.EXERCISE
  ),
];
