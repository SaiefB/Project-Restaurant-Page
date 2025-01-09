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

    const hoursSectionContainer = document.createElement("div");
    hoursSectionContainer.className = "sectionContainer";
    contentDiv.appendChild (hoursSectionContainer);

    const hoursTitle = document.createElement("h2")
    hoursTitle.textContent = "Hours"
    hoursSectionContainer.appendChild(hoursTitle)

    const hoursUL = document.createElement("ul");
    hoursSectionContainer.appendChild(hoursUL);


    const hoursLISun = document.createElement("li");
    const hoursLIMon = document.createElement("li");
    const hoursLITue = document.createElement("li");
    const hoursLIWed = document.createElement("li");
    const hoursLIThu = document.createElement("li");
    const hoursLIFri = document.createElement("li");
    const hoursLISat = document.createElement("li");
    hoursLISun.textContent = "Sunday: 8am - 8pm";
    hoursLIMon.textContent = "Monday: 6am - 6pm";
    hoursLITue.textContent = "Tuesday: 6am - 6pm";
    hoursLIWed.textContent = "Wednesday: 6am - 6pm<";
    hoursLIThu.textContent = "Thursday: 6am - 10pm";
    hoursLIFri.textContent = "Friday: 6am - 10pm<";
    hoursLISat.textContent = "Saturday: 8am - 10pm";
    hoursUL.appendChild(hoursLISun)
    hoursUL.appendChild(hoursLIMon)
    hoursUL.appendChild(hoursLITue)
    hoursUL.appendChild(hoursLIWed)
    hoursUL.appendChild(hoursLIThu)
    hoursUL.appendChild(hoursLIFri)
    hoursUL.appendChild(hoursLISat)

    const locationSectionContainer = document.createElement("div")
    locationSectionContainer.className = "sectionContainer";
    contentDiv.appendChild(locationSectionContainer);

    const locationTitle = document.createElement("h2");
    locationTitle.textContent = "Location";
    locationSectionContainer.appendChild(locationTitle);

    const locationPara = document.createElement("p");
    locationPara.textContent = "123 Forest Drive, Forestville, Maine";
    locationSectionContainer.appendChild(locationPara);
}

export {
    initialPageLoad
}