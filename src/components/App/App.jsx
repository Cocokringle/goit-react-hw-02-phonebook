import React from 'react';
import Section from 'components/Section/Section';
import NameInput from '../NameInput/NameInput';
class App extends React.Component{
    state = {
        contacts: [],
        name: ''
    }

    handleInputChange = (event) =>{
        const {name, value } = event.currentTarget;
        this.setState({[name]: value})

    }

    render(){
        
        return (
            <div>
                <Section title="Name">
                <NameInput value={this.state.name} handleInputChange={this.handleInputChange}/>
                </Section>
                
            </div>
        )
    }
}

export default App;