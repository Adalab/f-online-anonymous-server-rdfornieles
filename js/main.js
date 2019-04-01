'use strict';

const buttonMenu = document.querySelector('.nav-trigger');
const listMenu = document.querySelector('.nav');
const closeMenu = document.querySelector('.nav-close');

function handleClickMenu(){
    listMenu.classList.add('nav__transition');
}

function handleCloseMenu(){
    listMenu.classList.remove('nav__transition');
}

buttonMenu.addEventListener("click", handleClickMenu);
closeMenu.addEventListener("click", handleCloseMenu);