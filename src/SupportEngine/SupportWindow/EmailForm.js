import React, { useState } from "react";
import { styles } from '../styles';
import { LoadingOutlined } from '@ant-design/icons';
import Avatar from "../Avatar";

const EmailForm = props => {
    const [userName, setUserName] = useState('');
    const [loading, setLoading] = useState(false);

    function handleSubmit(event) {
        event.preventDefault();
        setLoading(true);
        console.log('Sending email', userName)
    }

    return (
        <div
            style={{
                ...styles.emailFormWindow,
                ...{
                    height: '100%',
                    opacity: '1'
                }
            }}
        >
            <div style={{ height: '0px' }}>
                <div style={styles.stripe} />
            </div>

            <div
                className='transition-5'
                style={{
                    ...styles.loadingDiv,
                    ...{
                        zIndex: loading ? '10' : '-1',
                        opacity: loading ? '0.33' : '0'
                    }
                }}
            />
            <LoadingOutlined
                className='transition-5'
                style={{
                    ...styles.loadingIcon,
                    ...{
                        zIndex: loading ? '10' : '-1',
                        opacity: loading ? '1' : '0',
                        fontSize: '82px',
                        top: 'calc(50% - 41px)',
                        left: 'calc(50% - 41px)'
                    }
                }}
            />

            <div style={{ position: 'absolute', height: '100%', width: '100%', textAlign: 'center' }}>
                <Avatar
                    style={{
                        position: 'relative',
                        left: 'calc(50% - 44px)',
                        top: '10%'
                    }}
                />
                <div style={styles.topText}>
                    Bienvenidos a nuestro <br /> chat de ayuda 👋
                </div>

                <form
                    onSubmit={e => handleSubmit(e)}
                    style={{ position: 'relative', width: '100%', top: '19.75%' }}
                >
                    <input
                        style={styles.emailInput}
                        onChange={e => setUserName(e.target.value)}
                        placeholder='Escriba su nombre'
                    />
                </form>

                <div style={styles.bottomText}> 
                    Ingrese su nombre <br/>para comenzar.
                </div>
                
            </div>
        </div>
    )
}

export default EmailForm;