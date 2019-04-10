import * as React from 'react';
import { JSONEditor } from 'react-json-editor-viewer';
import { LoadFileComponent } from './loadFileComponent';
import { SaveFileComponent } from './saveFileComponent';

export class RootComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      contentLoaded: '',
      contentChanged: '',
      filePath: ''
    };

    this.onFileContentLoaded = this.onFileContentLoaded.bind(this);
    this.onJsonChange = this.onJsonChange.bind(this);
  }
  onFileContentLoaded(content, path) {
    this.setState({
      contentLoaded: JSON.parse(content),
      filePath: path
    });
  }
  onJsonChange(key, value, parent, data){
    this.setState({
      contentChanged: data
    })
  }
  render() {
    return (
      <div>
        <LoadFileComponent onFileContentLoaded={this.onFileContentLoaded} />
        {this.state.contentChanged !== "" && <SaveFileComponent dataToSave={this.state.contentChanged} fileToSave={this.state.filePath}></SaveFileComponent>}
        {this.state.contentLoaded !== "" && <JSONEditor data={this.state.contentLoaded} view="dual" onChange={this.onJsonChange} /> }
      </div>
    );
  }
}
