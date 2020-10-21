import React, { Fragment, useState } from 'react';
import UserProfile from '../../components/Dashboard/views/UserProfile/UserProfile';
import { RootState } from '../../store';
import { v4 } from 'uuid';
import { connect, useDispatch } from 'react-redux';

import { Profile, addProfile } from '../../store/profile';

const ProfileView = () => {
  const [profile, setProfile] = useState<Profile>();
  const dispatch = useDispatch();
  const onChange = (profile: Profile) => {
    setProfile(profile);
  };
  return (
    <Fragment>
      <UserProfile
        onChange={onChange}
        profile={profile}
        onSubmit={(profile: Profile) => dispatch(addProfile({ ...profile, id: v4() }))}
      />
    </Fragment>
  );
};

const mapStateToProps = (state: RootState) => ({});

const mapDispatchToProps = { addProfile };

export const ProfileContainer = connect(mapStateToProps, mapDispatchToProps)(ProfileView);
