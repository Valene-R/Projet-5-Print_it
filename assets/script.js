// Contenu des diapositives (images et textes)
const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

// Sélection des éléments du DOM
const carouselDots = document.querySelectorAll(".dot");
const bannerImg = document.querySelector(".banner-img");
const nextArrow = document.querySelector(".arrow_right");
const prevArrow = document.querySelector(".arrow_left");

const changeText = document.querySelector("#change");

// Index de la slide en cours
let currentIndex = 0;

//définition des valeurs par défaut du carrousel
carouselDots[currentIndex].classList.add("dot_selected");
bannerImg.src = "./assets/images/slideshow/" + slides[currentIndex].image;

/**
 * Fonction pour afficher la slide suivante lors du clic sur la flèche droite (arrow_right)
 */
nextArrow.addEventListener("click", () => {
	//suppression de la class"dot_selected" du point que je quitte
	carouselDots[currentIndex].classList.remove("dot_selected");

	//changement de l'image et du texte en fonction de ma position dans le tableau
	if(currentIndex >= slides.length - 1){
		currentIndex = 0;	
	} else {
		//currentIndex = currentIndex + 1;
		currentIndex++;
	}
	
	bannerImg.src = "./assets/images/slideshow/" + slides[currentIndex].image;
	changeText.innerHTML = slides[currentIndex].tagLine;
	
	//ajout de la classe "dot_selected" au point que je rejoins
	carouselDots[currentIndex].classList.add("dot_selected");
});
	
/**
 * Fonction pour afficher la slide précédente lors du clic sur la flèche gauche (arrow_left)
 */
prevArrow.addEventListener("click",()=>{
	//suppression de la class"dot_selected" du point que je quitte
	carouselDots[currentIndex].classList.remove("dot_selected");

	//changement de l'image et du texte en fonction de ma position dans le tableau
	if(currentIndex <= 0){
		currentIndex = slides.length - 1;	
	} else {
		//currentIndex = currentIndex - 1;
		currentIndex--;
	}

	bannerImg.src = "./assets/images/slideshow/" + slides[currentIndex].image;
	changeText.innerHTML = slides[currentIndex].tagLine;
	
	//ajout de la classe "dot_selected" au point que je rejoins
	carouselDots[currentIndex].classList.add("dot_selected");
});


/**
 * Gestion du clic sur le point sélectionné (proposition)
 */
carouselDots.forEach((dot, i) => {
	dot.addEventListener("click", () => {

	//suppression de la class"dot_selected" du point que je quitte
	carouselDots[currentIndex].classList.remove("dot_selected");

	//index en cours non déterminé pour sélectionner celui voulu
	currentIndex = i;

	//ajout de la class "dot_selected" au point sélectionné
	carouselDots[currentIndex].classList.add("dot_selected");

	//mise à jour de l'image et du texte
	bannerImg.src = "./assets/images/slideshow/" + slides[currentIndex].image;
	changeText.innerHTML = slides[currentIndex].tagLine;
	});
});
