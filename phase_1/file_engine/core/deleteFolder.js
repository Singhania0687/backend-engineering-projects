import fs from 'fs'
import path from 'path'

const ROOT_DIR = path.join(process.cwd(), 'storage');
const USER = 'user1'; // For now, single user
const USER_ROOT = path.join(ROOT_DIR, USER);

// 6️⃣ Delete Folder
export default function deleteFolder(folderName) {
    const folderPath = path.join(USER_ROOT, folderName);
    fs.rm(folderPath, { recursive: true, force: true }, (err) => {
        if(err) console.log("Error deleting folder:", err);
        else console.log(`Folder deleted: ${folderPath}`);
    });
}
