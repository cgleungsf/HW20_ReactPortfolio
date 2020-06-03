import React, { Component } from "react";
import { Menu } from "semantic-ui-react";
import { Header, Segment} from "semantic-ui-react";
import { Link, animateScroll as scroll } from "react-scroll";
import map from '../assets/blue_world_map_pixabay.jpg'


export default class Navbar extends Component {
  state = {}
  scrollToTop = () => {
    scroll.scrollToTop();
  };

  render() {

    return (

      <Segment style = {{ border:'none',boxShadow:'none',}}>
        <Menu 
          size='huge'
          style = {{ border:'none', boxShadow:'none', }}
        >
          {/* <Container> */}
            <Header as='h1'
              className='header'
              horizontal
              style={{ margin: '0.5em 0em', textTransform: 'uppercase' }} verticalAlign='center'>
              Christina Leung
            </Header>

            <Menu.Menu position="right" >
              <Menu.Item>
                <Link
                  className='link'
                  activeClass="active"
                  to="home"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  onClick={this.scrollToTop}
                >Home</Link>
              </Menu.Item>

              <Menu.Item>
                <Link
                  className='link'
                  activeClass="active"
                  to="about"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >About</Link>
              </Menu.Item>

              <Menu.Item>
                <Link
                  className='link'
                  activeClass="active"
                  to="portfolio"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >Work</Link>
              </Menu.Item>

              <Menu.Item>
                <Link
                  className='link'
                  activeClass="active"
                  to="contact"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >Contact</Link>
              </Menu.Item>

            </Menu.Menu>
          {/* </Container> */}
        </Menu>
        <img src={map} alt = 'map hero background' width = '100%' style = {{maxHeight:'580px'}}/>
      </Segment>

    );
  }
}
