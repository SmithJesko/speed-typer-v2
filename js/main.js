addEventListener('load', init)

// Global variables
let time = 5;
let score = 0;
let high = 0;
let isPlaying = false;
let wordCount = 0;

// DOM elements
const wordInput = document.querySelector('#input');
const currentWord = document.querySelector('#word');
const scoreDisplay = document.querySelector('#score');
const highDisplay = document.querySelector('#high');
const timeDisplay = document.querySelector('#seconds');
const currentCount = document.querySelector('#currentCount');
const totalCount = document.querySelector('#totalCount');

// Word list
const words = [
    "next",
    "short",
    "nice",
    "bottle",
    "full",
    "soda",
    "vast",
    "glue",
    "close",
    "hurry",
    "robin",
    "trace",
    "rock",
    "absent",
    "cover",
    "note",
    "burst",
    "relax",
    "group",
    "sad",
    "rob",
    "yell",
    "pop",
    "mix",
    "fix",
    "hot",
    "pin",
    "hill",
    "wiry",
    "dirt",
    "paddle",
    "answer",
    "awesome",
    "distance",
    "fertile",
    "wakeful",
    "belief",
    "slippery",
    "bizarre",
    "learned",
    "vivacious",
    "grandmother",
    "illegal",
    "thirsty",
    "wholesale",
    "tenuous",
    "skillful",
    "deteriorate",
    "poised",
    "humorous",
    "scrape",
    "replace",
    "languid",
    "adjoining",
    "interesting",
    "stranger",
    "polite",
    "scissors",
    "brainy",
    "interrogation",  
    "return;",
    "#include",
    "'helloworld'",
    "obj:1",
    "call()",
    "&lt;html&gt;",
    "not_easy",
    "more-dashes",
    "camelCase",
    "ASCII",
    "array[]",
    "printf('')",
    "&lt;/html&gt;",
    "^regex$",
    "System.out.println()",
]

function init() { 
    currentWord.innerHTML = words[wordCount];
    timeDisplay.innerHTML = time;
    scoreDisplay.innerHTML = score;
    highDisplay.innerHTML = high;
    currentCount.innerHTML = wordCount + 1;
    totalCount.innerHTML = words.length + 1;
    wordInput.addEventListener('input', startMatch, {once:true});
    wordInput.addEventListener('input', checkStatus)
    console.log("init");
}

function startMatch() {
    isPlaying = true;
    setInterval(countdown, 1000);
    console.log("start");
}

function countdown() {
    if(time > 0) {
        time--;
    } else if(time === 0) {
        isPlaying = false;
    }
    timeDisplay.innerHTML = time;
}

function checkStatus() {
    if(isPlaying) {
        if(wordInput.value === words[wordCount]) {
            console.log('yes');
            wordCount++;
            score++;
            time = 6;
            update();
        }
    } else if(time === 0) {
        startMatch();
    }
}

function update() {
    currentWord.innerHtml = words[wordCount];
    scoreDisplay.innerHTML = score;
    console.log(words[wordCount]);
    console.log('update');
}