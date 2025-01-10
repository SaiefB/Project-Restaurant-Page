function loadAbout() {
    const contentDiv = document.getElementById("content");

    contentDiv.innerHTML = "";

    const title = document.createElement("h1");
    title.textContent = "About Us"
    contentDiv.appendChild(title);

    const aboutSectionContainer = document.createElement("div");
    aboutSectionContainer.className = "sectionContainer";
    contentDiv.appendChild(aboutSectionContainer);

    const aboutTitle = document.createElement("h2");
    aboutTitle.textContent = "Who are we?";
    aboutSectionContainer.appendChild(aboutTitle);

    const aboutPara1 = document.createElement("p");
    aboutPara1.textContent = "Welcome to The Moose & Maple, a cozy breakfast café where rustic mountain charm meets the sweet warmth of maple syrup. Our menu celebrates comfort and flavor with hearty classics, indulgent treats, and creative twists, all made with high-quality ingredients and a touch of love.";
    aboutSectionContainer.appendChild(aboutPara1);

    const aboutPara2 = document.createElement("p");
    aboutPara2.textContent = "We’re more than a café—we’re a place to gather, connect, and create memories. Whether you’re here for a hearty breakfast or a relaxing brunch, our warm atmosphere and friendly service make every visit feel like home.";
    aboutSectionContainer.appendChild(aboutPara2);
}

export {
    loadAbout
}