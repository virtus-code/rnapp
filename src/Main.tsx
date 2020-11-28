import React from 'react';
import {View} from 'react-native';
import App from './scenes/App';

interface Props {}

interface State {
  loaded: boolean;
}

export default class Main extends React.PureComponent<Props, State> {
  state: State = {
    loaded: false,
  };

  render() {
    return (
      <View style={{flex: 1, justifyContent: 'flex-end'}}>
        <App />
      </View>
    );
  }
}
