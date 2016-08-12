/**
* MonthSelector pure component.
* @flow
*/

import React, { Component, PropTypes } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

// Component specific libraries.
import _ from 'lodash';

type Props = {
  style?: View.propTypes.style,
};
type State = {};

export default class MonthSelector extends Component {
  props: Props;
  state: State;
  static defaultProps: Props;

  render() {
    return (
      <View style={[{
        // Wrapper view default style.
      },this.props.style]}>
        <Text>Month Selector</Text>
      </View>
    );
  }
}
MonthSelector.defaultProps = {};

const styles = StyleSheet.create({
});
