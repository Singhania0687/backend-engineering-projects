import process from 'process';

import {
  createFolder,
  uploadFileCLI,
  listFiles,
  readFile,
  menuSelected,
  renameFolder,
  deleteFolder
} from '../core/index.js';

export default function operations(choice) {
    console.log(`You have selected: ${menuSelected(choice)}`);

    switch(choice) {
        case '1': // Create Folder
            createFolder('logs');
            break;

        case '2': // Upload File
            uploadFileCLI();
            break;

        case '3': // List Files
            listFiles('data'); 
            break;

        case '4': // Read File
            readFile('data', 'example.txt');
            break;

        case '5': // Rename File / Folder
            renameFolder('logs', 'logs_backup');
            break;

        case '6': // Delete File / Folder
            deleteFolder('logs');
            break;

        case '7': // Exit
            console.log("Exiting the process gracefully");
            process.exit(0);

        default:
            console.log("Wrong choice entered!");
    }
}






