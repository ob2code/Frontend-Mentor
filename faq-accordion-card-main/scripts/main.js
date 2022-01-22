let lastId = undefined;
let multi = true;

const toggle = (elementType, elementId) => {
  const element = document.getElementById(elementType + elementId); //ddd

  if (multi && lastId && lastId != elementId) {
    document
      .getElementById("question" + lastId)
      .classList.remove("question" + "--active");
    document
      .getElementById("answer" + lastId)
      .classList.remove("answer" + "--active");
  }

  if (element.classList.contains(elementType + "--active")) {
    element.classList.remove(elementType + "--active");
  } else {
    element.classList.add(elementType + "--active");
  }

  lastId = elementId;
};

const toggleQuestion = (id) => {
  toggle("question", id);
  toggle("answer", id);
};
