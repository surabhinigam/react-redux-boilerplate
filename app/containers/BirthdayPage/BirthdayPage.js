/*
 * FeaturePage
 *
 * List all the features
 */
import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import {
  Box, 
  Text,
  Heading
} from 'pcln-design-system'

export default class BirthdayPage extends Component {
  // eslint-disable-line react/prefer-stateless-function

  render() {
    return (
      <Box>
        <Heading>
          My Guests
        </Heading>
      </Box>
    );
  }
}
