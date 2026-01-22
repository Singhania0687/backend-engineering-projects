import fs from 'fs';
import path from 'path';

const ROOT_DIR = path.join(process.cwd(), 'storage');
const USER = 'user1';
const USER_ROOT = path.join(ROOT_DIR, USER);

const BUFFER_THRESHOLD = 10 * 1024 * 1024; // 10MB

export default function uploadFile(sourcePath) {
    return new Promise((resolve, reject) => {
        if (!fs.existsSync(sourcePath))
            return reject(new Error("Source file does not exist"));

        const stats = fs.statSync(sourcePath);
        if (!stats.isFile())
            return reject(new Error("Provided path is not a file"));

        const fileName = path.basename(sourcePath);
        const ext = path.extname(fileName).slice(1) || 'others';

        const targetDir = path.join(USER_ROOT, ext);
        fs.mkdirSync(targetDir, { recursive: true });

        const destPath = path.join(targetDir, fileName);

        /* ---------------- SMALL FILE (NO RESUME) ---------------- */
        if (stats.size <= BUFFER_THRESHOLD) {
            const data = fs.readFileSync(sourcePath);
            fs.writeFileSync(destPath, data);
            return resolve();
        }

        /* ---------------- LARGE FILE (RESUMABLE STREAM) ---------------- */

        let offset = 0;

        if (fs.existsSync(destPath)) {
            offset = fs.statSync(destPath).size;
        }

        // Safety guard
        if (offset > stats.size) {
            return reject(new Error("Destination file is larger than source file"));
        }

        const readStream = fs.createReadStream(sourcePath, {
            start: offset
        });

        const writeStream = fs.createWriteStream(destPath, {
            flags: 'a' // append mode
        });

        readStream.pipe(writeStream);

        writeStream.on('finish', resolve);
        writeStream.on('error', reject);
        readStream.on('error', reject);
    });
}
