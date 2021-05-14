import React from 'react';
import { Menu, Segment } from 'semantic-ui-react';
import { NavLink, Link } from 'react-router-dom';

const Header = () => {
  return (
    <Segment inverted>
      <Menu inverted pointing>
        <Menu.Item
          id='header'
          name='My Portfolio'
          as={Link}
          to={{ pathname: '/' }}
        />
        <Menu.Item
          id='about-tab'
          name='about me'
          as={NavLink}
          to={{ pathname: '/about' }}
        />
        <Menu.Item
          id='projects-tab'
          name='My Projects'
          as={NavLink}
          to={{ pathname: '/projects' }}
        />
        <Menu.Item
          id='CV-tab'
          name='My CV'
          as={NavLink}
          to={{ pathname: '/CV' }}
        />
        <Menu.Item
          id='contact-form'
          name='Contact'
          as={NavLink}
          to={{ pathname: '/Contact' }}
        />
      </Menu>
    </Segment>
  );
};

export default Header;
