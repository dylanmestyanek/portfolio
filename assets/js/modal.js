// Get the modal
var modals = document.querySelectorAll("#modal");

// Get the button that opens the modal
var projectImages = document.querySelectorAll("#project-image");

// Get the <span> element that closes the modal
var closeButtons = document.querySelectorAll(".close");

// When the user clicks on the button, open the modal
projectImages.forEach(btn => btn.addEventListener('click', e => {
    const index = e.target.dataset.image;

    modals[index].style.display = "block";

    document.querySelector("#main").style.filter = "blur(2px)";
}))

// When the user clicks on <span> (x), close the modal
closeButtons.forEach(button => button.addEventListener('click', e => {
  const index = +e.target.dataset.span;
  console.log(e.target.dataset.span)
  modals[index].style.display = "none";
  document.querySelector("#main").style.filter = "blur(0px)";
}))

// When the user clicks anywhere outside of the modal, close it
