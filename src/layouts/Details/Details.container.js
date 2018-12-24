import { connect } from "react-redux";
import { fetchDetails } from "../../actions";
import Details from "./Details";

const mapStateToProps = state => ({
  details: state.app.details,
  loading: state.app.loading,
  error: state.app.error
});

const mapDispatchToProps = {
  fetchDetails
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Details);
