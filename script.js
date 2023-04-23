const priceInpts = document.querySelectorAll("input[type='radio']");
const toggleEl = document.querySelector(".toggle");
const monthlyInp = document.getElementById("monthly");
const annuallyInp = document.getElementById("annually");
const priceEls = document.querySelectorAll(".card__price");

priceInpts.forEach((priceInp) => {
  priceInp.addEventListener("change", function () {
    if (priceInp.id === "monthly") {
      toggleEl.classList.add("monthly");
      priceChange(priceEls);
    } else {
      toggleEl.classList.remove("monthly");
      priceChange(priceEls);
    }
  });
});

toggleEl.addEventListener("click", function () {
  toggleEl.classList.toggle("monthly");
  priceChange(priceEls);
  if (toggleEl.classList.contains("monthly")) {
    monthlyInp.checked = true;
    annuallyInp.checked = false;
  } else {
    monthlyInp.checked = false;
    annuallyInp.checked = true;
  }
});

function priceChange(els) {
  els.forEach((priceEl) => {
    priceEl.classList.toggle("monthly");
  });
}
