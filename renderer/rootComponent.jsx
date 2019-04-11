import * as React from 'react';
import { JSONEditor } from 'react-json-editor-viewer';
import { LoadFileComponent } from './loadFileComponent';
import { SaveFileComponent } from './saveFileComponent';

export class RootComponent extends React.Component {
  constructor(props) {
    super(props);
    //This component has state. The default state is defined:
    this.state = {
      //String of the contents of the file loaded
      contentLoaded: '',
      //Object holding the changed data
      contentChanged: '',
      //Path of the opened file
      filePath: ''
    };

    //binding the functions to the same "this" context
    this.onFileContentLoaded = this.onFileContentLoaded.bind(this);
    this.onJsonChange = this.onJsonChange.bind(this);
  }
  //Called by LoadFileComponent when a file is loaded, the state will be updated with the data it receives.
  onFileContentLoaded(content, path) {
    this.setState({
      contentLoaded: JSON.parse(content),
      filePath: path
    });
  }
  //Called whenever the json is changed in the editor, state object representing it will change too.
  onJsonChange(key, value, parent, data){
    this.setState({
      contentChanged: data
    })
  }
  //Renders the RootComponent
  render() {
    return (
      <div>
        {
          /**
           * LoadFileComponent has a prop passed onFileContentLoaded as a local function.
           * It is what the component will call when a file is loaded.
           */
        }
        <LoadFileComponent onFileContentLoaded={this.onFileContentLoaded} />
        {
          /**
           * If the content of the JSON Object hasn't been changed at least once, the save button is hidden.
           */
        }
        {this.state.contentChanged !== "" && <SaveFileComponent dataToSave={this.state.contentChanged} fileToSave={this.state.filePath}></SaveFileComponent>}
        {
          /**
           * If no content is loaded the JSONEditor is invisible.
           */
        }
        {this.state.contentLoaded !== "" && <JSONEditor data={this.state.contentLoaded} view="dual" onChange={this.onJsonChange} /> }
      </div>
    );
  }
}
