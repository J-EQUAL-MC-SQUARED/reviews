const { LoremIpsum } = require('lorem-ipsum');
const {
  firstNames,
  adjectives,
  adverbs,
  bridge,
  nouns,
} = require('./words');

const makeLastInitials = () => {
  const array = [];
  for (let i = 65; i < 91; i += 1) {
    const str = `${String.fromCharCode(i)}.`;
    array.push(str);
  }
  return array;
};

const lastInitials = makeLastInitials();

const pickRandom = (array) => {
  const index = Math.floor(Math.random() * array.length);
  return array[index];
};
const randomName = () => {
  const first = pickRandom(firstNames);
  const last = pickRandom(lastInitials);
  return `${first} ${last}`;
};

const punctuation = () => {
  const punc = '  .  ?  !  ';
  const rand = Math.floor(Math.random() * punc.length);
  const repeatCount = Math.floor(Math.random() * 4) + 1;
  return punc[rand].repeat(repeatCount);
};

const randomTitle = () => {
  const words = [adjectives, adverbs, bridge, nouns];
  const rCount = Math.floor(Math.random() * 5) + 1;
  let str = '';
  for (let j = 0; j < rCount; j += 1) {
    const rIndex = Math.floor(Math.random() * words.length);
    str += `${pickRandom(words[rIndex])} `;
  }
  const punc = punctuation();
  return `${str.trim()}${punc}`.trim();
};

const randomRating = () => Math.floor(Math.random() * 5) + 1;

const randomHelpful = () => {
  const rand = Math.floor(Math.random() * 100);
  let num = 0;
  if (rand < 70) {
    num = 0;
  } else if (rand >= 70 && rand < 85) {
    num = 1;
  } else if (rand >= 85 && rand < 95) {
    num = 2;
  } else {
    num = 3;
  }
  return num;
};

const randomDate = () => {
  const month = Math.floor(Math.random() * 12) + 1;
  const day = Math.floor(Math.random() * 31) + 1;
  const year = Math.floor(Math.random() * 4) + 17;
  return new Date(`${month}/${day}/${year}`);
};

const randomVerification = () => {
  const boolean = Math.floor(Math.random() * 10) < 7;
  return boolean;
};

const lorem = new LoremIpsum({
  sentencesPerParagraph: {
    max: 5,
    min: 1,
  },
  wordsPerSentence: {
    max: 12,
    min: 5,
  },
});

const randomBody = () => {
  const rand = Math.floor(Math.random() * 6) + 1;
  return lorem.generateSentences(rand);
};

const randomImages = () => {
  const options = [0, 0, 0, 1, 1, 2, 2, 3];
  const randIndex = Math.floor(Math.random() * options.length);
  const images = [];
  for (let i = 0; i < options[randIndex]; i += 1) {
    const img = Math.floor(Math.random() * 30);
    const url = `https://fec-aws-images.s3.us-east-2.amazonaws.com/images/img${img}.jpg`;
    images.push(url);
  }
  return images;
};

module.exports = {
  randomName,
  randomTitle,
  randomRating,
  randomVerification,
  randomDate,
  randomBody,
  randomImages,
  randomHelpful,
};
