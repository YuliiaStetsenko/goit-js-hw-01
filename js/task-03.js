const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];


const galleryEl = document.querySelector(".gallery");

const createGalleryItem = ({ url, alt } = {}) => { 
  return `<li class=js-item"><img class"js-image" src="${url}" alt="${alt}" width="320" height="200"></li>`;
};
const galleryListElements = images.map(createGalleryItem).join("");
galleryEl.insertAdjacentHTML("beforeend", galleryListElements);

galleryEl.style.cssText = `display: flex;
  align-items: center;
  justify-content: center;
  column-gap:
  list-style-type: none;
  margin: 0;
  padding: 0;
  
  `;

