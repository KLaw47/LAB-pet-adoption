const pets = [
    {
      name: "Dusty",
      color: "Green",
      specialSkill: "Gives sincere apologies.",
      type: "cat",
      imageUrl: "http://kittentoob.com/wp-content/uploads/2015/06/funny-cat-with-a-towel.jpg"
    },
    {
      name: "Trouble",
      color: "Brown",
      specialSkill: "Just picks the tomatoes off of a sandwich instead of requesting a whole new sandwich.",
      type: "dino",
      imageUrl: "http://www.jozilife.co.za/wp-content/uploads/The-Dino-Expo.jpg"
    },
    {
      name: "Whiskers",
      color: "Yellow",
      specialSkill: "Can prove he is a real man by drinking whiskey.",
      type: "dino",
      imageUrl: "https://mydinosaurs.com/wp-content/uploads/2017/02/2-3-600x400.jpg"
    },
    {
      name: "Coco",
      color: "Black",
      specialSkill: "Burps minimally.",
      type: "dog",
      imageUrl: "http://cdn.akc.org/content/article-body-image/funny-pembroke_welsh_corgi.jpg"
    },
    {
      name: "Spooky",
      color: "Brown",
      specialSkill: "Comfortable in the outdoors for up to eight hours.",
      type: "cat",
      imageUrl: "http://www.catster.com/wp-content/uploads/2017/08/A-fluffy-cat-looking-funny-surprised-or-concerned.jpg"
    },
    {
      name: "Tiger",
      color: "Black",
      specialSkill: "Can read (but cannot understand) Hebrew.",
      type: "dog",
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/7/7e/Basset_Hound_600.jpg"
    },
    {
      name: "Oreo",
      color: "Yellow",
      specialSkill: "Able to stop chewing ice or whistling on request.",
      type: "cat",
      imageUrl: "https://i.pinimg.com/originals/9d/da/3e/9dda3e5fd2b9886fc3d13ee47f52e8a0.jpg"
    },
    {
      name: "Ginger",
      color: "Grey",
      specialSkill: "Comfortable in the outdoors for up to eight hours.",
      type: "dino",
      imageUrl: "http://www.theouthousers.com/images/jck//ThanosCopter/news/grumpasaur.jpg"
    },
    {
      name: "Sassy",
      color: "Brown",
      specialSkill: "Adept at talking self and others out of fights.",
      type: "cat",
      imageUrl: "https://tailandfur.com/wp-content/uploads/2015/09/40-Amazing-Cat-Funny-Moment-Pictures-Feature-Image.jpg"
    },
    {
      name: "Sammy",
      color: "Blue",
      specialSkill: "Listens attentively to boring stories.",
      type: "cat",
      imageUrl: "https://i.pinimg.com/originals/04/54/92/0454926d39eeb420f4f01948e94e9e41.jpg"
    },
    {
      name: "Coco",
      color: "Orange",
      specialSkill: "Can be around food without staring creepily at it.",
      type: "dino",
      imageUrl: "http://www.cantref.com/userfiles/events/walking%20dino.jpg?w=600"
    },
    {
      name: "Buster",
      color: "Green",
      specialSkill: "Does not use excessive acronyms.",
      type: "dog",
      imageUrl: "https://i.pinimg.com/originals/1f/30/8c/1f308c9c108a384b91b39430cc7312e9.jpg"
    },
    {
      name: "Chester",
      color: "Red",
      specialSkill: "Expertly quotes and recognizes dialogue from early seasons of The Simpsons.",
      type: "dog",
      imageUrl: "http://1kjkdg1axrkd2g03cnboj761.wpengine.netdna-cdn.com/wp-content/uploads/2017/12/braydon-anderson-105552-e1512684107659.jpg"
    },
    {
      name: "Samantha",
      color: "Brown",
      specialSkill: "Always up for dessert.",
      type: "cat",
      imageUrl: "http://3.bp.blogspot.com/-RzIFLsIO-XQ/UFoMLOT66JI/AAAAAAAAVps/JRF98hdA9S8/s640/funny-cat-pictures-016-027.jpg"
    },
    {
      name: "Coco",
      color: "Red",
      specialSkill: "Burps minimally.",
      type: "cat",
      imageUrl: "http://cathumor.net/wp-content/uploads/2013/12/cat-humor-funny-karate-cat-2.jpg"
    },
    {
      name: "Smokey",
      color: "Brown",
      specialSkill: "Drives at a safe rate of speed in snow or rain.",
      type: "dino",
      imageUrl: "https://images.readwrite.com/wp-content/uploads/2018/03/t-rex-dino-quiz-e1490854556549.jpg"
    },
    {
      name: "Muffin",
      color: "Yellow",
      specialSkill: "Does not freak out if you haven’t seen his favorite movie (The Big Lebowski).",
      type: "cat",
      imageUrl: "http://www.funnycatsite.com/pictures/Close_Up_Yawn.jpg"
    },
    {
      name: "Salem",
      color: "Brown",
      specialSkill: "Proficient in air guitar",
      type: "dino",
      imageUrl: "https://www.nation.co.ke/image/view/-/4078922/highRes/1742693/-/maxw/600/-/1453yvh/-/DINO.jpg"
    },
    {
      name: "Callie",
      color: "Blue",
      specialSkill: "Listens attentively to boring stories.",
      type: "dog",
      imageUrl: "http://dailynewsdig.com/wp-content/uploads/2014/03/Creative-And-Funny-Dog-Stock-Photography-Pictures-2.jpg"
    },
    {
      name: "Spooky",
      color: "Black",
      specialSkill: "Uses litter box at appropriate hours.",
      type: "cat",
      imageUrl: "http://www.funnycatsite.com/pictures/Lazy_White_Cat.jpg"
    },
    {
      name: "Miss kitty",
      color: "Red",
      specialSkill: "Owns a Nintendo Power Glove.",
      type: "dino",
      imageUrl: "https://img.buzzfeed.com/buzzfeed-static/static/2015-11/2/12/enhanced/webdr15/anigif_enhanced-29802-1446485228-10.gif?crop=250:165;0,0&downsize=715"
    },
    {
      name: "Snuggles",
      color: "Orange",
      specialSkill: "Is comfortable with jokes about his receding hairline.",
      type: "cat",
      imageUrl: "http://funnyanimalphoto.com/wp-content/uploads/2013/08/cat_caught_mouse_thegatewaypundit.jpg"
    },
    {
      name: "Buddy",
      color: "Red",
      specialSkill: "Enjoys fine wine.",
      type: "dog",
      imageUrl: "http://1.bp.blogspot.com/-VjM0CmtN-vU/T7YX-LXa09I/AAAAAAAADA0/Vt1oGWEG0lw/s1600/sheepdog+border+collie+shakes+off+water+funny+picture+photo+pulling+faces+raspberry+tongue.jpg"
    },
    {
      name: "George",
      color: "Brown",
      specialSkill: "Participates in karaoke but does not force others to go out to karaoke.",
      type: "dog",
      imageUrl: "http://www.dogbreedplus.com/dog_breeds/images/basset-hound-4.jpg"
    },
    {
      name: "Salem",
      color: "Red",
      specialSkill: "Knows the words to 4 rap songs.",
      type: "cat",
      imageUrl: "http://funbk.s3.amazonaws.com/wp-content/uploads/2016/06/funny-cat-video-which-will-make-you-laugh-louder.jpg"
    },
    {
      name: "Bubba",
      color: "Yellow",
      specialSkill: "Cleans himself.",
      type: "dog",
      imageUrl: "https://www.thetrendywhippet.co.uk/wp-content/uploads/2016/11/IMG_1651-600x400.jpg"
    },
    {
      name: "Chloe",
      color: "Green",
      specialSkill: "Admits he is wrong",
      type: "dino",
      imageUrl: "https://assets.creationmuseum.org/img/pages/1703-DinoDen-TwoCard.jpg"
    },
    {
      name: "Nala",
      color: "Purple",
      specialSkill: "Dances when he has to.",
      type: "cat",
      imageUrl: "https://tailandfur.com/wp-content/uploads/2016/03/40-Scary-and-Funny-Cat-Pictures-8.jpg"
    },
    {
      name: "Oscar",
      color: "Green",
      specialSkill: "Gives hugs with appropriate pressure and for the right length of time.",
      type: "cat",
      imageUrl: "http://img.izismile.com/img/img2/20090219/cats_02.jpg"
    },
    {
      name: "Lucy",
      color: "Red",
      specialSkill: "Doesn’t get weirded out by the word “moist.”",
      type: "dino",
      imageUrl: "http://lsae2.iypcdn.com/static//modules/uploads/photos/language1/dino-live-22.jpg?119"
    }
  ];


pets.forEach((item, index)=>{
  item.id = index+1;
});

//console.log(pets);

const renderToDom = (divId, textToRender) => {
  const selectedDiv = document.querySelector(divId);
  selectedDiv.innerHTML = textToRender;
};

const petModal = () => {
  const domString = 
  `
  <!-- Button trigger modal -->
    <button type="button" class="btn btn-light" data-bs-toggle="modal" data-bs-target="#add-video">
    Add Pet
    </button>
     <!-- Modal -->
  <div class="modal fade" id="add-video" tabindex="-1" aria-labelledby="add-video" aria-hidden="true">
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
    
        <button 
          type="submit" 
          class="btn btn-success" 
        >
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



const filterBtns  = () => {
  let domString =`
  <button class="btn btn-secondary btn-lg buttonRow" id="all">All pets</button>
  <button class="btn btn-secondary btn-lg buttonRow" id="cat">Cats</button>
  <button class="btn btn-secondary btn-lg buttonRow" id="dog">Dogs</button>
  <button class="btn btn-secondary btn-lg buttonRow" id="dino">Dinos</button>
`;
renderToDom("#filterContainer", domString)
};


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
        <p>${member.type}</p>
      </div>
    </div>
  </div>`;
  }
  renderToDom("#app", domString);
};
 
const eventListeners = () => {
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
const startApp = () => {
  petModal()
  filterBtns()
  renderCards(pets)
  eventListeners()
};
startApp()
