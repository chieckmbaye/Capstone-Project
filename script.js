let kaedin_buttons = document.getElementsByClassName("kaedin_fun_fact");
let chieck_buttons = document.getElementsByClassName("chieck_fun_fact");
let bidan_buttons = document.getElementsByClassName("bidan_fun_fact");
let adam_buttons = document.getElementsByClassName("adam_fun_fact");
let omar_buttons = document.getElementsByClassName("omar_fun_fact")

for (let i = 0; i < kaedin_buttons.length; i++) {
    kaedin_buttons[i].onclick = function () {
        let kaedinImageRef = document.querySelector(".kaedin-image");
        let chieckImageRef = document.querySelector(".chieck-image");
        let bidanImageRef = document.querySelector(".bidan-image");
        let adamImageRef = document.querySelector(".adam-image");
        let omarImageRef = document.querySelector(".omar-image");

        chieckImageRef.style.display = "none";    
        bidanImageRef.style.display = "none"; 
        kaedinImageRef.style.display = "block";  
        adamImageRef.style.display = "none";  
        omarImageRef.style.display = "none"; 
    }       
}

for (let i = 0; i < chieck_buttons.length; i++) {
    chieck_buttons[i].onclick = function () {
        let kaedinImageRef = document.querySelector(".kaedin-image");
        let chieckImageRef = document.querySelector(".chieck-image");
        let bidanImageRef = document.querySelector(".bidan-image");
        let adamImageRef = document.querySelector(".adam-image");
        let omarImageRef = document.querySelector(".omar-image");

        chieckImageRef.style.display = "block";   
        kaedinImageRef.style.display = "none";   
        bidanImageRef.style.display = "none"; 
        adamImageRef.style.display = "none"; 
        omarImageRef.style.display = "none"; 
    }
}


for (let i = 0; i < bidan_buttons.length; i++) {
    bidan_buttons[i].onclick = function () {
        let kaedinImageRef = document.querySelector(".kaedin-image");
        let chieckImageRef = document.querySelector(".chieck-image");
        let bidanImageRef = document.querySelector(".bidan-image");
        let adamImageRef = document.querySelector(".adam-image");
        let omarImageRef = document.querySelector(".omar-image");

        chieckImageRef.style.display = "none";   
        kaedinImageRef.style.display = "none"; 
        bidanImageRef.style.display = "block";  
        adamImageRef.style.display = "none";   
        omarImageRef.style.display = "none";
    }
}

for (let i = 0; i < adam_buttons.length; i++) {
    adam_buttons[i].onclick = function () {
        let kaedinImageRef = document.querySelector(".kaedin-image");
        let chieckImageRef = document.querySelector(".chieck-image");
        let bidanImageRef = document.querySelector(".bidan-image");
        let adamImageRef = document.querySelector(".adam-image");
        let omarImageRef = document.querySelector(".omar-image");

        chieckImageRef.style.display = "none";   
        kaedinImageRef.style.display = "none"; 
        bidanImageRef.style.display = "none";   
        adamImageRef.style.display = "block";  
        omarImageRef.style.display = "none";
    }
}

for (let i = 0; i < omar_buttons.length; i++) {
    omar_buttons[i].onclick = function () {
        let kaedinImageRef = document.querySelector(".kaedin-image");
        let chieckImageRef = document.querySelector(".chieck-image");
        let bidanImageRef = document.querySelector(".bidan-image");
        let adamImageRef = document.querySelector(".adam-image");
        let omarImageRef = document.querySelector(".omar-image");

        chieckImageRef.style.display = "none";   
        kaedinImageRef.style.display = "none"; 
        bidanImageRef.style.display = "none";   
        adamImageRef.style.display = "none";  
        omarImageRef.style.display = "block";
    }
}