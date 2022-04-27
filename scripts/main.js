import pets from "./data.js";

import renderToDom from "./renderToDom.js";

import petModal from "./petModal.js"

import filterBtns from "./filterBtns.js";

import renderCards from "./renderCards.js";

import eventListeners from "./eventListeners.js";


const startApp = () => {
 petModal()
  filterBtns()
  renderCards(pets)
  eventListeners()
};
startApp()
