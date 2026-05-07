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

description:
"You enjoy problem solving, user experiences, and designing apps that are easy to use.",

focus:
"UX/UI Designers focus on improving how users interact with websites, apps, and digital products. Their goal is to make products intuitive, accessible, and visually appealing.",

tools:
"Figma, Adobe XD, Sketch, FigJam, Photoshop",

skills:
"User research, wireframing, prototyping, communication, interaction design, problem solving",

day:
"A typical day may include researching users, designing wireframes, creating prototypes, meeting with developers, and testing app usability."
},

graphic:{
title:"Graphic Designer",

description:
"You enjoy visual communication, branding, typography, and creative aesthetics.",

focus:
"Graphic Designers create visual content for branding, advertising, packaging, social media, and marketing campaigns.",

tools:
"Illustrator, Photoshop, InDesign, Canva",

skills:
"Typography, branding, layout design, color theory, creativity, visual communication",

day:
"A typical day may include designing logos, creating posters or social media graphics, editing layouts, and working with clients."
},

motion:{
title:"Motion Designer",

description:
"You enjoy animation, movement, storytelling, and bringing graphics to life.",

focus:
"Motion Designers create animated visuals for videos, advertisements, title sequences, websites, and social media.",

tools:
"After Effects, Premiere Pro, Cinema 4D, Blender",

skills:
"Animation, storytelling, timing, video editing, creativity, motion graphics",

day:
"A typical day may include storyboarding, animating graphics, editing video clips, and creating transitions or visual effects."
},

illustration:{
title:"Illustrator",

description:
"You enjoy creating artwork, characters, sketches, and imaginative visuals.",

focus:
"Illustrators create original artwork for books, entertainment, branding, games, and digital media.",

tools:
"Procreate, Photoshop, Illustrator, Clip Studio Paint",

skills:
"Drawing, creativity, character design, digital painting, composition",

day:
"A typical day may include sketching ideas, refining artwork, creating character concepts, and completing commissioned illustrations."
},

web:{
title:"Web Designer",

description:
"You enjoy combining creativity and coding to build interactive websites.",

focus:
"Web Designers create visually appealing and functional websites while balancing layout, branding, and user experience.",

tools:
"HTML, CSS, JavaScript, VS Code, Figma",

skills:
"Responsive design, coding, layout design, creativity, problem solving",

day:
"A typical day may include coding website pages, designing layouts, testing responsiveness, and updating site content."
}

}

/* SET TEXT */

careerTitle.innerText =
careers[result].title

careerDescription.innerText =
careers[result].description

document.getElementById("careerFocus").innerText =
careers[result].focus

document.getElementById("careerTools").innerText =
careers[result].tools

document.getElementById("careerSkills").innerText =
careers[result].skills

document.getElementById("careerDay").innerText =
careers[result].day

}

})
