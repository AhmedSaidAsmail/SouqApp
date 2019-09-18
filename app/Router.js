import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import ReduxThunk from 'redux-thunk';
import reducers from './middleware/redux';
import HomeScreen from './views/HomeScreen';


const routes = createStackNavigator({
        Home: {screen: HomeScreen},
    },
    {
        initialRouteName: 'Home',
        headerMode: 'none',
        navigationOptions: {
            headerVisible: false,
        },
    });
const Container = createAppContainer(routes);

export default class Router extends React.Component {
    render() {
        return (
            <Provider store={createStore(reducers, applyMiddleware(ReduxThunk))}>
                <Container/>
            </Provider>
        );
    }
}