// EX7: Write a function to change the h1 text to something else
function changeH1Text() {
  document.getElementById("h1").innerHTML = "The Laptop Shop";
}

changeH1Text();

// EX8: Write a function to change the page background color
function bodyColor() {
  document.body.style.backgroundColor = "blue";
}

//  bodyColor()

// EX9: Write a function to change the footer address with a fake one

function changeFooter() {
  document.getElementById("footer-text").innerHTML = "This is a Fake Address..";
}

// changeFooter();

// EX10: Write a function to add a CSS class to every Amazon link

function amazonLinks() {}

amazonLinks();

// EX11: Write a function to toggle a CSS class for all the images in the table; that class should set the visibility of the image

function myFunction() {
  document.getElementById("allImages").classList.toggle("hidden");
}

// EX12: Write a function to color the price of the products in a different one every time it’s invoked
function priceColor() {
  document.getElementsByTagName("span").innerHTML = "hi";
}
priceColor();
