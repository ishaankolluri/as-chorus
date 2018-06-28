import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as actionCreators from "../actions/actionCreators";
import RouteDispatcher from "./RouteDispatcher";

function mapStateToProps(state) {
  return {
    posts: state.posts,
    comments: state.comments
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch);
}

// will surface data in the components as props in Main
// wraps a redux state connector around Main
// injects the data + dispatch functions to whatever component you need via props
const MatchProps = connect(
  mapStateToProps,
  mapDispatchToProps
)(RouteDispatcher);
// this gives Main action functions, posts, comments

export default MatchProps;
