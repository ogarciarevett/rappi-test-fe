import { connect } from "react-redux";
import { goToRoute } from "../../actions";
import { convertQueryToString } from "../../utils/parser";
import Navbar from "./Navbar";

const mapStateToProps = state => ({
  searchVal: convertQueryToString(state.router.location.search) || ""
});

const mapDispatchToProps = {
  goToRoute
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Navbar);
