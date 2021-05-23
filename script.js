let button1 = document.querySelector("#cakes-button")
let currentConfectionName = document.querySelector(".current_confection_name")
let currentConfectionWeight = document.querySelector(".current_confection_weight")
let currentConfectionCost = document.querySelector(".current_confection_cost")
let currentConfectionImg = document.querySelector(".current_confection_img")
let currentConfection1Name = document.querySelector(".current_confection1_name")
let currentConfection1Weight = document.querySelector(".current_confection1_weight")
let currentConfection1Cost = document.querySelector(".current_confection1_cost")
let currentConfection1Img = document.querySelector(".current_confection1_img")
let currentConfection2Name = document.querySelector(".current_confection2_name")
let currentConfection2Weight = document.querySelector(".current_confection2_weight")
let currentConfection2Cost = document.querySelector(".current_confection2_cost")
let currentConfection2Img = document.querySelector(".current_confection2_img")
let napoleon = {
	name: "Наполеон",
	weight: "250 гр",
	cost: "500 руб",
	img: "./assests/tort-napoleon.jpg"
}

let medovik = {
	name: "Медовик",
	weight: "300 гр",
	cost: "500 руб",
	img: "./assests/medovik.webp"
}

let choco = {
	name: "Шоколадный",
	weight: "500 гр",
	cost: "750 руб",
	img: "./assests/choco.webp"
}

function changeColor1() {
	currentConfection1Img.src = medovik.img
	currentConfection1Name.innerHTML = medovik.name
	currentConfection1Weight.innerHTML = medovik.weight
	currentConfection1Cost.innerHTML = medovik.cost
	currentConfectionImg.src = napoleon.img
	currentConfectionName.innerHTML = napoleon.name
	currentConfectionWeight.innerHTML = napoleon.weight
	currentConfectionCost.innerHTML = napoleon.cost
	currentConfection2Img.src = choco.img
	currentConfection2Name.innerHTML = choco.name
	currentConfection2Weight.innerHTML = choco.weight
	currentConfection2Cost.innerHTML = choco.cost
}


button1.addEventListener("click", changeColor1)
