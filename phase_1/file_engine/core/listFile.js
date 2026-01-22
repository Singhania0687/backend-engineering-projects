import fs from 'fs'
import path from 'path'
const ROOT_DIR = path.join(process.cwd(), 'storage');
const USER = 'user1'; // For now, single user
const USER_ROOT = path.join(ROOT_DIR, USER);

//  List Files
export default function listFiles(folderName) {
    const folderPath = path.join(USER_ROOT, folderName);
    fs.readdir(folderPath, (err, files) => {
        if(err) console.log("Error reading files:", err);
        else console.log("Files:", files);
    });
}