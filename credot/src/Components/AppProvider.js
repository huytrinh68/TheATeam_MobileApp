import React, { Component, PureComponent } from "react"
import Loading from "./Loading";
import Toast from './Toast'
import Alert from './Alert'

const AppContext = React.createContext({});
export const AppConsumer = AppContext.Consumer;
export class AppProvider extends PureComponent {
    constructor(props) {
        super(props);
    }

    showLoading = () => {
        this.refs.loading.showLoading();
    };
    hideLoading = () => {
        this.refs.loading.hideLoading();
    };

    showToast = (title, type, duration) => {
        this.refs.toast.showToast(title, type, duration)
    };
    alert = (content, accept, ignore, error, callback, description) => {
        this.refs.alert.alert(content, accept, ignore, error, callback, description)
    };

    render() {
        const functions = {
            showLoading: this.showLoading,
            hideLoading: this.hideLoading,
            showToast: this.showToast,
            alert: this.alert,
            showModal: this.showModal,
            hideModal: this.hideModal,
        };
        return (
            <AppContext.Provider
                value={{ ...functions }}>
                {this.props.children}
                <Loading ref={"loading"} />
                <Toast ref={"toast"} />
                <Alert ref={"alert"} />
            </AppContext.Provider>
        )
    }
}
