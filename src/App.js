import React from 'react';
import {Route} from 'react-router-dom';
import Material from './components/pages/Material';

const App = () => <div>
    <Route path='/' exact component={Material}/>
</div>

export default App;