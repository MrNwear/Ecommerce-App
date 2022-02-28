import React from 'react';
import {Text} from 'react-native';

export class WelcomeGreeting extends React.Component {
  render() {
    const {name, age, course} = this.props;
    return (
      <Text>
        Hello my name is {name ? this.props.name : 'Student'}, i am{' '}
        {age ? this.props.age : 22} and i enrolled in{' '}
        {course ? this.props.course : 'this'} course
      </Text>);
    }
}