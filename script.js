const secondy = document.querySelector(".secondary_container");
const primary = document.querySelector(".main_container");
const toggleContainers = document.querySelector(".btn");
var grade = 5;
var arrayOfNumbr = document.querySelectorAll(".round_container.nmber");
const arrayLen = arrayOfNumbr.length;
console.log(arrayLen);
for (var i = 0; i < arrayLen; i++) {
    arrayOfNumbr[i].addEventListener("click", function (event) {
        grade = event.target.innerText;
        document.querySelector("#score").innerText = grade;
    });
}

toggleContainers.addEventListener("click", function () {
    primary.classList.add("primary");
});
toggleContainers.addEventListener("click", function () {
    secondy.classList.remove("secondary");
});
