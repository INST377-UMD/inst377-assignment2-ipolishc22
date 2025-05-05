window.onload = function () {
  document.getElementById("stocksButton").onclick = () =>
    (location.href = "INST377_Assignment2_Stocks.html");

  document.getElementById("dogsButton").onclick = () =>
    (location.href = "INST377_Assignment2_Dogs.html");

  fetch("https://zenquotes.io/api/random")
    .then((res) => res.json())
    .then((data) => {
      document.getElementById("quote").textContent =
        data[0].q + " – " + data[0].a;
    });
};
