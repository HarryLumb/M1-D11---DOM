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

function amazonLinks() {
  const links = document.querySelectorAll("a");
  for (let i = 0; i < links.length; i++) {
    links[i].classList.add("jsStyle");
  }
}

amazonLinks();

// EX11: Write a function to toggle a CSS class for all the images in the table; that class should set the visibility of the image

function myFunction() {
  document.getElementById("allImages").classList.toggle("hidden");
}

// EX12: Write a function to color the price of the products in a different one every time it’s invoked
function priceColor() {
  const lrs = document.querySelectorAll(".price");
  const color = randomColor();
  for (let i = 0; i <= lrs.length - 1; i++) {
    lrs[i].style.color = randomColor();
  }
}
priceColor();

function randomColor() {
  const red = Math.round(Math.random() * 255);
  const green = Math.round(Math.random() * 255);
  const blue = Math.round(Math.random() * 255);
  return "rgb(" + red + "," + green + "," + blue + ")";
}

priceColor();
