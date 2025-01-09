import "./styles.css";

import {initialPageLoad} from "./home"

const contentDiv = document.getElementById("content");
contentDiv.innerHTML = "";

const homeReload = initialPageLoad()
const homeBtn = document.getElementById("homeBtn")
homeBtn.addEventListener("click", homeReload);
/* initialPageLoad(); */