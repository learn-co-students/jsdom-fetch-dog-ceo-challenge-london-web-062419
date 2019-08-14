console.log('%c HI', 'color: firebrick')

const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
const breedUrl = 'https://dog.ceo/api/breeds/list/all'


// const loadDogImg = () => {
//     fetch(imgUrl)
//     .then(resp => resp.json())
//     .then(allDogs => {
//         renderAllDogs(allDogs);
//     });
// };

// const renderAllDogs = dogs => {
//     dogs.forEach(dog => {
//         renderDog(dog);
//     });
// };

// const renderDog = dog => {
//     const dogImageContainer = document.querySelector("#dog-image-container");
//     const img = document.createElement("img")
// }

document.addEventListener("DOMContentLoaded", () => {
    const dogBreeds = document.getElementById("dog-breeds");
    const dogImgContainer = document.getElementById("dog-image-container");
    const breedSelect = document.getElementById("breed-dropdown");
    fetch(imgUrl)
    .then(resp => resp.json())
    .then(({message}) => message.forEach(dogImgUrl => dogImgContainer.appendChild(createDogPic(dogImgUrl))))
    const breeds = []
    fetch(breedUrl)
    .then(resp => resp.json())
    .then(({message: breedsObj}) => {
      breeds.push(...Object.keys(breedsObj));
      listBreeds(breeds);
    })
  
    dogBreeds.addEventListener("click", ({target}) => target.tagName === "LI" && (target.style.color = "red"));
  
  
  
    breedSelect.addEventListener("change", ({target: {value}}) => {
      console.log(value);
      while(dogBreeds.firstChild) {
        dogBreeds.removeChild(dogBreeds.firstChild)
      }
      listBreeds(breeds.filter(breed => breed[0] === value));
    })
  
  
    const listBreeds = breeds => breeds.forEach(breed => {
        const li = document.createElement("li");
        li.innerText = breed;
        dogBreeds.appendChild(li);
      });
  
  });
  
  const createDogPic = dogImgUrl => {
    dogImg = document.createElement("img");
    dogImg.src = dogImgUrl;
    return dogImg
  }