import React, { Component } from 'react'
import { Provider } from 'react-redux';
import setup from './store/setup';
import RouterComponent from './Routes';

global.isDebuggingInChrome = __DEV__ && !!window.navigator.userAgent;
console.disableYellowBox = true;
export default class App extends Component {
    constructor() {
        super();
        this.state = {
            isLoading: true,
            store: null,
        };
    }
    componentDidMount() {
        setup((store) => {
            this.setState({
                isLoading: false,
                store,
            });
        });
    }
    render() {
        if (this.state.isLoading) {
            // Render splash screen while store is bootstrapping
            return null;
        }
        return (
            <Provider store={this.state.store}>
                <RouterComponent />
            </Provider>
        );
    }
}