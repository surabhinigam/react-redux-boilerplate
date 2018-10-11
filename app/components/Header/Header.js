import React from 'react';
import { Link } from 'react-router-dom';
import {
 Heading
} from 'pcln-design-system'

class Header extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <Heading my={4}>
        Birthday Planner
      </Heading>
    );
  }
}

export default Header;
