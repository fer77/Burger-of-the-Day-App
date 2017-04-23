import API from "./api";

let Burger = { findAll };

function findAll(){
  return API.fetch("burger");
}

export default Burger;
