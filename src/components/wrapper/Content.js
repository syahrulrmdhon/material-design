import React from 'react'
import {Container, Header, Image, Tab} from 'semantic-ui-react' 

class Content extends React.Component {
    render() {
        const panes = [
            { menuItem: 'Basics Element', render: () => <Tab.Pane>Tab 1 Content</Tab.Pane> },
            { menuItem: 'Typography', render: () => <Tab.Pane>Tab 2 Content</Tab.Pane> },
            { menuItem: 'Color Swatches', render: () => <Tab.Pane>Tab 3 Content</Tab.Pane> },
          ]
        return (
            <div>
                <Container text style={{ marginTop: '7em' }}>
                    <Header as='h1'>Material Design</Header>
                    <p>Material Design is a design language developed in 2014 by Google.</p>
                    <p>Expanding upon the "card" motifs that debuted in Google Now, Material Design makes more liberal use of grid-based layouts, responsive animations and transitions, padding, and depth effects such as lighting and shadows.</p>
                    <br/>
                </Container>
                <Container>
                    <Tab menu={{ fluid: true, vertical: true }} menuPosition='left' panes={panes} />
                </Container>
            </div>
        )
    }
}

export default Content