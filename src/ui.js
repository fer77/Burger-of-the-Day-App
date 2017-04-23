import xss from "xss-filters";

let ui = {
  burgerOfTheDay(burgers){

    let target = document.querySelector(".container");

    let postBurgers = burgers.map( burger => {
      return menuItem(burger.title, burger.ingridient);
    });

    target.innerHTML = postBurgers.join("");
  },
};

function menuItem(title, ingridient){
  let burgerTitle = xss.inHTMLData(title);
  let ingredients = xss.inHTMLData(ingridient);

  return`<article class='special'>
    <h2 class='burger-title'>
      ${burgerTitle}
    </h2>
    <p class='ingredients'>
      comes with ${ingredients}
    </p>
  </article>`;
}

export default ui;
