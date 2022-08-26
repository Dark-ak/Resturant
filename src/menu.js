export function menu_page(){
    const in_menu = document.createElement("div");
    in_menu.id = "menu";
    in_menu.className = "main";

    const heading = document.createElement("h1");
    heading.id = "heading";
    heading.textContent = "Menu";
    in_menu.appendChild(heading);

    const container = document.createElement("div");
    container.className = "container";


    container.appendChild(add_items(
        "Murgh",
        "A dum biryani recipe with loads of spices makes Murgh ki kachchi biryani a delight for chicken lovers!"
    ));

    container.appendChild(add_items(
        "Calicut",
        "Calicut Chicken Biryani is a popular recipe down south that has the perfect amalgamation of Chicken and rice with pleasing flavours of the region in a melange of spices, chillies and herbs"
    ));

    container.appendChild(add_items(
        "Fish",
        "Dum cooked biryani loaded with flavorful, tangy fried fish and aromatic spices along with rich cashew nuts."
    ))

    container.appendChild(add_items(
        "Keema",
        "Cook up a storm by combining minced lamb with aromatic spices and crunchy nuts. Keema biryani is the delicious amalgamation of rice with aromatic spices and minced meat, dry fruits and rose water that is a delight to relish on."
    ))

    in_menu.appendChild(container)

    return in_menu;
}

function add_items(dish,desc){
    const items = document.createElement("div");
    items.className = "items";

    const dish_img = document.createElement("img");
    dish_img.src = `./img/${dish.toLowerCase()}.jpg`;

    const data = document.createElement("div");
    data.className = "data";

    const dish_desc = document.createElement("p");
    dish_desc.textContent = desc;

    const dish_name = document.createElement("h2");
    dish_name.id = "item";
    dish_name.textContent = dish + " Biryani";


    data.appendChild(dish_name);
    data.appendChild(dish_desc);
    items.appendChild(dish_img);
    items.appendChild(data);

    return items;

}