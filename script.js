// script.js

const quotes = [
  "Technology is best when it brings people together. – Matt Mullenweg",
  "It has become appallingly obvious that our technology has exceeded our humanity. – Albert Einstein",
  "The science of today is the technology of tomorrow. – Edward Teller",
  "Technology is a useful servant but a dangerous master. – Christian Lous Lange",
  "Computers are like a bicycle for our minds. – Steve Jobs",
  "Any sufficiently advanced technology is indistinguishable from magic. – Arthur C. Clarke",
  "Innovation is the outcome of a habit, not a random act. – Sukant Ratnakar",
  "The most important thing in communication is hearing what isn’t said. – Peter Drucker",
  "It’s not a faith in technology. It’s faith in people. – Steve Jobs",
  "Technology, like art, is a soaring exercise of the human imagination. – Daniel Bell",
  "First, solve the problem. Then, write the code. – John Johnson",
  "The computer was born to solve problems that did not exist before. – Bill Gates",
  "In the future, there will be no female leaders. There will just be leaders. – Sheryl Sandberg",
  "People always fear change. People feared electricity when it was invented, didn’t they? – Bill Gates",
  "The only way to deal with this life meaningfully is to find one’s passion and then pursue it with all the energy in one’s soul. – Albert Einstein",
  "You can’t make an omelette without breaking some eggs. – Ray Kroc",
  "Software is a great combination between artistry and engineering. – Bill Gates",
  "Technology is the campfire around which we tell our stories. – Laurie Anderson",
  "The best way to predict the future is to invent it. – Alan Kay",
  "We’re changing the world with technology. – Bill Gates",
  "Technology is a word that describes something that doesn’t work yet. – Douglas Adams",
  "It is not the strongest of the species that survive, nor the most intelligent, but the one most responsive to change. – Charles Darwin",
  "The computer does not argue with you; it does what you tell it to do. – John Carmack",
  "Everything is theoretically impossible, until it is done. – Robert A. Heinlein",
  "Life is what happens when you’re busy making other plans. – John Lennon",
  "The real problem is not whether machines think but whether men do. – B. F. Skinner",
  "In a few minutes, a computer can make a mistake so great that it would take many men many months to equal it. – Unknown",
  "Technology is a double-edged sword. It can either enable us to build or destroy. – Ralph Nader",
  "Any technology that does not appear magical is not technology. – Kevin Kelly",
  "The role of the artist is to ask questions, not answer them. – Anton Pavlovich Chekhov",
  "Technology is a way of organizing the universe so that man doesn’t have to experience it. – Max Frisch",
  "The best minds of my generation are thinking about how to make people click ads. – Jeff Hammerbacher",
  "The important thing is not to stop questioning. – Albert Einstein",
  "I don’t believe that technology is good or bad. It’s what people do with it that matters. – Larry Page",
  "Technology is a tool, not a solution. – Tim Cook",
  "Just because something doesn’t do what you planned it to do doesn’t mean it’s useless. – Thomas Edison",
  "Innovation distinguishes between a leader and a follower. – Steve Jobs",
  "The future is already here – it’s just not very evenly distributed. – William Gibson",
  "Technology will never replace great teachers, but technology in the hands of great teachers can be transformational. – George Couros",
  "Artificial intelligence is the new electricity. – Andrew Ng",
  "You don’t need to have a 100-person startup to develop that idea. – Larry Page",
  "It’s not about the technology, it’s about the people. – Jeff Bezos",
  "We are at the dawn of a new era, and we have to keep up with the technological advances. – Narendra Modi",
  "The function of leadership is to produce more leaders, not more followers. – Ralph Nader",
  "It’s fine to celebrate success, but it is more important to heed the lessons of failure. – Bill Gates",
  "The future belongs to those who understand and innovate. – Steve Jobs",
  "Technology is a great tool, but it is a poor master. – Unknown",
  "Technological change is like an axe in the hands of a pathological criminal. – Albert Einstein"
];

let currentQuoteIndex = 0;

// Display the next quote
function showNextQuote() {
  currentQuoteIndex = (currentQuoteIndex + 1) % quotes.length;
  document.getElementById("quote").textContent = quotes[currentQuoteIndex];
}

// Toggle Dark Mode
function toggleDarkMode() {
  const body = document.body;
  const sidebar = document.getElementById("sidebar");
  const mainContent = document.getElementById("mainContent");

  body.classList.toggle("dark-mode");
  sidebar.classList.toggle("dark-mode");
  mainContent.classList.toggle("dark-mode");
}

// Sidebar Toggle
function openSidebar() {
  document.getElementById("sidebar").style.left = "0";
  document.getElementById("mainContent").style.marginLeft = "250px";
}

function closeSidebar() {
  document.getElementById("sidebar").style.left = "-250px";
  document.getElementById("mainContent").style.marginLeft = "0";
}

// Open the modal for information
function openInfoModal() {
  document.getElementById("infoModal").style.display = "block";
}

function closeInfoModal() {
  document.getElementById("infoModal").style.display = "none";
}

// Event Listeners
document.addEventListener("DOMContentLoaded", showNextQuote);
document.getElementById("nextQuote").addEventListener("click", showNextQuote);
document.getElementById("darkModeToggle").addEventListener("click", toggleDarkMode);
document.getElementById("openSidebar").addEventListener("click", openSidebar);
document.getElementById("closeSidebar").addEventListener("click", closeSidebar);
document.getElementById("closeModal").addEventListener("click", closeInfoModal);
document.getElementById("infoButton").addEventListener("click", openInfoModal);