function initialPageLoad() {
    const contentDiv = document.getElementById("content");

    contentDiv.innerHTML = "";

    const title = document.createElement("h1");
    title.textContent = "The Moose & Maple";
    contentDiv.appendChild(title);

    const welcomeSectionContainer = document.createElement("div");
    welcomeSectionContainer.className = "sectionContainer";
    contentDiv.appendChild(welcomeSectionContainer);

    const welcomeTitle = document.createElement("h2");
    welcomeTitle.textContent = "Welcome to The Moose & Maple";
    welcomeSectionContainer.appendChild(welcomeTitle);

    const welcomePara = document.createElement("p");
    welcomePara.textContent = "Nestled in the heart of rustic charm, The Moose & Maple is your cozy mountain retreat for a hearty breakfast and memorable moments. From golden stacks of pancakes drizzled with pure maple syrup to freshly brewed coffee served with a side of mountain serenity, we bring the warmth of a lodge right to your table.";
    welcomeSectionContainer.appendChild(welcomePara);

    const homeSectionContainer = document.createElement("div");
    homeSectionContainer.className = "sectionContainer";
    contentDiv.appendChild(homeSectionContainer);
}

export {
    initialPageLoad
}