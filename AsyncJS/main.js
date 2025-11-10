function getRandomNumber(max) {
  return Math.floor(Math.random() * max);
}

function increaseScore() {
  const scoreElement = document.querySelector("#score");
  const score = parseInt(scoreElement.querySelector("b").innerHTML);
  scoreElement.innerHTML = `Corrrect answers: <b>${score + 1}</b>`;
}

function reduceLive() {
  const solidHearts = document.querySelectorAll("#lives .fa-heart.fas");
  [li];
  const heartIcon = solidHearts[solidHearts.length - 1];

  if (heartIcon) {
    heartIcon.classList.remove("fas");
    heartIcon.classList.add("far");
  }

  if (!!heartIcon && solidHearts.length === 1) {
    return false;
  }
  return true;
}

function createQuestion(countries) {
  const randomCountry = countries[getRandomNumber(countries.length)];
  const question = `Which of the flags represents <b>${randomCountry.name.common}</b>?`;
  const questionElement = document.createElement("h2");
  questionElement.classList.add("text-center", "my-5");
  questionElement.innerHTML = question;
  return questionElement;
}

function createCard(country) {
  const card = document.createElement("div");
  card.classList.add("card", "col");

  const cardBody = document.createElement("div");
  cardBody.classList.add("card-body");

  const flag = document.createElement("img");
  flag.src = country.flags.svg;
  flag.classList.add("card-img-top");

  cardBody.appendChild(flag);
  card.appendChild(cardBody);

  card.addEventListener("click", function () {
    const chosenCountry = country.name.common;
    const questionCountry = document.querySelector(
      "#countryContainer h2 b"
    ).innerHTML;
    if (chosenCountry === questionCountry) {
      setTimeout(createCountryCards, 1000);
      card.classList.add("bg-success");
      increaseScore();
    } else {
      card.classList.add("bg-danger");
      const shouldContinue = reduceLive();

      if (shouldContinue) {
        setTimeout(createCountryCards, 1000);
      } else {
        alert("Game Over");
      }
    }

    const cards = document.querySelectorAll(".card");
    cards.forEach((card) => (card.style.pointerEvents = "none"));
  });

  return card;
}

async function createCountryCards() {
  const container = document.querySelector("#countryContainer");
  container.innerHTML = "";

  const countries = await fetchRandomCountries();

  container.appendChild(createQuestion(countries));

  countries.forEach((country) => {
    const card = createCard(country);
    container.appendChild(card);
  });
}

async function fetchRandomCountries() {
  const response = await fetch(
    "https://restcountries.com/v3.1/all?fields=name,flags"
  );
  const countries = await response.json();

  //   const shuffleCountries = countries.slice().sort(() => 0.5 - Math.random()).slice(0,3)

  const randomCountries = [];
  const generatedIndices = new Set();

  while (randomCountries.length < 3) {
    const randomIndex = getRandomNumber(countries.length);
    if (!generatedIndices.has(randomIndex)) {
      generatedIndices.add(randomIndex);
      randomCountries.push(countries[randomIndex]);
    }
  }

  return randomCountries;
}

createCountryCards();
