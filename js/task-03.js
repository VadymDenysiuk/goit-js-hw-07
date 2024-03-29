const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];
document.querySelector('style').insertAdjacentHTML('beforeEnd', 
`#gallery {
  list-style: none;
}
.item:not(:last-child) {
  margin-bottom: 15px;
}
.image {
  display: block;
  margin: 0 auto;
  width: 350px;
  border-radius: 3px;
}`
)
const galleryEl = document.querySelector('#gallery');
const createString = images => `<li class = "item"><img class = "image" src = ${images.url} alt = ${images.alt}></li>` ;
const result = images.reduce((acc, image) => acc + createString(image), '')
galleryEl.insertAdjacentHTML('beforeEnd', result)