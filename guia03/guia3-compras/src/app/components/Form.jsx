"use client"
import React, { useState } from 'react';
import Product from './Product';
import styles from "../page.module.css";

const Form = () => {
  const [products, setProducts] = useState([]);
  const [product, setProduct] = useState({ name: '', brand: '', quantity: 1, price: '' });

  const handleChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  const handleClick = () => {
    if (!product.name.trim() || !product.brand.trim() || !product.price.trim()) {
      alert('Todos los campos son obligatorios');
      return;
    }
    setProducts([...products, { ...product, quantity: Number(product.quantity), price: Number(product.price) }]);
    setProduct({ name: '', brand: '', quantity: 1, price: '' });
  };

  const deleteProduct = (index) => {
    const newProducts = [...products];
    newProducts.splice(index, 1);
    setProducts(newProducts);
  };

  const totalCost = products.reduce((sum, p) => sum + p.quantity * p.price, 0);

  return (
    <>
      <form onSubmit={(e) => e.preventDefault()}>
        <label>Nombre del producto</label>
        <input type="text" name="name" value={product.name} onChange={handleChange} className={styles.form_input} />
        <label>Marca</label>
        <input type="text" name="brand" value={product.brand} onChange={handleChange} className={styles.form_input} />
        <label>Cantidad</label>
        <input type="number" name="quantity" value={product.quantity} onChange={handleChange} className={styles.form_input} />
        <label>Precio</label>
        <input type="number" name="price" value={product.price} onChange={handleChange} className={styles.form_input} />
        <button className={styles.form_button} onClick={handleClick}>Agregar Producto</button>
      </form>

      {products.map((p, index) => (
        <Product key={index} product={p} index={index} deleteProduct={deleteProduct} />
      ))}

      <h3>Total: ${totalCost.toFixed(2)}</h3>
    </>
  );
}

export default Form;
