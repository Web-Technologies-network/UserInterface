import React, { Fragment } from 'react';
import UserProfile from '../../components/Dashboard/views/UserProfile/UserProfile';
import { RootState } from '../../store';
import { connect } from 'react-redux';

const ProfileView = () => (
  <Fragment>
    <UserProfile />
  </Fragment>
);

const mapStateToProps = (state: RootState) => ({});

const mapDispatchToProps = {};

export const Profile = connect(mapStateToProps, mapDispatchToProps)(ProfileView);
