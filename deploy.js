import { exec } from 'child_process';
import os from 'os';

const isWindows = os.platform() === 'win32';
const copyCommand = isWindows ? 'copy CNAME dist\\' : 'cp CNAME dist/';

exec(copyCommand, (err, stdout, stderr) => {
  if (err) {
    console.error(`Error copying CNAME file: ${stderr}`);
    process.exit(1);
  }
  exec('gh-pages -d dist', (err, stdout, stderr) => {
    if (err) {
      console.error(`Error deploying to GitHub Pages: ${stderr}`);
      process.exit(1);
    }
    console.log('Successfully deployed to GitHub Pages');
  });
});