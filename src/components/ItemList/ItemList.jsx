import React from 'react';
import { Link } from 'react-router-dom';
import { props } from './ItemList.props';
import styles from './ItemList.module.scss';

const ItemList = props => (
  <Link to={`products/${props.id}`} className={styles.ItemListContainer}>
    ProductItem
  </Link>
);

ItemList.propTypes = props;

export default ItemList;
