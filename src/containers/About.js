import React, { Component } from 'react'
import { Segment, Divider, Image, Grid, } from 'semantic-ui-react'
import parisPhoto from '../assets/paris.jpg'

export default class AboutSection extends Component {
  render() {
    return (
      <div className='about'>
        <Segment style={{ padding: '0em 0em' }} vertical>
        <Grid container stackable verticalAlign='middle' textAlign='center'>
        <Grid.Column width={10}>
        <Divider
          as='h1'
          className='header'
          horizontal
          style={{ margin: '2em 0em', textTransform: 'uppercase' }}
        >
          About Me
        </Divider>
      </Grid.Column>
          <Grid.Row>
            <Grid.Column width={8}>
              <p style={{ fontSize: '1.33em' }}>
                Fresh Full Stack Web Developer with a previous background consulting at a water resources civil engineering firm. I recently earned a certificate in Full Stack Development from the University of California, Berkeley Extension with newly developed skills in JavaScript, CSS, React.js, and responsive web design. With this I carry skills required in creating innovative online interactive maps and geographic information systems.
            </p>

              <p style={{ fontSize: '1.33em' }}>
                Through my background in consulting, I understand the demands of serving a client, time management, and management skills. Every project requires an organized team and clear communication. I enjoy creating innovative designs that are user friendly and compliment a purpose people may not know they possess. I worked extensively in a group of three thoughout my coding studies where we developed our planning and coding skills and trust in our fellow team memeber. I'm excited to explore new technologies and work in a different environment and team setting!
            </p>
            </Grid.Column>
            <Grid.Column floated='right' width={6}>
            <Image bordered rounded  src={parisPhoto} />
            </Grid.Column>
          </Grid.Row>
          </Grid>
        </Segment>
      </div >
    )
  }
}