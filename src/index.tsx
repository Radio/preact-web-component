import register from "preact-custom-element";

import { ProductList } from "./ProductList";

register(ProductList, "product-list", ["title", "description", "amount"], { shadow: true });
