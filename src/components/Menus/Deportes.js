import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import SideMenu from 'react-native-side-menu';
import Header from '../Header';
import PostList from '../PostList';
import HeaderMenu from '../HeaderMenu';
import MenuMunicipios from '../Menus/MenuMunicipios';

class Deportes extends React.Component {
    state = {
        isOpen: false
    }
    toggle(){
        this.setState({
            isOpen: !this.state.isOpen
        })
    }
    updateMenu(isOpen) {
        this.setState({
            isOpen
        })
    }
    static navigationOptions = {
        title: 'Deportes',
        header: null
    };
    
    render() {
        const { navigate } = this.props.navigation;
        const { container } = styles; 
        const url = `https://www.elnoreste.com/wp-json/wp/v2/posts?_embed&categories=33`;
        const menu = <MenuMunicipios navigate={navigate} toggle={this.toggle.bind(this)} />
        // console.log(navigate);
        // const this.state.posts.map(post);
        return (
            <View style={styles.container}>
                <SideMenu 
                    menu={menu}
                    isOpen={this.state.isOpen}
                    menuPosition='left'
                    onChange={(isOpen)=> this.updateMenu(isOpen)}
                >
                   <Header title={'Bisemanario El Noreste'} navigate={navigate} toggle={this.toggle.bind(this)}/>
                    <HeaderMenu navigate={navigate}/>
                    <PostList navigate={navigate} url={url}/>
                </SideMenu>
            </View>
        );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});

export default Deportes;