import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Root from './src/components/Root';

export default class App extends React.Component {
  render() {
    // return (
    //   <View style={styles.container}>
    //     <Header title={'Bisemanario El Noreste'}/>
    //     <PostList />
    //   </View>
    // );
    return (
      <Root style={styles.container}/>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F8F8',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
