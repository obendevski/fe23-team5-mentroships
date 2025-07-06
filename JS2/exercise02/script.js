const gallery = document.getElementById('imageGallery');
const widgetTags = document.querySelector('.widgetTags');

const imageSources = [
  'img/image1.jpg',
  'img/image2.jpg',
  'img/image3.jpg',
  'img/image4.jpg',
];

const tags = ['Cat', 'Dog', 'Bird', 'Turtle'];

function insertImages() {
  for (let i = 0; i < imageSources.length; i++) {
    const imgElement = document.createElement('img');
    imgElement.src = imageSources[i]; // The src includes the 'img/' directory
    gallery.appendChild(imgElement);
  }
}

function insertTags() {
  for (let i = 0; i < tags.length; i++) {
    let link = document.createElement('a');
    link.innerText = tags[i];
    link.setAttribute('class', 'linkStyle');
    link.href = '#';
    widgetTags.appendChild(link);
  }
}

insertImages();
insertTags();
