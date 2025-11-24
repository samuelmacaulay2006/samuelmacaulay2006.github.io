/// Complete variable definitions
const customName = document.getElementById("custom-name");
const generateBtn = document.querySelector(".generate");
const story = document.querySelector(".story");

function randomValueFromArray(array) {
  const random = Math.floor(Math.random() * array.length);
  return array[random];
}

// Raw text strings
const characters = ["Willy the Goblin", "Big Daddy", "Father Christmas"];
const places = ["the soup kitchen", "Disneyland", "the White House"];
const events = [
  "spontaneously combusted",
  "melted into a puddle on the sidewalk",
  "turned into a slug and slithered away",
];

// Return random full story + the character picked
function returnRandomStoryString() {
  const randomCharacter = randomValueFromArray(characters);
  const randomPlace = randomValueFromArray(places);
  const randomEvent = randomValueFromArray(events);

  const storyText = `It was 94 Fahrenheit outside, so ${randomCharacter} went for a walk. When they got to ${randomPlace}, they stared in horror for a few moments, then ${randomEvent}. Bob saw the whole thing, but was not surprised — ${randomCharacter} weighs 300 pounds, and it was a hot day.`;

  return { storyText, randomCharacter };
}

// Event listener
generateBtn.addEventListener("click", generateStory);

function generateStory() {
  const { storyText, randomCharacter } = returnRandomStoryString();
  let newStory = storyText;

  // Custom name replacing the random character
  if (customName.value !== "") {
    const name = customName.value;
    newStory = newStory.replace(new RegExp(randomCharacter, "g"), name);
  }

  // UK unit conversion
  if (document.getElementById("uk").checked) {
    const weight = `${Math.round(300 / 14)} stone`;
    const temperature = `${Math.round((94 - 32) * (5 / 9))} Celsius`;

    newStory = newStory.replace("300 pounds", weight);
    newStory = newStory.replace("94 Fahrenheit", temperature);
  }

  story.textContent = newStory;
  story.style.visibility = "visible";
}
