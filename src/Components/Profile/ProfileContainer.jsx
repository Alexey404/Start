import axios from "axios";
import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import { setUserProfile } from "../../Redux/profile-reducer";
import Profile from "./profile";

class ProfileContainer extends React.Component {
  componentDidMount() {
    let userId = this.props.match.params.userId;
    debugger;
    axios
      .get(`https://social-network.samuraijs.com/api/1.0/profile/2` )
      .then((Response) => {
        this.props.setUserProfile(Response.data);
      });
  }

  render() {
    return <Profile {...this.props} profile={this.props.profile} />;
  }
}
let mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
});

let ProfileContainerUrl = withRouter(ProfileContainer);

export default connect(mapStateToProps, { setUserProfile })(
  ProfileContainerUrl
);
