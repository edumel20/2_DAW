document.addEventListener("DOMContentLoaded");

$(function () {
  fetch("https://fakestoreapi.com/products")
    .then((response) => response.json())
    .then((data) => shata);

  let showProducts = $("#products");

  function showData.map((p) => {
    const newDiv = document.createElement("div");
    newDiv.textContent = p.title;
    showProducts.append(newDiv);
  });
});
