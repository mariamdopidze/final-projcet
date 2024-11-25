import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const Addedcart = () => {
  const [isFavorite, setIsFavorite] = useState(false);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [isAdded, setIsAdded] = useState(false);
  const {id} = useParams()

  const navigate = useNavigate();

  const AddedToCart = async () => {
    setLoading(true);
    setSuccess("");

    setIsAdded(true);

    try {
      const response = await fetch("https://fakestoreapi.com/carts", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userId: 5,
          date: "2024-11-18",
          products: [
            { productId: id, quantity: 1 },
          ],
        }),
      });

      if (!response.ok) {
        throw new Error("Something went wrong!");
      }

      const data = await response.json();
      console.log(data);

      localStorage.setItem("cartData", JSON.stringify([
        { productId: id, quantity: 1 },
        { productId: id, quantity: 1 },
        { productId: id, quantity: 1 },
        { productId: id, quantity: 1 },
        { productId: id, quantity: 1 },
      ]));

      setSuccess("Product added to cart successfully!");
      navigate("/cart")
    } catch (error) {
      console.error("Error adding to cart:", error);
      setSuccess("Failed to add product to cart.");
    } finally {
      setLoading(false);
    }
  };

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
  };

  return (
    <div>
      <div className="flex space-x-4 mt-10">
        <button
          onClick={AddedToCart}
          className={`w-[284px] h-[44px] rounded-[4px] font-medium text-sm flex items-center justify-center transition duration-300 ${
            isAdded
              ? "bg-green-500 text-white hover:bg-green-600"
              : "bg-black text-white hover:bg-neutral-800"
          }`}
          disabled={loading}
        >
          {loading ? "Adding..." : isAdded ? "Added" : "Add to cart"}
        </button>

        <button
          onClick={toggleFavorite}
          className={`w-[43px] h-[43px] rounded-[4px] border-2 ${
            isFavorite ? "border-red-500" : "border-neutral-100"
          } flex items-center justify-center transition duration-300`}
          aria-label="Add to favorites"
        >
          <img
            src={isFavorite ? "/images/Add.svg" : "/images/Heart.png"}
            alt="Favorite"
            className="w-[17px] h-[14px]"
          />
        </button>
      </div>

      {success && (
        <p
          className={`mt-3 font-medium text-sm ${
            success.includes("successfully") ? "text-green-500" : "text-red-500"
          }`}
        >
          {success}
        </p>
      )}

      <p className="font-medium text-xs mt-3">
        — Free shipping on orders $100+
      </p>
    </div>
  );
};

export default Addedcart;
