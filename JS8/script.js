// Function to save events to local storage
function saveEventsToLocalStorage() {
  localStorage.setItem("events", JSON.stringify(events));
}

// Function to load events from local storage
function loadEventsFromLocalStorage() {
  const storedEvents = localStorage.getItem("events");
  return storedEvents ? JSON.parse(storedEvents) : [];
}

// Function to generate a unique event ID
function generateEventId() {
  return "_" + Math.random().toString(36).substring(2, 9);
}

function addEvent() {
  const eventDate = document.getElementById("eventDate").value;
  const eventDescription = document.getElementById("eventDescription").value;

  if (!eventDate || !eventDescription) {
    alert("Please select a date and enter an event description.");
    return;
  }

  events.push({
    id: generateEventId(),
    date: eventDate,
    description: eventDescription,
  });
  saveEventsToLocalStorage();
  updateEventsList();
}

function removeEvent(eventId) {
  events = events.filter((event) => event.id !== eventId);
  saveEventsToLocalStorage();
  updateEventsList();
}

function updateEventsList(filteredEvents = events) {
  const eventsList = document.getElementById("eventsList");
  eventsList.innerHTML = "";

  for (let i = 0; i < filteredEvents.length; i++) {
    const event = filteredEvents[i];
    const listItem = document.createElement("li");
    listItem.className =
      "list-group-item d-flex justify-content-between align-items-center";

    const eventDetails = document.createElement("span");
    eventDetails.textContent = `${event.date}: ${event.description}`;
    listItem.appendChild(eventDetails);

    const removeButton = document.createElement("button");
    removeButton.className = "btn btn-danger btn-sm ml-2";
    removeButton.textContent = "Remove";
    removeButton.addEventListener("click", () => removeEvent(event.id));
    listItem.appendChild(removeButton);

    eventsList.appendChild(listItem);
  }
}

function filterEventsByDay(selectedDate) {
  const filteredEvents = events.filter((event) => event.date === selectedDate);
  updateEventsList(filteredEvents);
}

function showAllEvents() {
  updateEventsList();
}

function generateNextSevenDays() {
  const daysButtons = document.querySelector(".btn-group");

  for (let i = 0; i < 7; i++) {
    const buttonDate = new Date();
    buttonDate.setDate(buttonDate.getDate() + i);

    const button = document.createElement("button");
    button.type = "button";
    button.className = "btn btn-secondary";

    const isoDate = buttonDate.toISOString().split("T")[0]; // 2025-10-10
    button.textContent = buttonDate.toLocaleDateString("default", {
      month: "short",
      day: "numeric",
    });
    button.addEventListener("click", () => filterEventsByDay(isoDate));

    daysButtons.appendChild(button);
  }
}

// Initial Setup
let events = loadEventsFromLocalStorage();
generateNextSevenDays();
updateEventsList();

function sum(a = 1, b = 2, c = 3) {
  return a + b + c;
}

sum(); // 1 + 2 + 3 = 6
sum(5); // 5 + 2 + 3 = 10
sum(6, 3); // 6 + 3 + 3
sum(1, 1, 1);

sum(undefined, undefined, 9);
