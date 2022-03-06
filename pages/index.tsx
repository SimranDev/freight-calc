import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { useState } from "react";

const Home = () => {
  const [freights, setFreights] = useState([{ quantity: 0, weight: 0 }]);
  const [quantity, setQuantity] = useState(0);
  const [weight, setWeight] = useState(0);
  return (
    <div className="flex flex-col items-center justify-center h-screen gap-4 bg-blue-300 text-cyan-900">
      <h1 className="text-2xl font-bold ">Freight Calculator</h1>
      {freights.map((item, i) => (
        <div className="flex gap-2" key={i}>
          <div className="flex flex-col gap-2">
            <label htmlFor="quantity">Quantity</label>
            <input
              id="quantity"
              value={item.quantity}
              type="number"
              onChange={(e) =>
                setFreights(
                  freights.map((item, index) =>
                    index === i
                      ? { ...item, quantity: parseInt(e.target.value) }
                      : item
                  )
                )
              }
              className="px-1"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="descrition">Description</label>
            <select name="descrition" id="descrition">
              <option value="volvo">Pallete</option>
              <option value="saab">Skid</option>
              <option value="mercedes">IBC</option>
              <option value="audi">Timber</option>
            </select>
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="weight">Weight (kgs) ea</label>
            <input
              id="weight"
              value={quantity}
              type="number"
              onChange={(e) => setQuantity(parseInt(e.target.value))}
              className="px-1"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="length">Length(m) ea</label>
            <input
              id="length"
              value={quantity}
              type="number"
              onChange={(e) => setQuantity(parseInt(e.target.value))}
              className="px-1"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="width">Width(m) ea</label>
            <input
              id="width"
              value={quantity}
              type="number"
              onChange={(e) => setQuantity(parseInt(e.target.value))}
              className="px-1"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="height">Height(m) ea</label>
            <input
              id="height"
              value={quantity}
              type="number"
              onChange={(e) => setQuantity(parseInt(e.target.value))}
              className="px-1"
            />
          </div>
          <div className="flex w-10 gap-1">
            {i === freights.length - 1 && (
              <button
                className="h-10 px-2 mt-auto text-white bg-orange-500 rounded-xl hover:bg-opacity-80 active:bg-opacity-0"
                onClick={() =>
                  setFreights([...freights, { quantity: 0, weight: 0 }])
                }
              >
                Add
              </button>
            )}
            {i > 0 && (
              <button
                className="h-10 px-2 mt-auto text-white bg-red-500 rounded-xl hover:bg-opacity-80 active:bg-opacity-0"
                onClick={() =>
                  setFreights(freights.filter((_item, index) => index !== i))
                }
              >
                Remove
              </button>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Home;
