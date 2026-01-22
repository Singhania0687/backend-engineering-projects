import process from 'process'
import path from 'path'
import fs from 'fs'
const ROOT_DIR = path.join(process.cwd(), 'storage');
const USER = 'user1'; // For now, single user
const USER_ROOT = path.join(ROOT_DIR, USER);

// 5️⃣ Rename Folder
export default function renameFolder(oldName, newName) {
    const oldPath = path.join(USER_ROOT, oldName);
    const newPath = path.join(USER_ROOT, newName);
    fs.rename(oldPath, newPath, (err) => {
        if(err) console.log("Error renaming folder:", err);
        else console.log(`Folder renamed: ${oldName} → ${newName}`);
    });
}