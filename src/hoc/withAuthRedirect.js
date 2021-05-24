<<<<<<< HEAD
import React from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router'

let mapStateToPropsForRedirect = (state) => ({
  isAuth: state.auth.isAuth,
})
=======
import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router";

let mapStateToPropsForRedirect = (state) => ({
  resultCode: state.auth.resultCode,
});
>>>>>>> 5e5a38064b815b6bb33114e1c98dd42823ca3da1

export const withAuthRedirect = (Component) => {
  class RedirectComponent extends React.Component {
    render() {
<<<<<<< HEAD
      if (!this.props.isAuth) {
        return <Redirect to='/' />
      }
      return <Component {...this.props} />
=======
      if (this.props.resultCode === 1) {
        return <Redirect to="/login" />;
      }
      return <Component {...this.props} />;
>>>>>>> 5e5a38064b815b6bb33114e1c98dd42823ca3da1
    }
  }
  let ConnectedAuthRedirectComponent = connect(mapStateToPropsForRedirect)(
    RedirectComponent
<<<<<<< HEAD
  )
  return ConnectedAuthRedirectComponent
}

export default withAuthRedirect
=======
  );
  return ConnectedAuthRedirectComponent;
};

export default withAuthRedirect;
>>>>>>> 5e5a38064b815b6bb33114e1c98dd42823ca3da1
