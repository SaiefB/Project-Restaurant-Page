import "./styles.css";

import {initialPageLoad} from "./home";

import {loadMenu} from "./menu";

import {loadAbout} from "./about";

const contentDiv = document.getElementById("content");
initialPageLoad();

const homeReload = initialPageLoad;
const homeBtn = document.getElementById("homeBtn");
homeBtn.addEventListener("click", homeReload);

const menuReload = loadMenu;
const menuBtn = document.getElementById("menuBtn");
menuBtn.addEventListener("click", menuReload);

const aboutReload = loadAbout;
const aboutBtn = document.getElementById("aboutBtn");
aboutBtn.addEventListener("click", aboutReload);
