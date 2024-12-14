// Notification dropdown toggle
document
  .querySelector("header nav .dropdown a")
  .addEventListener("click", function (event) {
    event.preventDefault(); // Prevents default link behavior
    const dropdownList = this.nextElementSibling; // Get the .list element
    dropdownList.classList.toggle("open"); // Toggle the 'open' class
    document.querySelector("header nav a > span").style.display = "none";
  });

// Menu Bar
document.querySelector(".menu-icon").addEventListener("click", function () {
  document.querySelector("nav").classList.toggle("active");
});

// Select all like and comment buttons
let likeBtns = document.querySelectorAll(".post .details .btns .like");
let commentBtns = document.querySelectorAll(".post .details .btns .comment");

// Loop through all like buttons and add click event
likeBtns.forEach((likeBtn) => {
  likeBtn.addEventListener("click", () => {
    likeBtn.classList.toggle("liked");
  });
});

// Loop through all comment buttons and add click event
commentBtns.forEach((commentBtn) => {
  commentBtn.addEventListener("click", () => {
    // Find the corresponding input field in the same post
    let post = commentBtn.closest(".post");
    let inputField = post.querySelector(".details > input");
    inputField.focus();
  });
});

// Accept & Refused Btns

let accBtn = document.querySelector(".right-row .accepted");
let rejBtn = document.querySelector(".right-row .rejected");
document
  .querySelector(".right-row .request-btns .accept")
  .addEventListener("click", function () {
    document.querySelector(".right-row .request-btns").style.display = "none";
    accBtn.style.display = "block";
  });
document
  .querySelector(".right-row .request-btns .refuse")
  .addEventListener("click", function () {
    document.querySelector(".right-row .request-btns").style.display = "none";
    rejBtn.style.display = "block";
  });
