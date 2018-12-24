import { connect } from "react-redux";
import { fetchProducts } from "../../actions";
import { convertQueryToString } from "../../utils/parser";
import List from "./List";

const mapStateToProps = state => ({
  items: state.app.payload ? state.app.payload.items : [],
  loading: state.app.loading,
  searchVal: convertQueryToString(state.router.location.search)
});

const mapDispatchToProps = {
  fetchProducts
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(List);
