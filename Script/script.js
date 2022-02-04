// Chiffre de position X aléatoire
var x = document.querySelectorAll(".conteneurApp");
for (i = 0; i < x.length; i++) {
    min = Math.floor("3");
    max = Math.floor("5");
    position = Math.floor(Math.random() * (max - min)) + min;
    x[i].style.setProperty(("--temps"), position + "s");
}

// Faire apparaitre 
function addClass() {
    document.querySelectorAll("[data-class]").forEach(e => {
        if (e.getBoundingClientRect().y < window.innerHeight - (e.dataset.offset || 0)) {
            if (!e.classList.contains(e.dataset.class) && (e.dataset.timer || "") == "") {
                e.dataset.timer = setTimeout(() => {
                    e.classList.add(e.dataset.class);
                    clearTimeout(e.dataset.timer);
                    e.dataset.timer = "";
                }, e.dataset.delay || 0)
            }
        } else {
            if (e.dataset.timer) clearTimeout(e.dataset.timer);
            e.classList.remove(e.dataset.class);
        }
    })
}
window.addEventListener("scroll", addClass, { passive: true });
addClass();



//Changer l'image quand plus un téléphone
/*function imageChange() {

    if (window.innerWidth > "644") {
        var e = document.querySelector("img[alt='img de fond'");
        e.setAttribute("src", "Photos/ordi fond ecran.jpg");
    }
    else {
        var f = document.querySelector("img[alt='img de fond'");
        f.setAttribute("src", "Photos/mobile-fond-ecran.jpg");
    }
}
window.addEventListener("resize", imageChange);
imageChange();*/



//Ouvrir un lien au click de l'image
document.querySelectorAll(".conteneurApp>img").forEach(e => {
    e.addEventListener("click", () => {
        console.log(e);
        var lien = e.nextElementSibling.getAttribute("href");
        window.open(lien, "_parent");
    })
})


//Changer % taille d'image fond d'écran

// document.querySelector("body").addEventListener("click", () => {

// function Taillewidth() {
//     var largeur = self.innerWidth;
//     console.log("largeur ecran : "+largeur);
//     var deltaWidth = self.innerWidth - "614";
//     var tailleWidth = "165" - deltaWidth/10;
//     if (tailleWidth <= 100){
//         tailleWidth = 100;
//     }
//     console.log("delta : "+deltaWidth);
//     console.log("--tailleW : "+tailleWidth);
//     document.querySelector("img[alt='img de fond ordi']").style.setProperty(("--tailleW"), tailleWidth + "%");
// }
// window.addEventListener("load", Taillewidth, { passive: true });
// Taillewidth();

// });

function SetPropert() {

    if (self.innerWidth < 770) {
        var WidthImg = 0;
        var TranslateImg = 0;
        var TranslatePtitImg = 0;

    }
    if (self.innerWidth >= 770) {
        var WidthImg = 30;
        var TranslateImg = 10;
        var TranslatePtitImg = 10;
    }
    if (self.innerWidth >= 942) {
        var WidthImg = 50;
        var WidthPtitImg = 2;
        var TranslateImg = 10;
        var TranslatePtitImg = 5;
    }
    if (self.innerWidth >= 1080) {
        var WidthImg = 65;
        var TranslateImg = 22;
        var TranslatePtitImg = 14;
    }
    if (self.innerWidth >= 1266) {
        var WidthImg = 65;
        var TranslateImg = 22;
        var TranslatePtitImg = 14;
    }

    document.querySelector("img[alt='img de fond ordi']").style.setProperty(("--WidthImg"), WidthImg + "%");
    document.querySelector("img[alt='img de fond ordi']").style.setProperty(("--TranslateImg"), TranslateImg + "%");
    document.querySelectorAll(".conteneurApp").forEach((e) => {e.style.setProperty(("--TranslatePtitImg"), TranslatePtitImg + "%");});
    document.querySelectorAll(".conteneurApp").forEach((e) => {
        e.querySelector("img").style.setProperty(("--WidthPtitImg"), WidthPtitImg + "%");
    });
    console.log(WidthImg);
    console.log(TranslateImg);
}
window.addEventListener("load", SetPropert)