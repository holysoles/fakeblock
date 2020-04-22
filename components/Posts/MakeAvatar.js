import React from 'react';

import Avatar from '@material-ui/core/Avatar';

export default function MakeAvatar(source, user) {

    return (
        <Avatar alt={user} src={source} />
    );
}