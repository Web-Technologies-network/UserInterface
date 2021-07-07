import React, { useState } from 'react';
import UserProfile from '../../components/Dashboard/views/UserProfile/UserProfile';
import { RootState } from '../../store';
import { v4 } from 'uuid';
import { connect, ConnectedProps } from 'react-redux';

import { Profile, addProfile } from '../../store/Orm/profile';

const ProfileView = ({ addProfile }: connectedProps) => {
  const [profile, setProfile] = useState<Profile>();
  const onChange = (profile: Profile) => {
    setProfile(profile);
  };
  return (
    <UserProfile
      onChange={onChange}
      profile={profile}
      onSubmit={(profile: Profile) => addProfile({ ...profile, id: v4() })}
    />
  );
};

const mapStateToProps = (state: RootState) => ({});

const mapDispatchToProps = { addProfile };
const connector = connect(mapStateToProps, mapDispatchToProps);
type connectedProps = ConnectedProps<typeof connector>;
export const ProfileContainer = connector(ProfileView);
