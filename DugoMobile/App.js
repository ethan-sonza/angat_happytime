import React, { useRef } from 'react';
import { DrawerLayoutAndroid } from 'react-native';
import { NativeRouter, Route } from "react-router-native";
import { library } from '@fortawesome/fontawesome-svg-core'
import { faBars } from '@fortawesome/free-solid-svg-icons'

import Drawer from './screens/drawer'
import TopNav from './screens/topnav'
import Board from './screens/board';
import Faq from './screens/faq';
import Login from './screens/login';
import Profile from './screens/profile';

library.add(faBars)

export default function App() {
  let drawer = useRef(null);
  const openDrawer = () => drawer.current.openDrawer()
  const closeDrawer = () => drawer.current.closeDrawer()

	return (
    <NativeRouter>
      <DrawerLayoutAndroid
        ref={drawer}
        drawerWidth={240}
        drawerPosition="left"
        drawerLockMode="locked-closed"
        renderNavigationView={() => (
          <Drawer closeDrawer={closeDrawer}/>
        )}>
        
        <TopNav openDrawer={openDrawer}/>

        <Route exact path="/" component={Board} />
        <Route path="/faq" component={Faq} />
        <Route path="/login" component={Login} />
        <Route path="/profile" component={Profile} />
      </DrawerLayoutAndroid>
    </NativeRouter>
  )
}