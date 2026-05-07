// main.js

document.addEventListener('DOMContentLoaded', () => {

const questions = document.querySelectorAll('.question')
const answers = document.querySelectorAll('.answer')
const progressBar = document.getElementById('progressBar')

/* QUIZ SECTION */

if(questions.length > 0){

let currentQuestion = 0

let scores = {

ux:0,
brand:0,
motion:0,
illustration:0,
graphic:0,
web:0,
product:0,
creative:0,
game:0

}

answers.forEach(answer => {

answer.addEventListener('click', () => {

const career = answer.dataset.career

scores[career]++

questions[currentQuestion].classList.remove('active')

currentQuestion++

let progress =
(currentQuestion / questions.length) * 100

if(progressBar){
progressBar.style.width = `${progress}%`
}

if(currentQuestion < questions.length){

questions[currentQuestion].classList.add('active')

}

else{

showResult()

}

})

})

function showResult(){

let highestCareer =
Object.keys(scores).reduce((a,b) =>
scores[a] > scores[b] ? a : b
)

localStorage.setItem('careerResult', highestCareer)

window.location.href = 'result.html'

}

}

/* RESULT PAGE SECTION */

const careerTitle =
document.getElementById('careerTitle')

if(careerTitle){

const result =
localStorage.getItem('careerResult')

const careers = {

ux:{
name:'UX/UI Designer',
image:'assets/img/ux.jpg',
description:'UX/UI Designers focus on creating user-friendly digital experiences that are visually engaging and functional.',
day:'A typical day includes wireframing, user testing, prototyping, and collaborating with developers.',
software:'Figma, Adobe XD, Sketch'
},

brand:{
name:'Brand Designer',
image:'assets/img/brand.jpg',
description:'Brand Designers create visual identities that help companies communicate personality and values.',
day:'A typical day includes designing logos, typography systems, color palettes, and brand campaigns.',
software:'Illustrator, Photoshop, InDesign'
},

motion:{
name:'Motion Designer',
image:'assets/img/motion.jpg',
description:'Motion Designers bring visuals to life through animation and dynamic storytelling.',
day:'A typical day includes animating graphics, editing videos, and creating transitions.',
software:'After Effects, Premiere Pro, Cinema 4D'
},

illustration:{
name:'Illustrator',
image:'assets/img/illustration.jpg',
description:'Illustrators create original artwork for books, media, branding, and entertainment.',
day:'A typical day includes sketching concepts, refining artwork, and digital painting.',
software:'Procreate, Photoshop, Illustrator'
},

graphic:{
name:'Graphic Designer',
image:'assets/img/graphic.jpg',
description:'Graphic Designers create visual communication through layouts, branding, and marketing materials.',
day:'A typical day includes designing posters, social media graphics, and advertisements.',
software:'Illustrator, Photoshop, InDesign'
},

web:{
name:'Web Designer',
image:'assets/img/web.jpg',
description:'Web Designers combine visual design and coding to create engaging websites.',
day:'A typical day includes coding layouts, designing interfaces, and testing responsiveness.',
software:'HTML, CSS, JavaScript, Figma'
},

product:{
name:'Product Designer',
image:'assets/img/product.jpg',
description:'Product Designers solve user problems while balancing business goals and visual design.',
day:'A typical day includes brainstorming solutions, building prototypes, and conducting research.',
software:'Figma, FigJam, Adobe XD'
},

creative:{
name:'Creative Director',
image:'assets/img/creative.jpg',
description:'Creative Directors guide the vision of creative projects and oversee teams of designers.',
day:'A typical day includes directing campaigns, reviewing concepts, and leading creative strategy.',
software:'Adobe Creative Suite, Figma'
},

game:{
name:'Game Artist',
image:'assets/img/game.jpg',
description:'Game Artists create environments, characters, and assets used in video games.',
day:'A typical day includes concept art, 3D modeling, and world-building.',
software:'Blender, Maya, Photoshop'
}

}

const selectedCareer = careers[result]

if(selectedCareer){

careerTitle.innerText = selectedCareer.name

document.getElementById('careerImage').src =
selectedCareer.image

document.getElementById('careerDescription').innerText =
selectedCareer.description

document.getElementById('careerDay').innerText =
selectedCareer.day

document.getElementById('careerSoftware').innerText =
selectedCareer.software

}

}

})
