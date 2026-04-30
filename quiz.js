document.addEventListener("DOMContentLoaded", function(){

const submitBtn = document.getElementById("submitQuiz")

if(submitBtn){

submitBtn.addEventListener("click", function(){

let career = "ux"

localStorage.setItem("careerResult", career)

window.location.href = "result.html"

})

}

const careerTitle = document.getElementById("careerTitle")

if(careerTitle){

let result = localStorage.getItem("careerResult")

const careers = {

ux:{
title:"UX Designer",
image:"assets/img/ux-design.jpg",
description:"UX designers focus on creating meaningful experiences for users.",
day:"A typical day includes user research, wireframing, testing designs, and collaborating with developers."
},

graphic:{
title:"Graphic Designer",
image:"assets/img/graphic-design.jpg",
description:"Graphic designers create visual communication through typography, branding, and layouts.",
day:"A typical day includes designing brand materials, social graphics, and marketing visuals."
},

motion:{
title:"Motion Designer",
image:"assets/img/motion-design.jpg",
description:"Motion designers bring graphics to life using animation and video.",
day:"A typical day includes storyboarding, animating graphics, and editing visual sequences."
},

illustration:{
title:"Illustrator",
image:"assets/img/illustration.jpg",
description:"Illustrators create drawings and artwork used in media, books, and branding.",
day:"A typical day includes sketching concepts, refining artwork, and delivering final illustrations."
}

}

let data = careers[result]

careerTitle.innerText = data.title
document.getElementById("careerImage").src = data.image
document.getElementById("careerDescription").innerText = data.description
document.getElementById("careerDay").innerText = data.day

}

})
