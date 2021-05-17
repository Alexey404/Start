import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router";

let mapStateToPropsForRedirect = (state) => ({
  resultCode: state.auth.resultCode,
});

export const withAuthRedirect = (Component) => {
  class RedirectComponent extends React.Component {
    render() {
      if (this.props.resultCode === 1) {
        return <Redirect to="/login" />;
      }
      return <Component {...this.props} />;
    }
  }
  let ConnectedAuthRedirectComponent = connect(mapStateToPropsForRedirect)(
    RedirectComponent
  );
  return ConnectedAuthRedirectComponent;
};

export default withAuthRedirect;
