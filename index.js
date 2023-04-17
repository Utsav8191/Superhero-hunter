async function handleSearch() {
  const inputElement = document.querySelector("#input-field");
  const inputVal = inputElement.value;
  if(inputVal == null || inputVal == '') {
    alert("Invalid Input");
    return;
  }
  console.log(inputVal);
  const response = await fetch('https://www.superheroapi.com/api.php/1358348604650444/search/'+inputVal);
  const data = await response.json()
  console.log("Data", data); 
  handleresponse(data);
}

// Initializing fav list in local storage

function InitializeFavListArray() {
  const favListArray = JSON.parse(localStorage.getItem('favList'));
  if (!favListArray) {
    localStorage.setItem('favList',JSON.stringify([]));
  }
}
InitializeFavListArray();

function handleresponse(data) {
  if(data.response === 'error') {
    alert(`character with given name not found`);
    return;
  }
  let section = document.getElementById("second-section");
  let heroContainer = document.createElement("div");
  heroContainer.classList.add("hero-container");
  section.append(heroContainer);

  // Displaying Search result cards 
  for (let i of data.results) {
    
    let heroCard = document.createElement("div");
    heroCard.classList.add("hero-card");
    heroContainer.append(heroCard);

    let imageContainer = document.createElement("div");
    imageContainer.classList.add("hero-image-container");
    heroCard.append(imageContainer);

    let imageElement = document.createElement("img");
    console.log(imageElement);
    imageElement.setAttribute("src", i.image.url ?? "");
    imageContainer.append(imageElement);

    let heroCardContent = document.createElement("div");
    heroCardContent.classList.add("hero-content");
    heroCard.append(heroCardContent);

    let text = document.createElement("p");
    text.innerText = i.name ?? "";
    heroCardContent.append(text);

    // Creating Fav Button
    let favBtn = document.createElement("button");
    heroCardContent.append(favBtn);

    let heartIcon = document.createElement("i");
    heartIcon.classList.add("fas");
    heartIcon.classList.add("fa-heart");
    heartIcon.classList.add("heart-icon");
    favBtn.append(heartIcon);

    favBtn.addEventListener('click', (event)=> {
      event.stopPropagation();
      alert("Item Was Added");
      const arr = JSON.parse(localStorage.getItem('favList'));
      arr.push(i);
      localStorage.setItem('favList',JSON.stringify(arr));
      sessionStorage.setItem('favList', JSON.stringify(arr));
    })

    heroCard.addEventListener('click', ()=>{
      const herodetails = i;
      sessionStorage.setItem('herodetails', JSON.stringify(herodetails));
      window.open("superhero.html");
    })

    // const herodetails = i;
    // console.log("object is : ",i)     

  }
}