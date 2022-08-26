export function first(){

    const main = document.createElement("div");
    main.id = "home";
    main.className = "main";
    
    const line = document.createElement("div");
    line.className = "line";
    const catchy = document.createElement("p");
    catchy.className = ("catch");
    catchy.textContent = "Taste the Luxury";
    line.appendChild(catchy);


    const catchy2 = document.createElement("p")
    catchy2.className = ("catch2");
    catchy2.textContent = "Best Biryani in Your Country"
    line.appendChild(catchy2);

    const btn = document.createElement("button")
    btn.type = "button";
    btn.textContent = "Order Now";
    line.appendChild(btn);

    const mid = document.createElement("div");
    mid.className = "mid";

    const hrs = document.createElement("p");
    hrs.textContent = "Opening Hours: 8am to 10pm Every day";
    mid.appendChild(hrs);

    const loc = document.createElement("p");
    loc.textContent = "Location: Richwood,OH,United States";
    mid.appendChild(loc);

    main.appendChild(line);
    main.appendChild(mid);


    return main;

};