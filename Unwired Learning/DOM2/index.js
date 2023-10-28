// console.log(document);

// console.log(document.location);

// console.log(document.domain);

// console.log(document.URL);

// console.log(document.title);

// let description= document.querySelector('ul');
// console.log(description);

// let selectorId = document.getElementById("website-name");
// console.log(selectorId);

// let selectorClass = document.getElementsByClassName("active");
// console.log(selectorClass);

// let selectorTag = document.getElementsByTagName("p");
// console.log(selectorTag);



// let subHeading = document.querySelector(".sub-heading");
// console.log(subHeading.innerText);

subHeading.innerText += "--- Updated Sub Heading! ---";
console.log(subHeading.innerText);


let liHead = document.querySelectorAll("ul.top-nav li");
liHead.forEach((element) => {
    element.innerText += "--";
});


// let subHeading = document.querySelector("ul.top-nav");
// subHeading.innerHTML = "<li>Register</li>" + subHeading.innerHTML;

