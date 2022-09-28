import React, { useState } from 'react';
import { styles } from './styles';

const Avatar = props => {
    const [hovered, setHovered] = useState(false);

    return (
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
                onClick={() => {props.onClick && props.onClick(); console.log(props)}}
                style={{
                    ...styles.chatWithMeButton,
                    ...{ border: hovered ? '1px solid #f9f0ff' : '4px solid #f9f0ff' }
                }}
            />

        </div>
    )
}
export default Avatar;