const API_Link = "https://api.adviceslip.com/advice";
const cardNumber = document.querySelector(".card-number");
const cardQuote = document.querySelector(".card-quote");
const fetchBtn = document.querySelector("button.card-btn");

const fetchNewAdvice = async () => {
    const response = await fetch(API_Link);
    const advice = await response.json();
    return advice;
};

const renderAdvice = (adviceObj) => {
    const {id, advice} = adviceObj;
    cardNumber.textContent = `ADVICE #${id}`;
    cardQuote.textContent = advice;
}

const generateNewAdvice = async () => {
    const data = await fetchNewAdvice();
    const advice = data.slip;
    renderAdvice(advice);
}

window.addEventListener("DOMContentLoaded", () => {
    fetchBtn.addEventListener("click", generateNewAdvice);
});