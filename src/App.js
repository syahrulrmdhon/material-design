import React from 'react';
import {Route} from 'react-router-dom';
import Material from './components/pages/Material';
import Favicon from 'react-favicon';


const App = () => <div>
    <Favicon url="https://raw.githubusercontent.com/syahrulrmdhon/material-design/master/public/favicon2.ico"/>
    <Route path='/' exact component={Material}/>
</div>

export default App;