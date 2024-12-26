import React, { useState, useEffect } from "react";
import Discount from "../components/Discount";
import Header from "../components/Header";
import Footer from "../components/Footer";

const CartItem = ({ product, quantity, increment, decrement, remove }) => (
  <div className="h-[80px] w-[628px] mt-12 flex items-center justify-between">
    <div className="flex">
      <div className="w-[80px] h-[80px] rounded-[4px] flex justify-center items-center bg-[#F6F6F6]">
        <img src={product.image} alt="Product Image" />
      </div>

      <div className="ml-4">
        <h4 className="mb-2 font-medium text-sm">{product.title}</h4>
        <div className="flex items-center">
          <p className="mr-2 font-medium text-xs">Color:</p>
          <div
            className="w-3 h-3 rounded-full"
            style={{ backgroundColor: product.color }}
          ></div>
          <p className="font-medium text-xs"> - Size: {product.size}</p>
        </div>
      </div>
    </div>

    <div className="flex gap-[18px] items-center">
      <p className="font-medium text-sm">
        ${(product.price * quantity).toFixed(2)}
      </p>
      <div className="flex items-center border rounded-[4px] bg-neutral-100 w-[107px] h-[40px]">
        <button
          onClick={decrement}
          className="w-4 h-4 text-lg text-black flex items-center justify-center ml-4"
        >
          -
        </button>
        <span className="w-full text-center">{quantity}</span>
        <button
          onClick={increment}
          className="w-4 h-4 text-lg text-black flex items-center justify-center mr-4"
        >
          +
        </button>
      </div>
      <div
        onClick={remove}
        className="bg-[#F6F6F6] w-10 h-10 rounded-[4px] flex justify-center items-center cursor-pointer"
      >
        <img src="/images/X.png" alt="Remove" />
      </div>
    </div>
  </div>
);

const Cart = () => {
  const [quantities, setQuantities] = useState([]);
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const getAllProductsAndUserCart = async () => {
    setIsLoading(true);
    try {
      const productsRes = await fetch("https://fakestoreapi.com/products");
      const productsData = await productsRes.json();

      const cartRes = await fetch("https://fakestoreapi.com/carts/5");
      const cartProducts = await cartRes.json();

      const cartProductsData = cartProducts.products.map((cartItem) => {
        const product = productsData.find((p) => p.id === cartItem.productId);
        return { ...product, quantity: cartItem.quantity };
      });

      setProducts(cartProductsData);
      setQuantities(cartProductsData.map((item) => item.quantity));
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getAllProductsAndUserCart();
  }, []);

  const increment = (index) => {
    setQuantities((prevQuantities) =>
      prevQuantities.map((q, i) => (i === index ? q + 1 : q))
    );
  };

  const decrement = (index) => {
    setQuantities((prevQuantities) =>
      prevQuantities.map((q, i) => (i === index && q > 1 ? q - 1 : q))
    );
  };

  const removeItem = (index) => {
    setProducts((prevProducts) => prevProducts.filter((_, i) => i !== index));
    setQuantities((prevQuantities) =>
      prevQuantities.filter((_, i) => i !== index)
    );
  };

  const calculateTotal = () => {
    return products.reduce((total, product, index) => {
      return total + product.price * quantities[index];
    }, 0);
  };

  return (
    <div>
      <Discount />
      <Header />

      <div className="h-[160px] bg-[#F6F6F6]">
        <div className="mx-auto max-w-[1116px]">
          <h3 className="text-2xl font-bold pt-12">Cart</h3>
          <div className="flex flex-row items-center gap-2.5">
            <p className="text-sm font-medium">Ecommerce</p>
            <img src="images/Chevron.png" alt="img" />
            <p className="text-sm font-medium">Cart</p>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-[1116px]">
        <div className="flex flex-row">
          <div>
            <h6 className="text-base font-semibold pt-20">Your Cart</h6>
            {isLoading && <p className="text-2xl text-red-600">Loading...</p>}
            <hr className="mt-[18px] w-[628px] bg-[#E9E9EB]" />

            {products.map((product, index) => (
              <CartItem
                key={index}
                product={product}
                quantity={quantities[index]}
                increment={() => increment(index)}
                decrement={() => decrement(index)}
                remove={() => removeItem(index)}
              />
            ))}
          </div>

          <div className="w-[341px] h-[430px] flex flex-col justify-evenly p-[20px] border-2 border-[#E6E7E8] mt-[56px] ml-[122px] rounded-[4px]">
            <h4 className="text-[#0E1422] text-[16px] font-[600]">
              Order Summary
            </h4>
            <div className="flex flex-row justify-between">
              <div className="flex flex-col text-[#5C5F6A] text-[14px] gap-[15px]">
                <span>Subtotal</span>
                <span>Shipping</span>
                <span>Tax</span>
              </div>
              <div className="flex flex-col text-[14px] gap-[15px]">
                <span>${calculateTotal().toFixed(2)}</span>
                <span>FREE</span>
                <span>${(calculateTotal() * 0.05).toFixed(2)}</span>
              </div>
            </div>
            <div className="w-full bg-[#E6E7E8] h-[1px] mx-auto"></div>
            <div className="flex flex-row justify-between">
              <span>Total</span>
              <span>
                ${(calculateTotal() + calculateTotal() * 0.05).toFixed(2)}
              </span>
            </div>
            <a href="/checkout">
              <button className="w-full bg-[#0E1422] px-[24px] py-[12px] text-white rounded-[4px]">
                Checkout
              </button>
            </a>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Cart;
