
const burger = document.getElementById("burger");
const menu = document.getElementById("menu");


burger.addEventListener("click", () => {
    menu.classList.toggle("show"); 
    burger.classList.toggle("active");
});

let personnes = document.getElementById("personnes");
const titre = document.getElementById("titre");
const total = document.getElementById("total");
const prix = document.getElementById("prix");

document.getElementById("toggle").addEventListener("click", () => {
    let content = document.getElementById("content");
    if (content.classList.contains("hidden")) {
        content.classList.remove("hidden");
    } else {
        content.classList.add("hidden");
    }

    let activita = document.getElementById("activitai").value;
    document.getElementById("sortie").textContent = activita;

    let image_sortie = document.getElementById("image_sortie");
    image_sortie.innerHTML = ""; 

    let prixparpersonnes = personnes.value;

    if (activita == "Balade en chien de traineau") {
        let img = document.createElement("img");
        img.src = "Images/4d99709e-a680-436e-9afe-1becf6d2219f.webp";
        img.style.width = "600px";
        img.style.borderRadius = "10px";
        img.style.marginTop = "100px";
        
        
        let container = document.createElement("div");
        container.style.display = "flex";
        container.style.alignItems = "center";  
        container.style.justifyContent = "space-between"; 
        container.appendChild(img);

        let textContainer = document.createElement("div");
        textContainer.style.marginLeft = "20px"; 

        let price = 125;
        
        let description = document.createElement("description")
        description = "Glissez à travers des paysages enneigés, porté par l’énergie de chiens enthousiastes sous un ciel nordique immaculé. Bien plus qu’une simple excursion, c’est une immersion totale dans la nature arctique pour une aventure inoubliable.";
        
        let rule = document.createElement("rule")
        rule = "Vous serez responsable si tout probleme lié à la méteo, à l'activité ou dégradement de votre materiel."

        textContainer.innerHTML = `
        <br>
        <h3 id="titre">${description}</h3>
        <br>
        <h4 id="rule">${rule}<h4>
        <br>
        <br>
        <br>
        <p id="prix">Prix par personne est : ${price} €</p>
        <p id="total">Pour ${prixparpersonnes} personnes, le prix s'élévera à : ${price * prixparpersonnes} €</p>
    `;

        container.appendChild(textContainer);
        image_sortie.appendChild(container);
    }

    if (activita == "Paysages Inoubliables") {
        let img = document.createElement("img");
        img.src = "Images/Stegastein.jpg";
        img.style.width = "600px";
        img.style.borderRadius = "10px";
        img.style.marginTop = "100px";

        let container = document.createElement("div");
        container.style.display = "flex";
        container.style.alignItems = "center";
        container.style.justifyContent = "space-between";
        container.appendChild(img);

        let textContainer = document.createElement("div");
        textContainer.style.marginLeft = "20px";
        textContainer.style.marginTop = "100px";

        let price = 345;
        let description = "Plongez au cœur des décors nordiques les plus spectaculaires ! Entre fjords majestueux, montagnes enneigées et vallées sauvages, chaque sentier vous révèle la beauté brute de la Norvège. Admirez des panoramas à couper le souffle, où la nature règne en maître et où chaque instant devient un souvenir impérissable.";

        let rule = document.createElement("rule")
        rule = "Vous serez responsable si tout probleme lié à la méteo, à l'activité ou dégradement de votre materiel."

        textContainer.innerHTML = `
            <br>
            <h3 id="titre">${description}</h3>
            <br>
            <h4 id="rule">${rule}<h4>
            <br>
            <br>
            <br>
            <p id="prix">Prix par personne est : ${price} €</p>
            <p id="total">Pour ${prixparpersonnes} personnes, le prix s'élévera à : ${price * prixparpersonnes} €</p>
        `;

        container.appendChild(textContainer);
        image_sortie.appendChild(container);
    }

    if (activita == "Excursion pour les aurores boreales") {
        let img = document.createElement("img");
        img.src = "Images/1518.jpg";
        img.style.width = "600px";
        img.style.borderRadius = "10px";
        img.style.marginTop = "100px";

        let container = document.createElement("div");
        container.style.display = "flex";
        container.style.alignItems = "center";
        container.style.justifyContent = "space-between";
        container.appendChild(img);

        let textContainer = document.createElement("div");
        textContainer.style.marginLeft = "20px";
        textContainer.style.marginTop = "100px";

        let price = 245;
        let description = "Assistez à l’un des plus beaux phénomènes naturels au monde : les aurores boréales. Dansez avec les lumières du nord sous un ciel étoilé, entouré de paysages enneigés et d’une atmosphère féérique.";

        let rule = document.createElement("rule")
        rule = "Vous serez responsable si tout probleme lié à la méteo, à l'activité ou dégradement de votre materiel."

        textContainer.innerHTML = `
        <br>
        <h3 id="titre">${description}</h3>
        <br>
        <h4 id="rule">${rule}<h4>
        <br>
        <br>
        <br>
        <p id="prix">Prix par personne est : ${price} €</p>
        <p id="total">Pour ${prixparpersonnes} personnes, le prix s'élévera à : ${price * prixparpersonnes} €</p>
    `;

        container.appendChild(textContainer);
        image_sortie.appendChild(container);
    }

    if (activita == "Skier sous les aurores boréales à Lyngen Alps") {
        let img = document.createElement("img");
        img.src = "Images/snowshoeing_troms_finnmark_northern_norway_photo_kari_schibevaag_visit_tromso_37639b92-66f9-4f8f-85e7-1b801fd70f12.jpg";
        img.style.width = "600px";
        img.style.borderRadius = "10px";
        img.style.marginTop = "100px";

        let container = document.createElement("div");
        container.style.display = "flex";
        container.style.alignItems = "center";
        container.style.justifyContent = "space-between";
        container.appendChild(img);

        let textContainer = document.createElement("div");
        textContainer.style.marginLeft = "20px";
        textContainer.style.marginTop = "100px";

        let price = 655;
        let description = "Si tu es fan de ski ou de snowboard, les Alpes de Lyngen offrent des descentes incroyables avec vue sur les fjords. En hiver, tu peux même skier sous les aurores boréales pour une expérience magique.";

        let rule = document.createElement("rule")
        rule = "Vous serez responsable si tout probleme lié à la méteo, à l'activité ou dégradement de votre materiel."

        textContainer.innerHTML = `
        <br>
        <h3 id="titre">${description}</h3>
        <br>
        <h4 id="rule">${rule}<h4>
        <br>
        <br>
        <br>
        <p id="prix">Prix par personne est : ${price} €</p>
        <p id="total">Pour ${prixparpersonnes} personnes, le prix s'élévera à : ${price * prixparpersonnes} €</p>
    `;

        container.appendChild(textContainer);
        image_sortie.appendChild(container);
    }

    if (activita == "Faire un road trip sur l'Atlantic Road") {
        let img = document.createElement("img");
        img.src = "Images/2019-10-07---oh-norway---basti-hansen---22-51-36---0657.webp";
        img.style.width = "600px";
        img.style.borderRadius = "10px";
        img.style.marginTop = "100px";

        let container = document.createElement("div");
        container.style.display = "flex";
        container.style.alignItems = "center";
        container.style.justifyContent = "space-between";
        container.appendChild(img);

        let textContainer = document.createElement("div");
        textContainer.style.marginLeft = "20px";
        textContainer.style.marginTop = "100px";

        let price = 595;
        let description = "Si tu es fan de ski ou de snowboard, les Alpes de Lyngen offrent des descentes incroyables avec vue sur les fjords. En hiver, tu peux même skier sous les aurores boréales pour une expérience magique.";

        let rule = document.createElement("rule")
        rule = "Vous serez responsable si tout probleme lié à la méteo, à l'activité ou dégradement de votre materiel."

        textContainer.innerHTML = `
        <br>
        <h3 id="titre">${description}</h3>
        <br>
        <h4 id="rule">${rule}<h4>
        <br>
        <br>
        <br>
        <p id="prix">Prix par personne est : ${price} €</p>
        <p id="total">Pour ${prixparpersonnes} personnes, le prix s'élévera à : ${price * prixparpersonnes} €</p>
    `;

        container.appendChild(textContainer);
        image_sortie.appendChild(container);
    }

    if (activita == "Les îles Lofoten et leurs villages de pêcheurs") {
        let img = document.createElement("img");
        img.src = "Images/lofoten-4827611_1280.jpg";
        img.style.width = "600px";
        img.style.borderRadius = "10px";
        img.style.marginTop = "100px";

        let container = document.createElement("div");
        container.style.display = "flex";
        container.style.alignItems = "center";
        container.style.justifyContent = "space-between";
        container.appendChild(img);

        let textContainer = document.createElement("div");
        textContainer.style.marginLeft = "20px";
        textContainer.style.marginTop = "100px";

        let price = 275;
        let description = "Si tu es fan de ski ou de snowboard, les Alpes de Lyngen offrent des descentes incroyables avec vue sur les fjords. En hiver, tu peux même skier sous les aurores boréales pour une expérience magique.";

        let rule = document.createElement("rule")
        rule = "Vous serez responsable si tout probleme lié à la méteo, à l'activité ou dégradement de votre materiel."

        textContainer.innerHTML = `
            <br>
            <h3 id="titre">${description}</h3>
            <br>
            <h4 id="rule">${rule}<h4>
            <br>
            <br>
            <br>
            <p id="prix">Prix par personne est : ${price} €</p>
            <p id="total">Pour ${prixparpersonnes} personnes, le prix s'élévera à : ${price * prixparpersonnes} €</p>
        `;

        container.appendChild(textContainer);
        image_sortie.appendChild(container);
    }
});


