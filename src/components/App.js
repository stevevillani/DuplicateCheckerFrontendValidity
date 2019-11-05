import React from 'react';
import './App.css';
import List from './List';
import FileService from '../service/FileService'


class App extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            duplicateValues: [],
            uniqueValues: []
        };
    }
    
    //once the upload file button is clicked, will upload the file to the backend where it is parsed
    uploadFile = (file => {
        FileService.upload(file).then(res => {
            console.log(res.data.duplicates)
            //sets state with parsed results from backend
            this.setState({
                duplicateValues: res.data.duplicates,
                uniqueValues: res.data.uniques
            })
        })
    })

    render() {
        return (
            <div className="App" >
                <input type="file" name="file" onChange={this.uploadFile} />
                <hr></hr>
                <List name="Duplicate Values" data={this.state.duplicateValues}> </List>
                <List name="Unique Values" data={this.state.uniqueValues}> </List>
            </div>)
    }

}
export default App;