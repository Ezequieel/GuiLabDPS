import React from 'react';
import styles from "../page.module.css";

const Product = ({ product, index, deleteProduct }) => {
  return (
    <div className={styles.list}>
      <h3 className='Titulo3'>{product.name} - {product.brand}</h3>
      <p>Cantidad: {product.quantity} | Precio: ${product.price.toFixed(2)}</p>
      <button className={styles.btn_delete} onClick={() => deleteProduct(index)}>X</button>
    </div>
  );
};

export default Product;
