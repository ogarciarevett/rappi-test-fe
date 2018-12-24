import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { props } from './Navbar.props';
import styles from './Navbar.module.scss';
import logo from '../../assets/Logo_ML.png';
import icSearch from '../../assets/ic_Search.png';

class NavBar extends Component {
  state = {
    queryVal: this.props.searchVal || '',
    placeHolderVal: 'Busca productos!',
  };

  handleOnChange = e => {
    const { value } = e.target;
    this.setState({ queryVal: value });
  };

  handleOnSubmit = e => {
    e.preventDefault();
    const route = `/items?search=${this.state.queryVal}`;
    this.props.goToRoute(route);
  };

  render() {
    let errorClass,
      errorMsj = null;
    if (this.props.error && !!this.props.error.response) {
      errorClass = styles.errorSearch;
      errorMsj =
        'Hubo un error con la comunicacion del server, intentelo mas tarde';
    }
    if (
      this.props.error &&
      this.props.error.response &&
      this.props.error.response.status === 400
    ) {
      errorClass = styles.errorSearch;
      errorMsj = 'Por favor, coloque un valor valido para buscar';
    }
    return (
      <div className={`${styles.NavBar} ${this.props.className}`}>
        <Link to='/'>
          <img src={logo} className={styles.logo} alt='logo' />
        </Link>
        <form className={styles.searchForm} onSubmit={this.handleOnSubmit}>
          <input
            onChange={this.handleOnChange}
            className={`${styles.searchInput} ${errorClass}`}
            value={this.state.queryVal}
            placeholder={errorMsj || this.state.placeHolderVal}
          />
          <button type='submit' className={styles.searchButton}>
            <img
              src={icSearch}
              alt='icon-search'
              className={styles.iconSearch}
            />
          </button>
        </form>
      </div>
    );
  }
}

NavBar.propTypes = props;

export default NavBar;
