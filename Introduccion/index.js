/* El DOM o Document Object Model es el árbol de nodos que generan los navegadores para entender nuestro código HTML. Y el Virtual DOM es un falso DOM, una copia que nos permite hacer cálculos pesados sin afectar el rendimiento del verdadero DOM.

JavaScript puede manipular el DOM para interactuar con los usuarios de nuestra página web. Usar el Virtual DOM podría reducir el trabajo del DOM y mejorar su rendimiento, pero también podría ser un paso innecesario que solo consume tiempo y memoria RAM. Ahí la discusión.
 */

function getAll(selectorName) {
  return document.querySelectorAll(selectorName);
}

function getElement(selector) {
  return document.querySelector(selector);
}

function addClass(element, className) {
  element.classList.add(className);
}

function removeClass(element, className) {
  element.classList.remove(className);
}

function addClassWhenHover(element, child, className) {
  element.addEventListener("mouseenter", () => {
    addClass(element.querySelector(child), className);
  });
  element.addEventListener("mouseleave", () => {
    removeClass(element.querySelector(child), className);
  });
}

function getInputValues(selector) {
  const element = getElement(selector).value;
  if (element !== undefined) {
    return element;
  }
}

function createCard(title, body) {
  const cards = getElement(".cards");
  const card = document.createElement("div");
  // add button delete
  const btnDelete = document.createElement("button");
  btnDelete.innerHTML = "X";
  btnDelete.classList.add("btnDelete");
  btnDelete.addEventListener("click", () => {
    card.remove();
  });
  card.appendChild(btnDelete);
  card.classList.add("card");
  const imgDiv = document.createElement("div");
  imgDiv.classList.add("imgCard");
  imgDiv.classList.add("hide");
  imgDiv.innerHTML = `<img src="./imgcard.jpg" alt="">`;
  card.appendChild(imgDiv);
  const cardHeader = document.createElement("div");
  cardHeader.classList.add("card-header");
  cardHeader.innerHTML = `<h2>${title}</h2>`;
  card.appendChild(cardHeader);
  const cardBody = document.createElement("div");
  cardBody.classList.add("card-body");
  cardBody.innerHTML = `<p>${body}</p>`;
  card.appendChild(cardBody);
  cards.appendChild(card);

  return card;
}

function initializeCards() {
  const cards = getAll(".card");
  const imgCards = getAll(".imgCard");

  cards.forEach((card, i) => addClassWhenHover(card, ".imgCard", "hide"));
}

function main() {
  initializeCards();
  const btn = getElement(".btn");

  btn.addEventListener("click", () => {
    const title = getInputValues(".title");
    const body = getInputValues(".content");
    const post = createCard(title, body);
    initializeCards();
  });
}

window.addEventListener("load", main);
