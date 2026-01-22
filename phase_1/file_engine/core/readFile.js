import fs from 'fs'
import path from 'path'
// 4️⃣ Read File
export default function readFile(folderName, fileName) {
    const filePath = path.join(USER_ROOT, folderName, fileName);
    fs.readFile(filePath, 'utf-8', (err, data) => {
        if(err) console.log("Error reading file:", err);
        else console.log(`Content of ${fileName}:\n${data}`);
    });
}