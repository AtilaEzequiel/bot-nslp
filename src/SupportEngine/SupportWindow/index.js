import React from 'react';
import { styles } from '../styles';
import ChatForm from './ChatForm';
import EmailForm from './EmailForm';

const SupportWindow = props => {
    return (
        <div
            className='transition-5'
            style={{
                ...styles.supportWindow,
                ...{ opacity: props.visible ? '1' : '0' }
            }}
        >
            {/*EmailForm />*/}
            <ChatForm/>
        </div>
    )
}

export default SupportWindow;