
var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(event, tabname) {
    for(let tablink of tablinks){
        tablink.classList.remove("active-link");
    }
    for(let tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab");
    }

    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}

const paragraphs = document.querySelectorAll('.about-text');
const nextButton = document.getElementById('next-button');
let currentParagraphIndex = 0;

// Initialize by showing the first paragraph
paragraphs[currentParagraphIndex].style.display = 'block';

nextButton.addEventListener('click', () => {
    // Hide the current paragraph
    paragraphs[currentParagraphIndex].style.display = 'none';

    // Increment the index
    currentParagraphIndex++;

    // If the index exceeds the last paragraph, reset to the first
    if (currentParagraphIndex >= paragraphs.length) {
        currentParagraphIndex = 0;
    }

    // Show the next (or first) paragraph
    paragraphs[currentParagraphIndex].style.display = 'block';
 });



// JavaScript for Sidebar Toggle
var sidemenu = document.getElementById("side-menu");

function openmenu() {
    sidemenu.style.right = "0"; // Show the menu
    document.querySelector(".fa-bars").style.display = "none"; // Hide hamburger menu
}

function closemenu() {
    sidemenu.style.right = "-200px"; // Hide the menu
    document.querySelector(".fa-bars").style.display = "block"; // Show hamburger menu
}


const scriptURL = 'https://script.google.com/macros/s/AKfycbytMCNtVkFT7P2Obghi_kMAwiGMQ5le4acXxQXz5eRmhWQdyvooBDkWNz_eGJHElEo/exec'
 const form = document.forms['submit-to-google-sheet']
 const msg = document.getElementById('msg');

form.addEventListener('submit', e => {
e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => {
        msg.innerHTML = "Message submitted successfully";
        setTimeout(function(){
            msg.innerHTML = "";
        }, 5000)
        form.reset();
    })
    .catch(error => console.error('Error!', error.message))
})

// Dynamically update the year
const yearElement = document.getElementById('year');
yearElement.textContent = new Date().getFullYear();
