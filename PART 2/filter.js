let songs = [
  { title: "Song A", duration: 210 },
  { title: "Song B", duration: 180 },
  { title: "Song C", duration: 240 },
  { title: "Song D", duration: 150 }
]

console.log(songs.filter(song => song.duration > 200) + "\n");


const ages = [32, 15, 19, 12, 25, 30, 18, 17];

function isAdult(age) {
  if (age >= 18) {
    return age;
  }
}

console.log(ages.filter(isAdult), "\n");

const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present', 'construction'];

const longWords = words.filter(word => word.length > 6);

console.log(longWords);
