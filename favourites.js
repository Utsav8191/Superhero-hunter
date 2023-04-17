
const favListArray = JSON.parse(localStorage.getItem('favList'));
// console.log(favListArray);
let cardsSection = document.querySelector('section');

if (favListArray.length === 0) {
  const noResults = document.createElement('div');
  const messageText = document.createElement('h2');
  messageText.style.marginTop = "2rem";
  messageText.classList.add("messageText");
  messageText.innerText = "Sorry Nothing In Your Favourite List !!";
  noResults.append(messageText);
  cardsSection.append(noResults);
}

for (let i of favListArray) {
 
  let cardContainer = document.createElement('div');  
  cardContainer.classList.add("card-container");
  cardsSection.append(cardContainer);
  
  let frontFace = document.createElement('div');
  frontFace.classList.add("front");
  cardContainer.append(frontFace);
  
  let imageTag = document.createElement('img');
  imageTag.setAttribute("src", i.image.url ?? "");
  frontFace.append(imageTag);

  let backFace = document.createElement('div');
  backFace.classList.add("back");
  cardContainer.append(backFace);

  let heroName = document.createElement("h2");
  heroName.innerText = i.name;
  backFace.append(heroName);

  let deleteBtn = document.createElement("button");
  deleteBtn.classList.add("delete-btn");
  backFace.append(deleteBtn);

  let DeleteIcon = document.createElement("i");
  DeleteIcon.classList.add("fa-solid");
  DeleteIcon.classList.add("fa-trash");
  DeleteIcon.style.color = "#363030";
  deleteBtn.append(DeleteIcon);

  deleteBtn.addEventListener('click', ()=> {
    cardsSection.removeChild(cardContainer);
    // favListArray.splice()
    const index = favListArray.findIndex((movie)=> {
      return movie.name== i.name;
      
    })
    // console.log(index);
    favListArray.splice(index, 1);
    localStorage.setItem('favList', JSON.stringify(favListArray));
    
  })
}