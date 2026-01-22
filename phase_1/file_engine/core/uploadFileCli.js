import uploadFile from './uploadFile.js'
import readline from 'readline';


export default function uploadFileCLI() {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    rl.question("Enter absolute file path to upload: ", async (sourcePath) => {
        try {
            await uploadFile(sourcePath);
            console.log("✅ File uploaded successfully");
        } catch(err) {
            console.error("❌ Upload failed:", err.message);
        } finally {
            rl.close();
        }
    });
}