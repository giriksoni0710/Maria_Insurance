import React, {Component} from 'react';
import FormControl from '@material-ui/core/FormControl'
import InputLabel from '@material-ui/core/InputLabel'
import Input from '@material-ui/core/Input'
import FormHelperText from '@material-ui/core/FormHelperText'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import { red } from '@material-ui/core/colors';

class Contact extends Component {
    render(){
        return(
            <div class="form">
                    <FormControl>
                    <TextField id="outlined-basic" label="Name" variant="outlined"  />
                    </FormControl>
                    
                    <FormControl>
                    <TextField id="outlined-basic" label="Email" variant="outlined" />
                    <FormHelperText id="my-helper-text">We'll never share your email.</FormHelperText>
                    </FormControl>
                
                    <FormControl style={{maxHeight: '50px'}}>
                    <TextField
                        id="outlined-textarea"
                        label="Message"
                        placeholder="Leave a message...."
                        multiline
                        variant="outlined"
                    />
                    </FormControl>
                    <Button
            variant="contained"
            style={{backgroundColor: 'rgb(110, 167, 233)', color: 'azure', maxWidth: '300px'}}
        >
        Send
      </Button>
      </div>
        )
    }
}

export default Contact