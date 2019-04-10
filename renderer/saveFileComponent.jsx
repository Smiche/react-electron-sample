import * as React from 'react';
import * as fs from 'fs';

//exporting the component for other files to use
export class SaveFileComponent extends React.Component {
  //constructor called when object is instantiated
  constructor(props) {
    super(props);
    //binding saveFile func to the same "this" context
    this.saveFile = this.saveFile.bind(this);
  }
  //function to save a contents to a file
  saveFile() {
    if (this.props.dataToSave && this.props.fileToSave) {
      fs.writeFile(
        this.props.fileToSave,
        //JavaScript object will be turned into a string and prettified
        JSON.stringify(this.props.dataToSave, null, 2),
        err => {
          if (err) {
            //if an error comes up a message will be displayed
            window.alert(err.message);
          }
        }
      );
    }
  }
  //renders this component
  render() {
    return (
        <button onClick={this.saveFile}>Save</button>
    );
  }
}
