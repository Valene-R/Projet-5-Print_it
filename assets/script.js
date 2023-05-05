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




//etape 4
const carouselDots = document.querySelectorAll(".dot");
const bannerImg = document.querySelector(".banner-img");
const nextArrow = document.querySelector(".arrow_right");
const prevArrow = document.querySelector(".arrow_left");

let currentIndex = 0;

//set initial active slide and dot
carouselDots[currentIndex].classList.add("dot_selected");
bannerImg.src = "./assets/images/slideshow/" + slides[currentIndex].image;

//next image
nextArrow.addEventListener("click",()=>{
	//suppression de la class"dot_selected" du point que je quitte
	carouselDots[currentIndex].classList.remove("dot_selected");
	//changement d'image en fonction de ma position dans le tableau
	if(currentIndex === slides.length - 1){
		currentIndex = 0;
		bannerImg.src = "./assets/images/slideshow/"+slides[currentIndex].image;
	} else{
		currentIndex = currentIndex + 1;
		bannerImg.src = "./assets/images/slideshow/"+slides[currentIndex].image;
	}
	//ajout de la classe "dot_selected" au point que je rejoins
	carouselDots[currentIndex].classList.add("dot_selected");
	});
	

//previous image
prevArrow.addEventListener("click",()=>{
	//suppression de la class"dot_selected" du point que je quitte
	carouselDots[currentIndex].classList.remove("dot_selected");
	//changement d'image en fonction de ma position dans le tableau
	if(currentIndex === 0){
		currentIndex = slides.length - 1;
		bannerImg.src = "./assets/images/slideshow/"+slides[currentIndex].image;
	} else{
		currentIndex = currentIndex - 1;
		bannerImg.src = "./assets/images/slideshow/"+slides[currentIndex].image;
	}
	//ajout de la classe "dot_selected" au point que je rejoins
	carouselDots[currentIndex].classList.add("dot_selected");
	});




