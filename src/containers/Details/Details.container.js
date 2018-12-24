import { connect } from 'react-redux';
import { fetchProducts } from '../../actions';
import Details from './Details';

const mapStateToProps = state => ({
    details: state.app.details,
    loading: state.app.loading,
    error: state.app.error,
});

const mapDispatchToProps = {
    fetchProducts,
};

export default connect(
    null,
    null,
)(Details);
