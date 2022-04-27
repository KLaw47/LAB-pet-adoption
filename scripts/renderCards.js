import renderToDom from "./renderToDom.js";

const renderCards = (array) => {
  let domString ='';
  for (const member of array) {
  
    domString += `
    <div class="card" style="width: 18rem;">
    <div class="card-body">
    <div>
      <button class="btn btn-danger" id="delete--${member.name}">X</button>
    </div>
      <p class="card-text">${member.name}</p>
      <img src="${member.imageUrl}" class="card-img-top" alt="...">
      <p class="color">${member.color}</p>
      <p class=skl>${member.specialSkill}</p>
      <div class="d-grid gap-2">
        <p class="type">${member.type}</p>
      </div>
    </div>
  </div>`;
  }
  renderToDom("#app", domString);
};

export default renderCards;
