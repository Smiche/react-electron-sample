import * as React from 'react';
import { remote } from 'electron';
import * as fs from 'fs';

//This class is exported so it can be used in other files
export class LoadFileComponent extends React.Component {
  //the constructor is called when the component is initialized
  constructor(props) {
    super(props);
    //openDialog function bound to same "this" context
    this.openDialog = this.openDialog.bind(this);
  }
  //Function that opens a dialog to load a file
  openDialog() {
    //remote.dialog api used for the dialog
    remote.dialog.showOpenDialog(
      {
        //type of the dialog
        properties: ['openFile'],
        //filters for allowed file extensions
        filters: [
          {
            name: 'json',
            extensions: ['json']
          }
        ]
      },
      //callback when the file/s are selected
      files => {
        if (files !== undefined) {
          //files array has only 1 element with single file selection, index 0
          //File contents are loaded with fs
          fs.readFile(files[0], 'utf-8', (err, data) => {
            if (!err) {
              if (this.props.onFileContentLoaded) {
                /*
                 * If there are no errors and a callback is provided from parent component,
                 * the callback will be called with the contents and path of the file.
                 */
                this.props.onFileContentLoaded(data, files[0]);
              }
            }
          });
        }
      }
    );
  }
  //Render method returns html to renderer to the UI
  render() {
    return (
      <div>
        <h1>Load a JSON file</h1>
        {
          //When the button is clicked it will call openDialog
        }
        <button onClick={this.openDialog}>Open File</button>
      </div>
    );
  }
}
