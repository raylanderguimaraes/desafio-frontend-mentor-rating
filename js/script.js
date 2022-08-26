let cardRating = document.querySelector(".rating");
let cardThanks = document.querySelector(".thanks")
let btnNumbers = document.querySelectorAll(".btn-numbers")
let result = document.getElementById("result")
let btnSubmit = document.getElementById("submit")



function hiddenCardRating() {
    
    if (result.innerHTML === "") {
        alert("Clique em um número para avaliar o produto.")
    } else {
        cardRating.classList.add("rating-hidden");
        showThanks()
    }

}

function showThanks() {
    cardThanks.classList.add("thanks-show");
}

btnSubmit.addEventListener("click", hiddenCardRating);


btnNumbers.forEach((btnNumber) => {
    result.innerHTML = ""
    btnNumber.addEventListener("click", () => {

        result.innerHTML = btnNumber.innerHTML;

    })

})

























