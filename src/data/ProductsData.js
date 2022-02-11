import chocolate from "../assets/chocolate.webp";
import headphones from "../assets/headphones.webp";
import macbook from "../assets/macbook.webp";
import pizza from "../assets/pizza.webp";
const ProductsData = [
  {
    id: 0,
    title: "Dairy Chocolate",
    image: chocolate,
    price: 5,
    count: 1,
    addQty: function () {
      return ++this.count;
    }
  },

  {
    id: 1,
    title: "Headphones",
    image: headphones,
    price: 25,
    count: 1,
    addQty: function () {
      return ++this.count;
    }
  },

  {
    id: 2,
    title: "Macbook 13inch",
    image:macbook,
    price: 680,
    count: 1,
    addQty: function () {
      return ++this.count;
    }
  },
  {
    id: 3,
    title: "Macbook 14inch",
    image:macbook,
    price: 680,
    count: 1,
    addQty: function () {
      return ++this.count;
    }
  },
  {
    id: 4,
    title: "Macbook 16inch",
    image:macbook,
    price: 680,
    count: 1,
    addQty: function () {
      return ++this.count;
    }
  },

  {
    id: 5,
    title: "Take-away Pizza",
    image:pizza,
    price: 10,
    count: 1,
    addQty: function () {
      return ++this.count;
    }
  },
  {
    id: 6,
    title: "Fjallraven Backpack",
    price: 109.95,
    count: 1,
    image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    addQty: function () {
      return ++this.count;
    }
  },
];

export default ProductsData;