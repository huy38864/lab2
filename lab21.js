const eventsArray = [
  [5, "Goal"],
  [17, "Substitution"],
  [32, "Yellow Card"],
  [45, "Half-Time"],
  [60, "Substitution"],
  [75, "Goal"],
  [85, "Red Card"],
  [90, "Full-Time"],
];

const indexToRemove = eventsArray.findIndex((event) => event[0] === 64);
eventsArray.splice(indexToRemove, 1);

const totalMinutes = 90;
const totalEvents = eventsArray.length;
const averageEventsPerMinute = totalEvents / totalMinutes;

console.log(
  `1 event occurred, on average every ${Math.round(
    1 / averageEventsPerMinute
  )} minutes`
);

eventsArray.forEach((event) => {
  const [minute, action] = event;
  const half = minute <= 45 ? "FIRST HALF" : "SECOND HALF";
  console.log(`[${half}] ${minute}: ⚽ ${action}`);
});
