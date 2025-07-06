const gallery = document.getElementById('imageGallery');

const imageSources = [
  'img/image1.jpg',
  'img/image2.jpg',
  'img/image3.jpg',
  'img/image4.jpg',
];

function insertImages() {
  for (let i = 0; i < imageSources.length; i++) {
    const imgElement = document.createElement('img');
    imgElement.src = imageSources[i]; // The src includes the 'img/' directory
    gallery.appendChild(imgElement);
  }
}

insertImages();
