import Burger from "./burger";
import ui from "./ui";

Burger.findAll().then(ui.burgerOfTheDay);
