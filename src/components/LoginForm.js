import React, { Component } from 'react';
import { Button, Card, CardSection, Input } from './common';

class LoginForm extends Component {
  state = {
    email: '',
    password: ''
  }

  render() {
      return (
        <Card>
          <CardSection>
            <Input
              label='Email'
              placeholder='hello@auth.com'
              autoCorrect={false}
              value={this.state.email}
              onChangeText={email => {
                this.setState({ email });
              }}
            />
          </CardSection>

          <CardSection />

          <CardSection>
            <Button>
              Log In
            </Button>
          </CardSection>
        </Card>
      );
  }
}

export default LoginForm;
