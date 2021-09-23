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

const switchOn = (text, jsText, arrow) => {
    if (jsText.style.display === 'none'){
        text.querySelector("p").style.fontWeight = "900";
        jsText.style.display = "block";
        arrow.style.transform = "rotate(135deg)";
    } else {
        text.querySelector("p").style.fontWeight = "400";
        jsText.style.display = "none";
        arrow.style.transform = "rotate(-45deg)";
    }
}

text1.addEventListener('click', ()=>{switchOn(text1, jsText1, arrow1)});
text2.addEventListener('click', ()=>{switchOn(text2, jsText2, arrow2)});
text3.addEventListener('click', ()=>{switchOn(text3, jsText3, arrow3)});
text4.addEventListener('click', ()=>{switchOn(text4, jsText4, arrow4)});
text5.addEventListener('click', ()=>{switchOn(text5, jsText5, arrow5)});
