import { Container, Avatar, TextField, Typography, Button } from '@mui/material';
import CommentOutlinedIcon from '@mui/icons-material/CommentOutlined';
import React, { useState } from 'react';
import { styles } from '../styles';
import ChatButton from '../ChatButton';
import { ConsoleSqlOutlined } from '@ant-design/icons';

const ChatForm = props => {
    const [username, setUsername] = useState('');

    const validUsername = (e) =>{
        console.log(e)
        /*let val = (e.target.value)
        new Promise((seguir) => {
            let tmp = val;
            seguir(tmp)
            console.log(tmp)
        }).then(username => setUsername(username));*/
    }

    return (
        <React.Fragment>
            <Container
                style={{
                    ...styles.chatFormWindow,
                    position: 'absolute',
                    height: '100%',
                    width: '100%',
                    textAlign: 'center'
                }}
            >
                <ChatButton
                    style={{
                        position: 'relative',
                        left: 'calc(50% - 44px)',
                        top: '10%'
                    }}
                />
                <div style={styles.topText}>

                </div>
                <Typography sx={{ ...styles.topText }}>Bienvenidos a nuestro <br />asistente virtual 👋</Typography>
                <TextField id='outlined-basic' label='Por favor, escribí tu nombre' variant='outlined' margin='normal' size='small'
                    style={{
                        top: '20%',
                        width: '70%'
                    }}
                    onChange={(e)=>validUsername()}
                />
                <Button variant='contained' sx={{
                    ...styles.button,                    
                    top: '25%'
                }}>COMENZAR</Button>

            </Container>

        </React.Fragment>
    )
}

export default ChatForm;