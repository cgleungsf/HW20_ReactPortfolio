import React from "react";
import { Grid, Divider, Card, Image } from 'semantic-ui-react';
import project1 from '../assets/port_project1.PNG'
import project2 from '../assets/port_project2.PNG'
import project3 from '../assets/port_project3.PNG'

export default (props) => (
  <div className='portfolio'>
    <Grid container stackable verticalAlign='middle' textAlign='center'>
      <Grid.Column width={10}>
        <Divider
          as='h1'
          className='header'
          horizontal
          style={{ margin: '2em 0em', textTransform: 'uppercase' }}
        >
          Portfolio
        </Divider>
      </Grid.Column>
      <Grid.Row columns={3} width={10}>
        <Grid.Column>
          <Card centered >
            <Image
              src={project1}
              as='a'
              size='medium'
              href='https://emmbra.github.io/project1/'
              target='_blank'
              alt='project 1 screenshot'
              style={{
                borderRadius: '0rem .0rem 0 0!important',
                overflow: 'hidden',
                minHeight: '250px',
                maxHeight: '250px',
              }}
            />
            <Card.Content
              style={{
                borderRadius: '0rem .0rem 0 0!important',
                overflow: 'hidden',
                minHeight: '180px',
                maxHeight: '180px',
              }}>
              <Card.Header>Run Wild - Trail Run Finder</Card.Header>
              <Card.Meta> Created in April 2020</Card.Meta>
              <Card.Description>
                Web application created to assist users in finding running trails in their specified cities with the ability to plan ahead with the current weather and a five day forecast.
              </Card.Description>
            </Card.Content>
          </Card>
        </Grid.Column>
        <Grid.Column>
          <Card centered >
            <Image
              src={project2}
              as='a'
              size='medium'
              href='https://eb-movie-rating-app.herokuapp.com/'
              target='_blank'
              alt='project 2 screenshot'
              style={{
                borderRadius: '0rem .0rem 0 0!important',
                overflow: 'hidden',
                minHeight: '250px',
                maxHeight: '250px',
              }}
            />
            <Card.Content
              style={{
                borderRadius: '0rem .0rem 0 0!important',
                overflow: 'hidden',
                minHeight: '180px',
                maxHeight: '180px',
              }}>
              <Card.Header>Fresh Lemons</Card.Header>
              <Card.Meta> Created in May 2020</Card.Meta>
              <Card.Description>
                Web application created to assist users in finding and viewing IMDB, Rottem Tomatoes, and MetaCritic ratings while allowing users to leave a rating themselves.
              </Card.Description>
            </Card.Content>
          </Card>
        </Grid.Column>
        <Grid.Column>
          <Card centered >
            <Image
              src={project3}
              as='a'
              size='medium'
              href='https://runtothesun.herokuapp.com/'
              target='_blank'
              alt='project 3 screenshot'
              style={{
                borderRadius: '0rem .0rem 0 0!important',
                overflow: 'hidden',
                minHeight: '250px',
                maxHeight: '250px',
              }}
            />
            <Card.Content
              style={{
                borderRadius: '0rem .0rem 0 0!important',
                overflow: 'hidden',
                minHeight: '180px',
                maxHeight: '180px',
              }}>
              <Card.Header>Run with Friends</Card.Header>
              <Card.Meta> Created in June 2020</Card.Meta>
              <Card.Description>
                Web application created to challenge teams of runners with running events and run logs.
              </Card.Description>
            </Card.Content>
          </Card>
        </Grid.Column>
      </Grid.Row>

    </Grid>
  </div>
);


