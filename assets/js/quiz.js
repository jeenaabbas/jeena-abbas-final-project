document.addEventListener("DOMContentLoaded", () => {

const questions =
document.querySelectorAll(".question")

const answers =
document.querySelectorAll(".answer")

const progressBar =
document.getElementById("progressBar")

/* QUIZ PAGE */

if(questions.length > 0){

let currentQuestion = 0

let scores = {

ux:0,
graphic:0,
motion:0,
illustration:0,
web:0

}

answers.forEach(answer => {

answer.addEventListener("click", () => {

const career =
answer.dataset.career

scores[career]++

questions[currentQuestion]
.classList.remove("active")

currentQuestion++

let progress =
(currentQuestion / questions.length) * 100

if(progressBar){
progressBar.style.width = `${progress}%`
}

if(currentQuestion < questions.length){

questions[currentQuestion]
.classList.add("active")

}

else{

showResult()

}

})

})

function showResult(){

let highestCareer =
Object.keys(scores).reduce((a,b)=>
scores[a] > scores[b] ? a : b
)

localStorage.setItem(
"careerResult",
highestCareer
)

window.location.href =
"result.html"

}

}

/* RESULT PAGE */

const careerTitle =
document.getElementById("careerTitle")

const careerDescription =
document.getElementById("careerDescription")

if(careerTitle){

const result =
localStorage.getItem("careerResult")

const careers = {

ux:{
title:"UX/UI Designer",
description:"You enjoy problem solving, user experiences, and designing apps that are easy to use."
},

graphic:{
title:"Graphic Designer",
description:"You enjoy visual communication, branding, typography, and creative aesthetics."
},

motion:{
title:"Motion Designer",
description:"You enjoy animation, movement, storytelling, and bringing graphics to life."
},

illustration:{
title:"Illustrator",
description:"You enjoy creating artwork, characters, sketches, and imaginative visuals."
},

web:{
title:"Web Designer",
description:"You enjoy combining creativity and coding to build interactive websites."
}

}

careerTitle.innerText =
careers[result].title

careerDescription.innerText =
careers[result].description

}

})
