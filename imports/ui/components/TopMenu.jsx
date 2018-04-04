import React from 'react';
import { Container, Image, Menu } from 'semantic-ui-react';


export default class TopMenu extends React.Component {
  render() {
    return (
        <Menu borderless className="topmenu">
          <Container>
            <Menu.Item>
              <Image src="http://courses.ics.hawaii.edu/ics314f17/morea/ui-frameworks/hard-rock-logo.png"/>
            </Menu.Item>
            <Menu.Item position="right"><a>CAFES</a></Menu.Item>
            <Menu.Item><a>HOTELS</a></Menu.Item>
            <Menu.Item><a>CASINOS</a></Menu.Item>
            <Menu.Item><a>LIVE</a></Menu.Item>
            <Menu.Item><a>SHOP</a></Menu.Item>
            <Menu.Item><a>BLOG</a></Menu.Item>
            <Menu.Item><a>REWARDS</a></Menu.Item>
          </Container>
        </Menu>
    );
  }
}
