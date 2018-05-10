import React from 'react'
import Headers from '../wrapper/Headers';
import Content from '../wrapper/Content';
import Footer from '../wrapper/Footer';

class Material extends React.Component {
    componentDidMount(){
        document.title = "Material Design"
      }
    render() {
        return(
            <div>
                <Headers>...</Headers>
                <Content>...</Content>
                <Footer>...</Footer>
            </div>
        )
    }
}

export default Material