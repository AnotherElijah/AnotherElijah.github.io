import {addClass, removeClass, getCurrentBlock} from "./nav-effect.js";

const bgFillClass = 'fill-bg';
const topBlock = document.querySelector('#home');
export const navigation = document.querySelector('nav.navbar');

export function getScrollPosition(block = window) {
    return block.pageYOffset;
}

function manageClass() {
    if (topBlock.clientHeight-80 <= getScrollPosition(window) && !navigation.classList.contains(bgFillClass)) {
        navigation.classList.add(bgFillClass);
    } else if (topBlock.clientHeight > getScrollPosition(window) && navigation.classList.contains(bgFillClass)) {
        navigation.classList.remove(bgFillClass);
    }
}

manageClass();
getCurrentBlock();
let timeToRun = true;
document.querySelector('#my-nav').addEventListener('click', ()=>{
    if (timeToRun === true) {
        timeToRun = false;
        setTimeout(() => timeToRun = true, 50);
        manageClass();
        getCurrentBlock();
    }
});
document.addEventListener('scroll', () => {
    if (timeToRun === true) {
        timeToRun = false;
        setTimeout(() => timeToRun = true, 50);
        manageClass();
        getCurrentBlock();
    }
});



