import React from "react";
import { connect } from "react-redux";
import { getAuth } from "../../Redux/auth-reducer";
import Header from "./Header";

class HeaderContainer extends React.Component {
  componentDidMount() {
    this.props.getAuth();
  }

  render() {
    return (
      <div>
        <Header {...this.props} />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  resultCode: state.auth.resultCode,
  login: state.auth.data.login,
});

export default connect(mapStateToProps, { getAuth })(HeaderContainer);
