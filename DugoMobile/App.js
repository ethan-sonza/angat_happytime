import React, { useState, useEffect, useRef } from 'react';
import { DrawerLayoutAndroid } from 'react-native';
import { NativeRouter, Route } from "react-router-native";
import { library } from '@fortawesome/fontawesome-svg-core'
import { faBars, faTimes, faPlus } from '@fortawesome/free-solid-svg-icons'
import AsyncStorage from '@react-native-community/async-storage';

import Drawer from './screens/components/drawer'
import TopNav from './screens/components/topnav'
import Board from './screens/board';
import Faq from './screens/faq';
import Login from './screens/login';
import Profile from './screens/profile';

library.add(faBars, faTimes, faPlus)

export default function App() {
  let drawer = useRef(null);
  const openDrawer = () => drawer.current.openDrawer()
  const closeDrawer = () => drawer.current.closeDrawer()

  const [authenticated, setAuthenticated] = useState(false)

  const isAuthenticated = () => {
    setAuthenticated(true)
  }

  const tempLogout = async () => {
    try {
      await AsyncStorage.removeItem('@auth_token')
      setAuthenticated(false)
    } catch (error) {
      console.log("Async:" + error)
    }
  }

  useEffect(() => setAuthenticated(authenticated), [authenticated])

	return (
    <NativeRouter>
      <DrawerLayoutAndroid
        ref={drawer}
        drawerWidth={240}
        drawerPosition="left"
        drawerLockMode="locked-closed"
        renderNavigationView={() => (
          <Drawer closeDrawer={closeDrawer} authenticated={authenticated}/>
        )}>
        
        <TopNav openDrawer={openDrawer}/>

        <Route exact path="/" component={Board} />
        <Route path="/faq" component={Faq} />
        <Route path="/login" render={() => (
          <Login isAuthenticated={isAuthenticated} />
        )}/>
        <Route path="/profile" render={() => (
          <Profile logout={tempLogout} />
        )} />
      </DrawerLayoutAndroid>
    </NativeRouter>
  )
}