import { log } from "./util/index.js";
import { FormComponent } from "./components/Form.js";

import { state } from "../state.js";

const formHandler = FormComponent;
formHandler.render();
// formHandler.render({
//     id: "agsdga",
//     name: "Milk",
//     price: 22,
//     category: "" /** from list */,
//     image: "wsbsdhgfb",
//   })

document.getElementById("productForm").addEventListener("submit", function (e) {
  e.preventDefault();
});

document.getElementById("editMode").addEventListener("click", function (e) {
  formHandler.render(state.products[0]);
});

/*
const pName = document.getElementById("pName").value || productObj.name;
   let formMode = productObj?'Edit':'Add';

let pName;
let inputNameValue = document.getElementById("pName").value; //""-null

if (inputNameValue) {
  pName = inputNameValue;
} else {
  pName = productObj.name;
}
*/
/*
function addNormal(n1, n2) {
  return n1 + n2;
}

const addArrow = (n1, n2) => n1 + n2;

function filter(product, productId) {
  return product.id === productId;
}

const arrowFilter = (product, productId) => product.id === productId;

function numPlusFive(num) {
  return num + 5;
}

const arrowNumPlusFive = (num) => num + 5;
*/
// targetProduct = products.find(filter)

// function fff() {
//   function logthis() {
//     console.log(this);
//   }
// }
