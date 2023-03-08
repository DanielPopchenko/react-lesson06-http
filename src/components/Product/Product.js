import React from 'react';
import PropTypes from 'prop-types';
// import './Product.css';
import styled from 'styled-components';
import styles from './Product.module.css';

const QuantityValue = styled.span`
  font-weight: 500;
  color: ${(props) => (props.inStock ? 'green' : 'red')};
`;

// Деструктуризировали обьект
function Product({ imgUrl, name, price, quantity }) {
  const isInStock = quantity < 50;
  // 2 вариант деструктуризации обьекта
  // const { imgUrl, name, price } = props;

  // ! vanilla css
  // const quantityClasses = ['Product-quantity', isInStock ? 'available' : 'not-available'];

  // const quantityClasses = [isInStock ? styles.available : styles.notAvailable];

  return (
    <div className={styles.container}>
      <img src={imgUrl} alt={name} width="640" />
      <h2 className={styles.name}>
        {name}
        {/* {3 > 2 ? 'jsx выражение если true' : 'jsx выражение если false'} */}
      </h2>
      <p>Price: {price}$</p>

      {/* У нас всегда будет p а его содержание будет менятся по условию */}
      {/* <span className={quantityClasses}>{isInStock ? 'Few left.' : 'In stock.'}</span> */}

      {/* Styled components */}
      {/* прокинули пропс, названиеПропа={значение} */}
      <QuantityValue inStock={isInStock}>{isInStock ? 'In stock.' : 'Few left. '}</QuantityValue>
      <button className={styles.primaryButton} type="button">
        Add to cart
      </button>
      <button className={styles.secondaryButton} type="button">
        Secondary button
      </button>
    </div>
  );
}

// ! дефолтные пропсы на случай если не пришла картинка, мы сделали заглушку
Product.defaultProps = {
  imgUrl: 'https://static1.cargurus.com/gfx/reskin/no-image-available.jpg?io=true&format=jpg&auto=webp',
};

// console.log(PropTypes);

Product.propTypes = {
  imgUrl: PropTypes.string,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};

export default Product;
