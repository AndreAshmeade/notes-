colorWord = () => {
  // Find an element by element id
  let x = document.getElementById("location");
  x.style.color = "blue";
};

colorBackground = () => {
  let x = document.getElementById("location");
  x.style.background = "yellow";
};

count = () => {
  // Find elements by tag name
  let x = document.getElementsByTagName("li");
  document.getElementById("demo").innerHTML = x.length;
};

changeParagraph = () => {
  let x = (document.getElementsByTagName("p")[3].innerHTML = "Information");
};

changeText = () => {
  // Find elements by class name
  let text = document.getElementsByClassName("city");
  // change the inner HTML of an element
  text[1].innerHTML = "Paterson";
};

// The querySelector() method returns the first element that
// matches a specified CSS selector(s) in the document.

selector = () => {
  document.querySelector("#location").innerHTML = "Hello World!";
};

selection = () => {
  const parentElement = document.querySelector("#parent");
  let allChildren = parentElement.querySelectorAll(":scope > span");
  allChildren.forEach((item) => item.classList.add("red"));
};

//Asynchronously load and execute a script from a specified URL
//Returns a Promise that resolves when the script has load.
importScript = (url) => {
  return new Promise((resolve, reject) => {
    let s = document.createElement("script"); // Create a <script> element
    s.onload = () => {
      resolve();
    }; // Resolve promise when loaded
    s.onerror = (e) => {
      reject(e);
    }; // Reject on failure
    s.src = url; // Set the script URL
    document.head.append(s); // Add <script> to document
  });
}
importScript("./add.js");
