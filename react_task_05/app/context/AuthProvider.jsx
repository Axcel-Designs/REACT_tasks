"use client";
import React, { useState, createContext, useContext, useEffect } from "react";

const todoContext = createContext();

export default function AuthProvider({ children }) {
  const [products, setProducts] = useState([]);
  const [target, setTarget] = useState({
    newUserId: 0,
    newTitle: "",
    newCompleted: false,
  });

  useEffect(() => {
    async function getData() {
      try {
        const res = await fetch("https://jsonplaceholder.typicode.com/todos");
        if (!res.ok) throw new Error("data couldnt be fetched");
        const data = await res.json();
        setProducts(data);
      } catch (error) {
        console.error("Failed to fetch products:", error);
      }
    }
    getData();
  }, []);

  function onTarget(e) {
    setTarget((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function addProduct(id) {
    const newId =
      products.length > 0 ? products[products.length - 1].id + 1 : 1;
    const newProduct = {
      userId: Number(target.newUserId),
      id: newId,
      title: target.newTitle,
      completed: target.newCompleted,
    };
    setProducts([...products, newProduct]);
    setTarget({ newUserId: 0, newTitle: "", newCompleted: false });
  }

  function updateProduct(id, newtitle) {
    setProducts(
      products.map((item) =>
        item.id == id ? { ...item, title: newtitle } : item
      )
    );
  }

  function delProduct(id) {
    setProducts(products.filter((item) => item.id !== id));
  }

  function filterProduct() {}

  const value = {
    target,
    products,
    onTarget,
    addProduct,
    delProduct,
    filterProduct,
    updateProduct,
  };
  return <todoContext.Provider value={value}>{children}</todoContext.Provider>;
}

export function useTodo() {
  return useContext(todoContext);
}
