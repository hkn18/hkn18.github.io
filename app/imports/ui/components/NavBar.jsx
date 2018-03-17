import React from 'react';
import PropTypes from 'prop-types';
import { Meteor } from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';
import { withRouter, NavLink } from 'react-router-dom';
import { Menu, Icon, Dropdown, Header } from 'semantic-ui-react';
import { Roles } from 'meteor/alanning:roles';

/** The NavBar appears at the top of every page. Rendered by the App Layout component. */
class NavBar extends React.Component {
  render() {
    const menuStyle = { marginBottom: '10px', borderRadius: '0' };
    return (
      <Menu color='green' style={menuStyle} attached="top" borderless inverted>
        <Menu.Item as={NavLink} activeClassName="" exact to="/">
          <Header inverted as='h1'>HKN 18</Header>
        </Menu.Item>
        <Menu.Item position="right" as={NavLink} to="/about">
          <a>About Us</a>
        </Menu.Item>
        <Menu.Item as={NavLink} to="/courses">
          <a>Courses</a>
        </Menu.Item>
        <Menu.Item>
          <a>Search <Icon name='search'/></a>
        </Menu.Item>
      </Menu>
    );
  }
}

/** Declare the types of all properties. */
NavBar.propTypes = {
  currentUser: PropTypes.string,
};

/** withTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker */
const NavBarContainer = withTracker(() => ({
  currentUser: Meteor.user() ? Meteor.user().username : '',
}))(NavBar);

/** Enable ReactRouter for this component. https://reacttraining.com/react-router/web/api/withRouter */
export default withRouter(NavBarContainer);
