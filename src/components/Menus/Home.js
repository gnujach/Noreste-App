import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import SideMenu from 'react-native-side-menu';
import Header from '../Header';
import HeaderMenu from '../HeaderMenu';
import PostList from '../PostList';
import MenuMunicipios from '../Menus/MenuMunicipios';

class HomeScreen extends React.Component {
    constructor(props) {
      super(props);
    }
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
        title: 'Inicio',
        header: null
    };
    
    render() {
        const { navigate } = this.props.navigation;
        const { container } = styles; 
        const url = `https://www.elnoreste.com/wp-json/wp/v2/posts?_embed&tag=destacado`;
        // console.log(this.state.isOpen);
        const menu = <MenuMunicipios navigate={navigate} toggle={this.toggle.bind(this)} />
        // <PostList navigate={navigate} url={url}/>
        // <Header title={'Bisemanario El Noreste'} navigate={navigate} toggle={this.toggle.bind(this)}/>
        // <HeaderMenu navigate={navigate} />
        // isOpen={this.state.isOpen} 
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

export default HomeScreen;