
var topics = ["HTML", "CSS", "GIT", "JavaScript"];
var randomTopic = topics[Math.floor(Math.random() * topics.length)];

function listTopics() {
    for (i = 0; i < topics.length; i++) {
        console.log(topics[i]);
    }
}

// var topic = "HTML";

function selectTopic() {
    if (randomTopic === "HTML") {
        console.log("Let's learn HTML!");
    } else if (randomTopic === "CSS") {
        console.log("Let's learn CSS!");
    } else if (randomTopic === "GIT") {
        console.log("Let's learn GIT!");
    } else if (randomTopic === "JavaScript") {
        console.log("Let's learn JS!");
    } else {
        console.log("Please try again!");
    }
}

console.log("Here are the topics we learned through the prework:");
listTopics();
console.log("Which topic should we study first?");
selectTopic();

