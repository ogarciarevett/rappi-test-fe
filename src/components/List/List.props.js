import PropTypes from "prop-types";

export const props = {
  className: PropTypes.string,
  fetchSearch: PropTypes.func,
  loading: PropTypes.bool,
  location: PropTypes.object,
  match: PropTypes.object,
  history: PropTypes.object
};
