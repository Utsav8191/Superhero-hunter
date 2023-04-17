
window.onload = ()=> {
  const heroInfo = JSON.parse(sessionStorage.getItem('herodetails'));
  console.log(heroInfo);

  // Setting Image
  const image = document.querySelector(".first-column> img");
  image.setAttribute('src', heroInfo.image.url);

  // Setting Hero-Name 
  const heroName = document.querySelector(".title-tile> h2");
  heroName.innerHTML = heroInfo.name;

  
  const intelPercent = document.querySelector("#intelligence-percent");
  const percent = heroInfo.powerstats.intelligence;
  console.log(typeof percent);
  intelPercent.style.width = `${percent}%`;
  // console.log(percent);

  const strengthPercent = document.querySelector("#strength-percent");
  strengthPercent.style.width = `${heroInfo.powerstats.strength}%`;

  const speedPercent = document.querySelector("#speed-percent");
  speedPercent.style.width = `${heroInfo.powerstats.speed}%`;

  const durabilityPercent = document.querySelector("#durability-percent");
  durabilityPercent.style.width = `${heroInfo.powerstats.durability}%`;

  const powerPercent = document.querySelector("#power-percent");
  powerPercent.style.width = `${heroInfo.powerstats.power}%`;
  

  // Setting Appearance data
  const gender = document.querySelector("#gender");
  
  gender.innerText = heroInfo.appearance.gender;

  const race = document.querySelector("#race");
  race.innerText = heroInfo.appearance.race;

  const height = document.querySelector("#height");
  height.innerText = heroInfo.appearance.height[0];

  const weight = document.querySelector("#weight");
  weight.innerText = heroInfo.appearance.weight;

  
  const eyeColor = document.querySelector("#eyeColor");
  console.log(heroInfo.appearance['eye-color']);
  eyeColor.innerText = heroInfo.appearance['eye-color'];
  

  // Setting Work Data
  const occupation = document.querySelector("#occupation-name");
  occupation.innerText = heroInfo.work.occupation;

  const base = document.querySelector("#base");
  base.innerText = heroInfo.work.base;
}