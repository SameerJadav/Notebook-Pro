import "./style.css";

const titleInput = document.getElementById("titleInput");
const noteInput = document.getElementById("noteInput");
const saveBtn = document.getElementById("saveBtn");
const notesContainer = document.getElementById("notesContainer");
const form = document.getElementById("myForm");

// Prevent the form from being submitted when the user clicks the save button
form.addEventListener("submit", function (event) {
  event.preventDefault();
});

// Add a click event listener to the save button
saveBtn.addEventListener("click", saveNotes);

// Define the saveNotes function
function saveNotes() {
  // Get the title and note input values
  const title = titleInput.value;
  const note = noteInput.value;

  // Check if the title and note inputs are not empty
  if (title.trim() && note.trim()) {
    // Create a container element for the saved note
    const savedNotes = document.createElement("div");
    // Add a class to style the container element
    savedNotes.className =
      "w-full p-4 bg-gray-700 rounded-xl hover:-translate-y-2 shadow-xl hover:transition-all hover:duration-300 hover:delay-75";

    // Append the container element to the notes container
    notesContainer.append(savedNotes);

    // Create a h2 element for the title
    const h2 = document.createElement("h2");
    // Add a class to style the h2 element
    h2.className = "text-xl font-semibold w-full";
    // Set the inner text of the h2 element to the title
    h2.innerText = title;

    // Append the h2 element to the saved notes container
    savedNotes.append(h2);

    // Create a p element for the note
    const p = document.createElement("p");
    // Set the inner text of the p element to the note
    p.innerText = note;

    // Append the p element to the saved notes container
    savedNotes.append(p);

    // Clear the title and note inputs
    titleInput.value = "";
    noteInput.value = "";
  } else {
    // Show an error message if the title or note is empty
    alert("Please enter a title and note");
  }
}
