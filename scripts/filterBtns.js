import renderToDom from "./renderToDom.js";

const filterBtns  = () => {
  let domString =`
  <button class="btn btn-secondary btn-lg buttonRow" id="all">All pets</button>
  <button class="btn btn-secondary btn-lg buttonRow" id="cat">Cats</button>
  <button class="btn btn-secondary btn-lg buttonRow" id="dog">Dogs</button>
  <button class="btn btn-secondary btn-lg buttonRow" id="dino">Dinos</button>
`;
renderToDom("#filterContainer", domString)
};

export default filterBtns;
