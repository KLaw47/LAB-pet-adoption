import renderToDom from "./renderToDom.js"

const petModal = () => {
  const domString = 
  `
  <!-- Button trigger modal -->
    <button type="button" class="btn btn-light"  data-bs-toggle="modal" data-bs-target="#add-pet">
    Add Pet
    </button>

     <!-- Modal -->
     
  <div class="modal fade" id="add-pet" tabindex="-1" aria-labelledby="add-pet" aria-hidden="true">
    <div class="modal-dialog modal-fullscreen-md-down">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Add Pet</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body" id="modal-body">
        <form>
        <div class="form-floating mb-3">
          <input class="form-control form-control-lg" type="text" placeholder="Name" id="name" aria-label="name" required>
          <label for="name">Name</label>
        </div>
    
        <div class="form-floating mb-3">
          <input class="form-control form-control-lg" type="text" placeholder="Color" id="color" aria-label="color" required>
          <label for="title">Color</label>
        </div>
    
        <div class="form-floating mb-3">
        <input class="form-control form-control-lg" type="text" placeholder="Special Skill" id="specialSkill" aria-label="specialSkill" required>
        <label for="title">Special Skill</label>
      </div>
        
      <div class="form-floating mb-3">
      <input class="form-control form-control-lg" type="text" placeholder="Type of Pet" id="type" aria-label="type" required>
      <label for="title">Type</label>
    </div>
      
    <div class="form-floating mb-3">
    <input class="form-control form-control-lg" type="text" placeholder="Image URL" id="imageUrl" aria-label="imageUrl" required>
    <label for="title">Image URL</label>
  </div>
    
        <button type="submit" class="btn btn-success">
          Submit
        </button>
      </form>
        </div>
      </div>
    </div>
  </div>
  `;
  renderToDom("#formContainer", domString);
  };

  export default petModal;
