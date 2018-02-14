import React, {Component} from 'react';
import {Text, View, StyleSheet, Image, ActivityIndicator, ScrollView} from 'react-native';
import axios from 'axios';
import Card from './Card';
import CardSection from './CardSection';
import WebViewAutoHeight from './WebViewAutoHeight';


class PostDetails extends Component{
    state = { 
        post: []
    }
    
    componentWillMount() {
        this.makeRemoteRequest();
    }
    makeRemoteRequest = () => {
        const { id } =  this.props;
        const url = `https://www.elnoreste.com/wp-json/wp/v2/posts/${id}?_embed`;
        console.log (url);
        axios.get(url)
            .then(response => this.setState({ 
                post: response.data,
                loading: false,
                refreshing: false
            }))
            .catch(error => {
                this.setState({
                    error,
                    loading:false,
                    refreshing:false
                })
            });
    }
    

    _renderItem(post) {
        if ( Array.isArray(post) )
            return <ActivityIndicator size="large" color="#0000ff" />
        else {
            // var html = '<!DOCTYPE html><html><body>' + post.content.rendered + '</body></html>';
            var html = '<!DOCTYPE html><html><head><style> p {font-size: 16pt} </style></head><body>' + post.content.rendered + '</body></html>';
            // return <ScrollView style={{flex: 1}} scrollEnabled={true}><Text>{post.title.rendered}</Text><CardSection><Image style={styles.imageStyle} source={{ uri: post._embedded['wp:featuredmedia'][0]['media_details']['sizes']['full']['source_url'] }} /></CardSection><WebView  source={{html: post.content.rendered}} automaticallyAdjustContentInsets={true} scrollEnabled={true} style={{marginTop: 20, flex: 1, height:2000}} /></ScrollView>
            return <ScrollView style={{flex: 1}} scrollEnabled={true}><CardSection><Image style={styles.imageStyle} source={{ uri: post._embedded['wp:featuredmedia'][0]['media_details']['sizes']['full']['source_url'] }} /></CardSection><CardSection><Text style={styles.headerTextStyle}>{post.title.rendered}</Text></CardSection><WebViewAutoHeight javaScriptEnabled={true} source={{html: html}} /></ScrollView>
        }
    }
    _render2(post) {
        if ( Array.isArray(post)  )
            return <ActivityIndicator size="large" color="#0000ff" />
        else 
            return <Card><CardSection><View><Text>{post.link}</Text></View></CardSection><CardSection><WebView  source={{uri: 'https://github.com/facebook/react-native'}} /></CardSection></Card>
    }
    render () {
        const { post } = this.state;
        // console.log(post);
        return (
          this._renderItem(post)  
        );
    }
}

const styles = StyleSheet.create({
    //<Image style={imageStyle} source={{ uri: _embedded['wp:featuredmedia'][0]['media_details']['sizes']['wp_review_large']['source_url'] }} />
    headerContentStyle: {
        flexDirection: 'column',
        justifyContent: 'space-around'
    },
    headerTextStyle: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    thumbnailStyle: {
        height: 50,
        width: 50
    },
    webStyle: {
        fontWeight: 'bold'
    },
    thumbnailContainerStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10,
        marginRight: 10
    },
    imageStyle: {
        height: 400,
        flex: 1,
        width: null,
        resizeMode: Image.resizeMode.cover
    }
});
export default PostDetails;
