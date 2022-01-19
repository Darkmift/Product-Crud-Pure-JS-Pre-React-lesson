import { makeNewId } from "../util/index.js";

export function productFactory() {
  return {
    id: makeNewId(),
    name: "",
    price: 0,
    category: "" /** from list */,
    image: "",
  };
}
