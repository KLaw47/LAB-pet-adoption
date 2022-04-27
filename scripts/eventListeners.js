import renderCards from "./renderCards.js";
import pets from "./data.js";

const eventListeners = () => {

  const formModal = new bootstrap.Modal(document.querySelector('#add-pet'));
  //form modal hide and form modal reset will not work without this

  document.querySelector('#filterContainer').addEventListener('click', (e) =>{
    if (e.target.id === "all") {
      renderCards(pets);
    }else if (e.target.id) {
      const types = pets.filter(el =>el.type === e.target.id);
     
      renderCards(types);

    }
  });
//delete
document.querySelector('#app').addEventListener('click', (e) => {
  if (e.target.id) {
    const [method, name] = e.target.id.split("--");
    const index = pets.findIndex(pet => pet.name === name)
    if (e.target.id.includes('delete')) {
      pets.splice(index, 1)
      renderCards(pets);
    }
  }
});
  //form
  const form = document.querySelector('form');
  form.addEventListener('submit', (e) => {
    e.preventDefault(); 
    const subObj =    {
      name: document.querySelector("#name").value,
      color: document.querySelector("#color").value,
      specialSkill: document.querySelector("#specialSkill").value,
      type: document.querySelector("#type").value,
      imageUrl: document.querySelector("#imageUrl").value,
    }
   
    pets.push(subObj);
   
    renderCards(pets)

  formModal.hide()
   form.reset();
  });
}

export default eventListeners;
