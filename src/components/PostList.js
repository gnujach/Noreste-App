//Llamar dependencias
import React, { Component } from 'react';
import { StyleSheet, ScrollView, Text, FlatList, View, Image, TouchableOpacity, ActivityIndicator, Dimensions } from 'react-native';
import axios from 'axios';
import PostDetails from './PostDetails';
import CardSection from './CardSection';
import Card from './Card';


//Obtenemos el alto y ancho de la pantall
const {width, height } = Dimensions.get('window');
//Crear componente
class PostList extends Component {
    constructor(props) {
      super(props);
    }
    state = { 
        posts: [],
        page: 1,
        per_page: 10,
        refreshing: false,
        loading: false,
    };
    
    componentDidMount() {
        this.makeRemoteRequest(this.props.url);
    }
    
    _keyExtractor = (item, index) => item.id;
    
    _loadMore() {
        this.setState(
            {
                page: this.state.page + 1
            },
            () => {
                this.makeRemoteRequest(this.props.url);
            });
    }
    makeRemoteRequest = (url) => {
        this.setState({loading: true});
        const { page } = this.state;
        const get_request = `${url}&page=${page}`;
        // console.log (get_request);
        if (page > 3) return null;
        // const url = `https://www.elnoreste.com/wp-json/wp/v2/posts?page=${page}&_embed&categories=5`;
        // const url = `https://www.elnoreste.com/wp-json/wp/v2/posts?page=${page}&_embed`;
        const url1 = 'https://periodicocorreo.com.mx/wp-json/wp/v2/posts?&_embed';
        // console.log (this.props.navigate);
        if (page > 1) {
            axios.get(get_request)
                .then(response => this.setState({ 
                    posts: [...this.state.posts,...response.data],
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
        } else {
            axios.get(url)
                .then(response => this.setState({ 
                    posts: response.data,
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
    }
    renderPosts() {
        // return this.state.posts.map( post => 
        //     {
        //         let media = post._embedded;
        //         console.log(media['wp:featuredmedia'][0]['media_details']['sizes']['medium']['source_url']);
        //     }
        // );
        return this.state.posts.map( post => 
                <PostDetails key={post.id} post={post} >{post.title.rendered}</PostDetails>
        );
    }
    _handleRefresh = () => {
        this.setState({
            page: 1,
            refreshing: true,
        }, () => {
            this.makeRemoteRequest(this.props.url);
        });
    }
    _renderSeparator() {
        return (
            <View style={styles.SeparatorStyle} />
        )
    }
    _renderItem( item ) {
        <Card>
            <CardSection>
                <View style={styles.headerContentStyle}>
                    <Text style={styles.headerTextStyle}>{item.title.rendered}</Text>
                </View>
            </CardSection>
            <CardSection>
                <Image style={styles.imageStyle} source={{ uri: item._embedded['wp:featuredmedia'][0]['media_details']['sizes']['full']['source_url'] }} /> 
            </CardSection>
        </Card>
    };
    render() {
        const {navigate} = this.props;
        if (this.state.loading && this.state.page == 1)
            return (
                <View style={{backgroundColor: '#fff', height:height}}>
                    <ActivityIndicator size="large" color="#0000ff" />
                </View>
            )
        return (
            <View style={{backgroundColor: '#fff'}}>
                <FlatList
                    onEndReachedThreshold={0.5}
                    onEndReached={()=>{this._loadMore()}}
                    data= {this.state.posts}
                    keyExtractor={this._keyExtractor}
                    onRefresh={this._handleRefresh}
                    refreshing={this.state.refreshing}
                    ItemSeparatorComponent={this._renderSeparator}
                    renderItem={({ item }) => (
                        <Card>
                            <CardSection>
                                <View style={styles.headerContentStyle}>
                                    <TouchableOpacity onPress={ () => navigate('Post',{ id: item.id, title: item.title.rendered, url: item.link })}><Text style={styles.headerTextStyle}>{item.title.rendered}</Text></TouchableOpacity> 
                                    <Text>{item.date} </Text>
                                </View>
                            </CardSection>
                            <CardSection>
                                <Image style={styles.imageStyle} source={{ uri: item._embedded['wp:featuredmedia'][0]['media_details']['sizes']['full']['source_url'] }} /> 
                            </CardSection>
                        </Card>
                    )}
                />
            </View>
        )
    }
}

const styles = {
    SeparatorStyle: {
        height: 2,
        // backgroundColor: '#CED0CE',
        // marginLeft: '14%'
    },
    headerContentStyle: {
        flexDirection: 'column',
        justifyContent: 'space-around'
    },
    headerTextStyle: {
        fontSize: 18
    },
    thumbnailStyle: {
        height: 50,
        width: 50
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
}

//Hacer componente publico

export default PostList;
