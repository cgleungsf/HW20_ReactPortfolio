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
          <p style={{ fontSize: '1.33em', marginBottom: '5em' }}>
            <a href="https://www.linkedin.com/in/christinaleung/" target="_blank" rel='noopener noreferrer'> <Icon name='linkedin' /></a>
            <a href="https://github.com/cgleungsf" target="_blank" rel='noopener noreferrer'> <Icon name='github' /></a>
                Thanks for coming by and checking out my website!
            </p>
        </Grid.Column>
      </Grid>
    </div>
  );
}

export default Contact;
