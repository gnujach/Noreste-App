import React, {Component} from 'react';
import {Text, View, StyleSheet, Image} from 'react-native';
import axios from 'axios';
import Header from '../Header';
import PostDetails from '../PostDetails';

class Post extends Component{
    // static navigationOptions = {
    //     headerStyle: {
    //     backgroundColor: '#f4511e',
    //     },
    //     headerTintColor: '#fff',
    //     headerTitleStyle: {
    //     fontWeight: 'bold',
    //     },
    //     transitionConfig: () => ({
    //     transitionSpec: {
    //         duration: 300,
    //         easing: Easing.out(Easing.poly(4)),
    //         timing: Animated.timing,
    //      },
    //     screenInterpolator: sceneProps => {
    //     const { layout, position, scene } = sceneProps;
    //     const { index } = scene;

    //     const height = layout.initHeight;
    //     const translateY = position.interpolate({
    //       inputRange: [index - 1, index, index + 1],
    //       outputRange: [height, 0, 0],
    //     });
    //     const opacity = position.interpolate({
    //       inputRange: [index - 1, index - 0.99, index],
    //       outputRange: [0, 1, 1],
    //     });
    //      return { opacity, transform: [{ translateY }] };
    //   }})
    // };
    render() {
        const { navigate } = this.props.navigation;
        const { container } = styles; 
        const { params } = this.props.navigation.state;
        // console.log(navigate);
        // const this.state.posts.map(post);
        return (
            <View style={styles.container}>
                <PostDetails navigate={navigate} id={params.id}/>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
    flex: 1,
    backgroundColor: '#fff',
    }
}); //<Header title={'Bisemanario El Noreste'} navigate={navigate}/> 
export default Post;