import React, { useState } from 'react';
import { styles } from './styles';
import { Avatar } from '@mui/material';
import CommentOutlinedIcon from '@mui/icons-material/CommentOutlined';

const ChatButton = props => {
    const [hovered, setHovered] = useState(false);

    return (
        <React.Fragment>
        <div style={props.style}>
            <div
                className='transition-3'
                style={{
                    ...styles.avatarHello,
                    ...{ opacity: hovered ? '1' : '0' }
                }}
            >
                Hola 👋, puedo ayudarte?
            </div>

            <div
                className='transition-3'
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
                onClick={() => { props.onClick && props.onClick() }}
            >
                <Avatar
                    sx={{
                        ...styles.chatButton,
                        ...{ border: hovered ? '1px solid #f9f0ff' : '4px solid #f9f0ff' },
                        width: 75,
                        height: 75,
                        backgroundColor: '#f5bb83'
                    }}>
                    <CommentOutlinedIcon fontSize='large'/>
                </Avatar>
            </div>

        </div>
        </React.Fragment>
    )
}
export default ChatButton;