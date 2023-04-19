import React from 'react';
import { Avatar } from '@mantine/core';
import avatars from '../../constants/avatars';

/**
 * - avatarId 목록 : /constants/avatars
 * @param {{avatarId: string}} param
 */

const ProfileAvatar = ({ avatarId }) => <Avatar src={avatars[avatarId]} alt="avatarImage" />;

export default ProfileAvatar;
