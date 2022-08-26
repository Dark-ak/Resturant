import { first } from "./home";
import { menu_page } from "./menu";
import './style.css';
import { third } from "./contact";


function component(){
    const top = document.createElement("div");
    top.className = "top";

    const h1 = document.createElement("h1");
    h1.textContent = "Biryani Delight";
    top.appendChild(h1);

    const content = document.getElementById("content");
    const navigation = document.createElement("div");
    navigation.className = "buttons"

    const home_btn = document.createElement("button");
    home_btn.className = "tab";
    home_btn.id = "home"
    home_btn.textContent = "Home";
    home_btn.addEventListener("click",nav(event,"home"))

    const menu_btn = document.createElement("button");
    menu_btn.id = "menu"
    menu_btn.className = "tab";
    menu_btn.textContent = "Menu";
    menu_btn.addEventListener("click",nav(event,"menu"))

    const contact_btn = document.createElement("button");
    contact_btn.id = "contacts"
    contact_btn.className = "tab";
    contact_btn.textContent = "Contacts";
    home_btn.addEventListener("click",nav(event,"contacts"))

    navigation.appendChild(home_btn);
    navigation.appendChild(menu_btn);
    navigation.appendChild(contact_btn)

    content.appendChild(top);
    content.appendChild(navigation);
    content.appendChild(first());

    content.appendChild(menu_page());
    content.appendChild(third());
}

component();


function nav(evt,target){
  document.addEventListener("DOMContentLoaded", function () {
      const mains = document.querySelectorAll(".main");    
      const tabs = document.querySelectorAll(".tab");

      const activateTab = target => {
          const contentId = target.getAttribute('id');

          mains.forEach(main => {
            main.style.display = main.id === contentId ? 'block' : 'none';
          });
        
          tabs.forEach(tab => {
            tab.classList.remove('active');
          });
        
          target.classList.add('active');

        };
        
        const tabbedWindows = evt => {
          const target = evt.currentTarget;
        
          activateTab(target);
        }
        
        document.querySelectorAll(".tab").forEach(tab => {
          tab.addEventListener('click', tabbedWindows, false);
        });
        
        activateTab(tabs[0]);

        
    });
}




