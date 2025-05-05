window.onload = function () {
  loadRandomDogs();
  loadBreedButtons();
};

function loadRandomDogs() {
  const container = document.getElementById("carouselContainer");
  container.innerHTML = "";

  for (let i = 0; i < 10; i++) {
    fetch("https://dog.ceo/api/breeds/image/random")
      .then((res) => res.json())
      .then((data) => {
        const img = document.createElement("img");
        img.src = data.message;
        img.style.width = "70%";
        img.style.margin = "10px";
        img.style.borderRadius = "10px";
        container.appendChild(img);
      });
  }
}

function loadBreedButtons() {
  fetch("https://dogapi.dog/api/v2/breeds?page[size]=100")
    .then((res) => res.json())
    .then((data) => {
      const container = document.getElementById("breedsContainer");
      container.innerHTML = "";

      const breeds = data.data;

      for (let i = breeds.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [breeds[i], breeds[j]] = [breeds[j], breeds[i]];
      }

      const randomBreeds = breeds.slice(0, 10);

      randomBreeds.forEach((breed) => {
        const btn = document.createElement("button");
        btn.textContent = breed.attributes.name;
        btn.className = "button-73";
        btn.onclick = () => showBreedInfo(breed);
        container.appendChild(btn);
      });
    });
}

function showBreedInfo(breed) {
  const box = document.getElementById("breedInfo");
  box.style.display = "block";
  box.innerHTML = `
    <h2>${breed.attributes.name}</h2>
    <p>${breed.attributes.description}</p>
    <p><strong>Min Life:</strong> ${breed.attributes.life.min} years</p>
    <p><strong>Max Life:</strong> ${breed.attributes.life.max} years</p>
  `;
}
