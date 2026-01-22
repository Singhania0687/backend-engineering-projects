const { spawn } = require('child_process');

const ls = spawn('ls', ['-lh', '/']);

ls.stdout.on('data', data => console.log(`[Child stdout] ${data.toString()}`));
ls.stderr.on('data', data => console.error(`[Child stderr] ${data.toString()}`));

ls.on('close', code => console.log(`[Child exit] code ${code}`));
