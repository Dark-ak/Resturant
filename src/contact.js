export function third(){
    const about = document.createElement("div");
    about.id = "contacts";
    about.className = "main";

    const heading = document.createElement("h2");
    heading.className = "heading";
    heading.textContent = "Contact Us";
    about.appendChild(heading);

    const box = document.createElement("div");
    box.className = "box";

    const email = document.createElement("p");
    email.textContent = "Email: biryanidelight69@gmail.com";
    email.className = "email";
    
    const phone = document.createElement("p");
    phone.textContent ="Phone: +1-202-555-0168";
    phone.className = "phone";

    const location =document.createElement("p");
    location.textContent = "Location: Richwood,OH,United States";
    location.className = "location";

    box.appendChild(email);
    box.appendChild(phone);
    box.appendChild(location);

    about.appendChild(box);

    return about;
}