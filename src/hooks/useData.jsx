import { useState } from "react";

function useData() {
  const content = require("../db/data.json");

  const [menu, setMenu] = useState(content.menu);
  const [products, setProducts] = useState(content.products);

  return {
    menu,
    products,
  };
}

export default useData;
