const text1 = document.getElementById('visible-text-1');
const jsText1 = document.getElementById('js-text-1');
const arrow1 = document.getElementById('arrow-1');

const text2 = document.getElementById('visible-text-2');
const jsText2 = document.getElementById('js-text-2');
const arrow2 = document.getElementById('arrow-2');

const text3 = document.getElementById('visible-text-3');
const jsText3 = document.getElementById('js-text-3');
const arrow3 = document.getElementById('arrow-3');

const text4 = document.getElementById('visible-text-4');
const jsText4 = document.getElementById('js-text-4');
const arrow4 = document.getElementById('arrow-4');

const text5 = document.getElementById('visible-text-5');
const jsText5 = document.getElementById('js-text-5');
const arrow5 = document.getElementById('arrow-5');


text1.addEventListener('click', () =>{ 
    if (jsText1.style.display === 'none'){
        text1.querySelector("p").style.fontWeight = "900";
        jsText1.style.display = "block";
        arrow1.style.transform = "rotate(135deg)";
    } else {
        text1.querySelector("p").style.fontWeight = "400";
        jsText1.style.display = "none";
        arrow1.style.transform = "rotate(-45deg)";
    }
})

text2.addEventListener('click', () =>{ 
    if (jsText2.style.display === 'none'){
        text2.querySelector("p").style.fontWeight = "900";
        jsText2.style.display = "block";
        arrow2.style.transform = "rotate(135deg)";
    } else {
        text2.querySelector("p").style.fontWeight = "400";
        jsText2.style.display = "none";
        arrow2.style.transform = "rotate(-45deg)";
    }
})

text3.addEventListener('click', () =>{ 
    if (jsText3.style.display === 'none'){
        text3.querySelector("p").style.fontWeight = "900";
        jsText3.style.display = "block";
        arrow3.style.transform = "rotate(135deg)";
    } else {
        text3.querySelector("p").style.fontWeight = "400";
        jsText3.style.display = "none";
        arrow3.style.transform = "rotate(-45deg)";
    }
})

text4.addEventListener('click', () =>{ 
    if (jsText4.style.display === 'none'){
        text4.querySelector("p").style.fontWeight = "900";
        jsText4.style.display = "block";
        arrow4.style.transform = "rotate(135deg)";
    } else {
        text4.querySelector("p").style.fontWeight = "400";
        jsText4.style.display = "none";
        arrow4.style.transform = "rotate(-45deg)";
    }
})

text5.addEventListener('click', () =>{ 
    if (jsText5.style.display === 'none'){
        text5.querySelector("p").style.fontWeight = "900";
        jsText5.style.display = "block";
        arrow5.style.transform = "rotate(135deg)";
    } else {
        text5.querySelector("p").style.fontWeight = "400";
        jsText5.style.display = "none";
        arrow5.style.transform = "rotate(-45deg)";
    }
})

