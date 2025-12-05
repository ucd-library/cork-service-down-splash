import fs from 'fs';
import path from 'path';

class CorkBuild {

  constructor() {
    this.file = null;
  }

  readFile(){
    try {
      if (this.file) {
        return this.file;
      }
      const filePath = path.resolve('/cork-build-info', 'cork-service-down-splash.json');
      if (fs.existsSync(filePath)) {
        this.file = JSON.parse(fs.readFileSync(filePath, 'utf8'));
      }
    } catch (error) {
      console.error('Error reading cork build file:', error);
    }
    return this.file;
  }

  get version(){
    const file = this.readFile();
    if ( file?.tag ) return file.tag;
    if ( file?.branch ) return file.branch;
    return '';
  }
}

export default new CorkBuild();