const gallery = document.getElementById('imageGallery');
const widgetTags = document.querySelector('.widgetTags');
const buttonsInHtml = document.getElementById('myButtons');

const imageSources = [
  'img/image1.jpg',
  'img/image2.jpg',
  'img/image3.jpg',
  'img/image4.jpg',
];

const tags = ['Cat', 'Dog', 'Bird', 'Turtle'];

const myButtons = [
  'Cat Info',
  'Dog Info',
  'Bird Info',
  'Turtle Info',
  'Other Info',
  'Profile',
];

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

function insertButtons() {
  for (let i = 0; i < myButtons.length; i++) {
    const buttonElement = document.createElement('button');
    buttonElement.setAttribute('class', 'myButton');
    buttonElement.innerText = myButtons[i];

    if (i % 2 === 0) {
      buttonElement.style.setProperty('background-color', 'green');
    } else {
      buttonElement.style.setProperty('background-color', 'red');
    }

    if (myButtons[i] === 'Other Info') {
      buttonElement.style.setProperty('border', '10px solid blue');
    }

    buttonsInHtml.appendChild(buttonElement);
  }
}

insertImages();
insertTags();
insertButtons();
