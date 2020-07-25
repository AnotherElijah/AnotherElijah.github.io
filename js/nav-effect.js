import {getScrollPosition} from "./scroll.js";

const SECTIONS = {
    TOP_BLOCK: 'topBlock',
    WORKS: 'works',
    ABOUT: 'about',
}

const blockToLink = new Map();
blockToLink.set(SECTIONS.TOP_BLOCK, document.querySelector('#homeLink'));
blockToLink.set(SECTIONS.WORKS, document.querySelector('#worksLink'));
blockToLink.set(SECTIONS.ABOUT, document.querySelector('#aboutLink'));

const topBlock = document.querySelector('#home');
const works = document.querySelector('#works');
const about = document.querySelector('#about-us');

const topBlockH = topBlock.clientHeight;
const worksH = works.clientHeight;
const aboutH = about.clientHeight;

const topBlockPosition = topBlock.offsetTop;
const worksPosition = works.offsetTop;
const aboutPosition = about.offsetTop;

const accurance = 200;

export function getCurrentBlock() {
    switch (true) {
        case getScrollPosition() >= topBlockPosition && getScrollPosition() < topBlockPosition + topBlockH-accurance:
            addClass(SECTIONS.TOP_BLOCK, 'active')
            removeClass(SECTIONS.WORKS, 'active')
            removeClass(SECTIONS.ABOUT, 'active')
            return SECTIONS.TOP_BLOCK
        case getScrollPosition() >= worksPosition-accurance && getScrollPosition() < worksPosition + worksH-accurance:
            addClass(SECTIONS.WORKS, 'active')
            removeClass(SECTIONS.TOP_BLOCK, 'active')
            removeClass(SECTIONS.ABOUT, 'active')
            return SECTIONS.WORKS
        case getScrollPosition() >= aboutPosition-accurance && getScrollPosition() < aboutPosition + aboutH:
            addClass(SECTIONS.ABOUT, 'active')
            removeClass(SECTIONS.TOP_BLOCK, 'active')
            removeClass(SECTIONS.WORKS, 'active')
            return SECTIONS.ABOUT
    }
}

export function addClass(section, className) {
    const elem = blockToLink.get(section);
    !elem.classList.contains(className) && elem.classList.add(className);
}

export function removeClass(section, className) {
    const elem = blockToLink.get(section);
    elem.classList.contains(className) && elem.classList.remove(className);
}
