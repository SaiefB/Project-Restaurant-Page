function loadMenu() {
    const contentDiv = document.getElementById("content");

    contentDiv.innerHTML = "";

    // Title
    const title = document.createElement("h1");
    title.textContent = "Menu";
    contentDiv.appendChild(title);

    // Beverages
    const beverageSectionContainer = document.createElement("div")
    beverageSectionContainer.className = "sectionContainer";
    contentDiv.appendChild(beverageSectionContainer);

    // Beverages - Title
    const beverageTitle = document.createElement("h2");
    beverageTitle.textContent = "Beverages";
    beverageSectionContainer.appendChild(beverageTitle)



    // Drink 1 Title
    const drinkTitle1 = document.createElement("h3");
    drinkTitle1.textContent = "Lodge Latte";
    beverageSectionContainer.appendChild(drinkTitle1);

    // Drink 1 Para
    const drinkPara1 = document.createElement("p");
    drinkPara1.textContent = "A classic latte made with rich, freshly brewed espresso and creamy steamed milk, topped with a dusting of cinnamon."
    beverageSectionContainer.appendChild(drinkPara1)

    // Drink 1 Price
    const drinkPrice1 = document.createElement("p");
    drinkPrice1.textContent = "$2"
    beverageSectionContainer.appendChild(drinkPrice1)



    // Drink 2 Title
    const drinkTitle2 = document.createElement("h3");
    drinkTitle2.textContent = "Maple Mocha";
    beverageSectionContainer.appendChild(drinkTitle2);

    // Drink 2 Para
    const drinkPara2 = document.createElement("p");
    drinkPara2.textContent = "Espresso, steamed milk, and chocolate syrup infused with a touch of pure maple syrup."
    beverageSectionContainer.appendChild(drinkPara2)

    // Drink 2 Price
    const drinkPrice2 = document.createElement("p");
    drinkPrice2.textContent = "$3"
    beverageSectionContainer.appendChild(drinkPrice2)



    // Drink 3 Title
    const drinkTitle3 = document.createElement("h3");
    drinkTitle3.textContent = "Campfire Cappuccino";
    beverageSectionContainer.appendChild(drinkTitle3);

    // Drink 3 Para
    const drinkPara3 = document.createElement("p");
    drinkPara3.textContent = "A frothy cappuccino topped with a sprinkle of cocoa powder and a hint of nutmeg."
    beverageSectionContainer.appendChild(drinkPara3)

    // Drink 3 Price
    const drinkPrice3 = document.createElement("p");
    drinkPrice3.textContent = "$3.50"
    beverageSectionContainer.appendChild(drinkPrice3)



    // Sides
    const sidesSectionContainer = document.createElement("div")
    sidesSectionContainer.className = "sectionContainer";
    contentDiv.appendChild(sidesSectionContainer);    

    // Sides - Title
    const sidesTitle = document.createElement("h2");
    sidesTitle.textContent = "Sides";
    sidesSectionContainer.appendChild(sidesTitle)



     // sides 1 Title
     const sidesTitle1 = document.createElement("h3");
     sidesTitle1.textContent = "Golden Hash Browns";
     sidesSectionContainer.appendChild(sidesTitle1);
 
     // sides 1 Para
     const sidesPara1 = document.createElement("p");
     sidesPara1.textContent = "Crispy on the outside, soft on the inside, seasoned to perfection."
     sidesSectionContainer.appendChild(sidesPara1)
 
     // sides 1 Price
     const sidesPrice1 = document.createElement("p");
     sidesPrice1.textContent = "$2.50"
     sidesSectionContainer.appendChild(sidesPrice1);



     // sides 2 Title
     const sidesTitle2 = document.createElement("h3");
     sidesTitle2.textContent = "Maple Sausage Links";
     sidesSectionContainer.appendChild(sidesTitle2);
 
     // sides 2 Para
     const sidesPara2 = document.createElement("p");
     sidesPara2.textContent = "Juicy sausage links glazed with pure maple syrup."
     sidesSectionContainer.appendChild(sidesPara2)
 
     // sides 2 Price
     const sidesPrice2 = document.createElement("p");
     sidesPrice2.textContent = "$3"
     sidesSectionContainer.appendChild(sidesPrice2);



     // sides 3 Title
     const sidesTitle3 = document.createElement("h3");
     sidesTitle3.textContent = "Farm Fresh Eggs";
     sidesSectionContainer.appendChild(sidesTitle3);
 
     // sides 3 Para
     const sidesPara3 = document.createElement("p");
     sidesPara3.textContent = "Cooked to order: scrambled, fried, or poached."
     sidesSectionContainer.appendChild(sidesPara3)
 
     // sides 3 Price
     const sidesPrice3 = document.createElement("p");
     sidesPrice3.textContent = "$3.50"
     sidesSectionContainer.appendChild(sidesPrice3);



     // Main Dishes
    const mainSectionContainer = document.createElement("div")
    mainSectionContainer.className = "sectionContainer";
    contentDiv.appendChild(mainSectionContainer);

    // main - Title
    const mainTitle = document.createElement("h2");
    mainTitle.textContent = "Main Dishes";
    mainSectionContainer.appendChild(mainTitle);



    // mains 1 Title
    const mainTitle1 = document.createElement("h3");
    mainTitle1.textContent = "Maple Lodge Pancakes";
    mainSectionContainer.appendChild(mainTitle1);

    // main 1 Para
    const mainPara1 = document.createElement("p");
    mainPara1.textContent = "A hearty stack of three golden-brown buttermilk pancakes, cooked to fluffy perfection. Topped with a generous drizzle of our signature pure maple syrup and a dollop of freshly whipped cream. Pair it with a side of bacon or sausage for the ultimate breakfast experience."
    mainSectionContainer.appendChild(mainPara1)

    // main 1 Price
    const mainPrice1 = document.createElement("p");
    mainPrice1.textContent = "$9.99"
    mainSectionContainer.appendChild(mainPrice1);



    // mains 2 Title
    const mainTitle2 = document.createElement("h3");
    mainTitle2.textContent = "Forest Skillet";
    mainSectionContainer.appendChild(mainTitle2);

    // main 2 Para
    const mainPara2 = document.createElement("p");
    mainPara2.textContent = "A hearty breakfast skillet packed with flavor. It features scrambled eggs, roasted breakfast potatoes, caramelized onions, sautéed mushrooms, and sharp cheddar cheese. Served sizzling hot in a cast-iron skillet for an authentic lodge experience."
    mainSectionContainer.appendChild(mainPara2)

    // main 2 Price
    const mainPrice2 = document.createElement("p");
    mainPrice2.textContent = "$13.99"
    mainSectionContainer.appendChild(mainPrice2);



    // mains 3 Title
    const mainTitle3 = document.createElement("h3");
    mainTitle3.textContent = "French Toast Delight";
    mainSectionContainer.appendChild(mainTitle3);

    // main 3 Para
    const mainPara3 = document.createElement("p");
    mainPara3.textContent = "Thick slices of buttery brioche bread soaked in a rich cinnamon-vanilla custard and grilled until golden. Topped with powdered sugar, fresh fruit, and a generous pour of maple syrup."
    mainSectionContainer.appendChild(mainPara3)

    // main 3 Price
    const mainPrice3 = document.createElement("p");
    mainPrice3.textContent = "$11.49"
    mainSectionContainer.appendChild(mainPrice3);



    // mains 4 Title
    const mainTitle4 = document.createElement("h3");
    mainTitle4.textContent = "Chocolate Chip Pancake Stack";
    mainSectionContainer.appendChild(mainTitle4);

    // main 4 Para
    const mainPara4 = document.createElement("p");
    mainPara4.textContent = "A chocolate lover's dream! These fluffy pancakes are loaded with rich chocolate chips, topped with whipped cream, and drizzled with velvety chocolate syrup."
    mainSectionContainer.appendChild(mainPara4)

    // main 4 Price
    const mainPrice4 = document.createElement("p");
    mainPrice4.textContent = "$10.49"
    mainSectionContainer.appendChild(mainPrice4);



    // mains 5 Title
    const mainTitle5 = document.createElement("h3");
    mainTitle5.textContent = "Maple Granola Bowl";
    mainSectionContainer.appendChild(mainTitle5);

    // main 5 Para
    const mainPara5 = document.createElement("p");
    mainPara5.textContent = "A delightful bowl of house-made granola layered with creamy Greek yogurt and topped with fresh seasonal fruit. Drizzled with a touch of maple syrup for the perfect balance of sweet and wholesome."
    mainSectionContainer.appendChild(mainPara5)

    // main 5 Price
    const mainPrice5 = document.createElement("p");
    mainPrice5.textContent = "$9.99"
    mainSectionContainer.appendChild(mainPrice5);



    // mains 6 Title
    const mainTitle6 = document.createElement("h3");
    mainTitle6.textContent = "Avocado Toast Supreme";
    mainSectionContainer.appendChild(mainTitle6);

    // main 6 Para
    const mainPara6 = document.createElement("p");
    mainPara6.textContent = "Thick-cut artisan bread toasted to perfection and topped with creamy smashed avocado, a perfectly poached egg, and a sprinkle of chili flakes. Garnished with microgreens and a drizzle of olive oil for a fresh and healthy start."
    mainSectionContainer.appendChild(mainPara6)

    // main 6 Price
    const mainPrice6 = document.createElement("p");
    mainPrice6.textContent = "$12.49"
    mainSectionContainer.appendChild(mainPrice6);
}

export {
    loadMenu
}