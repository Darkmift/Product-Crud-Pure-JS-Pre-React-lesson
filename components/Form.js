import { productFactory } from "../Model/Product.js";
import { logToScreen } from "../util/index.js";
import { state } from "../state.js"

export const FormComponent = {
  render: function (productObj) {
    const ProductForm = document.getElementById("productForm");

    const formMode = productObj ? 'Edit' : 'Add';

    let formTitle = /* html */ `<h1>Edit Product</h1>`;
    let addOrEditTxt = "Edit Product";

    if (!productObj) {
      formTitle = /* html */ `<h1>Add Product</h1>`;
      productObj = productFactory();
      addOrEditTxt = "Add Product";
    }

    const formHtml = /* html */ `
        ${formTitle}
        <h5>ID:${productObj.id}</h5>
        <div class="input-group">
            <label for="pName">Name</label>
            <input type="text" id="pName" value="${productObj.name}" />
        </div>
        <div class="input-group">
            <label for="pPrice">Price</label>
            <input type="text" id="pPrice" value="${productObj.price}"/>
        </div>
        <div class="input-group">
            <label for="pImage">Image</label>
            <input type="text" id="pImage" value="${productObj.image}"/>
        </div>
        <button id="submitBtn">${addOrEditTxt}</button>
    `;
    ProductForm.innerHTML = formHtml;

    /**EDIT/ADD BUTTON clicked LOGIC */

    const submitHandler = () => {

      const pName = document.getElementById("pName").value || productObj.name;
      const pPrice =
        document.getElementById("pPrice").value || productObj.price;
      const pImage =
        document.getElementById("pImage").value || productObj.image;

      let addOrEditProduct = formMode === 'Add' ? productFactory() : productObj;
      addOrEditProduct = {
        ...addOrEditProduct,
        name: pName,
        price: pPrice,
        image: pImage,
      };


      if (formMode === 'Add') {
        /**ADD LOGIC */
        this.addProduct(state.products, addOrEditProduct);
        return;
      }

      addOrEditProduct.id = productObj.id

      this.editProduct(state.products, addOrEditProduct);
      /***EDIT */
    }

    document
      .getElementById("submitBtn")
      .addEventListener("click", submitHandler);
  },

  addProduct: function (products, newProduct) {
    products.push(newProduct);
    logToScreen({ products })
  },

  editProduct: function (products, patchedProduct) {
    const targetProductIdx = products.findIndex(function (product) {
      return product.id === patchedProduct.id;
    });

    products[targetProductIdx] = patchedProduct;
    logToScreen({ products });
  },
};
