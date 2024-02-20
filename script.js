document.addEventListener("DOMContentLoaded", function () {
  //Game Kit Button
  const gameButton = document.getElementById("Math Game");

  gameButton.addEventListener("click", () => {
    // Replace 'path/to/your/file.pdf' with the actual path to your PDF file
    window.open("./static/gamekit.pdf", "_blank");
  });

  //Math Glossary Button
  const mathGlossary = document.getElementById("Math Glossary");

  mathGlossary.addEventListener("click", () => {
    // Replace 'path/to/your/file.pdf' with the actual path to your PDF file
    window.open("./static/MathGlossary.pdf", "_blank");
  });

  //Math Problem Sheets Button
  const mathProblems = document.getElementById("Math Problem Sheets");

  mathProblems.addEventListener("click", () => {
    // Replace 'path/to/your/file.pdf' with the actual path to your PDF file
    window.open("./topmath.info_sheets.htm", "_blank");
  });

  //thatquiz.org Button
  const thatQuiz = document.getElementById("ThatQuiz.org");

  thatQuiz.addEventListener("click", () => {
    // Replace 'path/to/your/file.pdf' with the actual path to your PDF file
    window.open("http://www.thatquiz.org", "_blank");
  });
});

function toggleDropdown(sectionId) {
  const section = document.getElementById(sectionId);
  const dropdownContent = section.querySelector(".dropdown-content");

  dropdownContent.classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function (event) {
  if (!event.target.matches("h2")) {
    const dropdowns = document.getElementsByClassName("dropdown-content");
    for (let i = 0; i < dropdowns.length; i++) {
      const openDropdown = dropdowns[i];
      if (openDropdown.classList.contains("show")) {
        openDropdown.classList.remove("show");
      }
    }
  }
};
function toggleDropdown(button) {
  const allButtons = document.querySelectorAll('.big-button');
  allButtons.forEach(btn => {
    if (btn !== button) {
      btn.classList.remove('open');
    }
  });

  button.classList.toggle('open');
}

function navigateTo(link) {
  // Add your navigation logic here
  console.log('Navigating to:', link);
}
