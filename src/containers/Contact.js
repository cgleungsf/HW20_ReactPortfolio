import React from "react";
import { Grid, Divider, Icon } from 'semantic-ui-react';

function Contact() {
  return (
    <div className='contact'>
        <Grid container stackable verticalAlign='middle' textAlign='center'>
            <Grid.Column width={10}>
              <Divider
                as='h1'
                className='header'
                horizontal
                style={{ margin: '2em 0em', textTransform: 'uppercase' }}
              >
                Contact
              </Divider>
              <p style={{ fontSize: '1.33em', marginBottom: '5em'}}>

              <Icon name = 'linkedin'/>
                <Icon name = 'github'/>
                Thanks for coming by and checking out my website!
            </p>
            </Grid.Column>
        </Grid>
    </div>
  );
}

export default Contact;
