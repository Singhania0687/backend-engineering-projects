import path from 'path'
import fs from 'fs'
const ROOT_DIR = path.join(process.cwd(), 'storage');
const USER = 'user1'; // For now, single user
const USER_ROOT = path.join(ROOT_DIR, USER);

// 1️⃣ Create Folder
export default function createFolder(folderName) {
    const folderPath = path.join(USER_ROOT, folderName);
    fs.mkdir(folderPath, { recursive: true }, err => {
        if(err) console.log("Error occurred during folder creation:", err);
        else console.log(`Folder created at: ${folderPath}`);
    });
}
