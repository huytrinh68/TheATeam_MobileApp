import React from 'react'
import RootNavigation from './src/Navigation/RootNavigation'
import { Provider } from 'react-redux'
import store from '@Redux/store'
import { enableScreens } from 'react-native-screens'
import { AppConsumer, AppProvider } from '@Components/AppProvider'
import Orientation from 'react-native-orientation'

enableScreens()

export default class App extends React.Component {
  constructor(props){
    super(props)
    Orientation.lockToPortrait()
  }
  render() {
    return (
      <Provider store={store}>
        <AppProvider {...this.props}>
          <AppConsumer>
            {functions => {
              global.props = { ...functions };
              return <RootNavigation  {...functions} />
            }}
          </AppConsumer>
        </AppProvider>
      </Provider>
    )
  }
}
