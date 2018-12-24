import React from 'react';
import { ClipLoader } from 'react-spinners';
import styles from './Loading.module.scss';

const Loading = ({ loading }) => (
  <div className={styles.Loading}>
    <ClipLoader
      sizeUnit={'px'}
      size={150}
      color={'#3483fa'}
      loading={loading}
    />
  </div>
);

export default Loading;
