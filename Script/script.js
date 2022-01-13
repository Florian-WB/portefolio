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
        } /*else {
            if (e.dataset.timer) clearTimeout(e.dataset.timer);
            e.classList.remove(e.dataset.class);
        }*/
    })
}
window.addEventListener("scroll", addClass, { passive: true });
addClass();

//Changer l'image quand plus un téléphone
function imageChange() {
    /*var img1 = document.querySelector("img[alt='img de fond'");
    var styleImg = getComputedStyle(img1);
    var transformStyle = styleImg.transformTranslate;
    var widthStyle = styleImg.width;
    console.log(transformStyle);
    console.log(widthStyle);*/

    if (window.innerWidth > "644") {
        var e = document.querySelector("img[alt='img de fond'");
        e.setAttribute("src", "Photos/ordi fond ecran.jpg");
        /*e.style.transform = "translate(-23%, -18%)";
        e.style.width = "175%";*/
    }
    else {
        var f = document.querySelector("img[alt='img de fond'");
        f.setAttribute("src", "Photos/mobile-fond-ecran.jpg");
        /*f.style.transform = transformStyle;
        f.style.width = widthStyle;*/
    }
}
window.addEventListener("resize", imageChange);
imageChange();

