import React from 'react';
import {Route} from 'react-router-dom';
import Material from './components/pages/Material';
import Favicon from 'react-favicon';


const App = () => <div>
    <Favicon url="http://oflisback.github.io/react-favicon/public/img/github.ico"/>
    <Route path='/' exact component={Material}/>
</div>

export default App;