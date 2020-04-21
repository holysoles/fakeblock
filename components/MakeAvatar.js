import React from 'react';

import Avatar from '@material-ui/core/Avatar';

export default function MakeAvatar(source) {

    return (
        <Avatar alt="Profile Picture" src={source} />
    );
}