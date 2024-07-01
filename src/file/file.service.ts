import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import path from 'path';
import * as uuid from 'uuid';
import * as fs from 'fs';

export enum FileType {
  AUDIO = 'audio',
  IMAGE = 'image',
}

@Injectable()
export class FileService {
  createFile(type: FileType, file): string {
    try {
      const fileExtensions = file.originalname.split('.').pop();
      const fileName = uuid.v4() + fileExtensions;
      const filePath = path.resolve(__dirname, '..', 'static', fileName);
      if (!fs.existsSync(filePath)) {
        fs.mkdirSync(filePath, { recursive: true });
      }
      fs.writeFileSync(path.resolve(filePath, fileName), file.biffer);
      return type + '/' + fileName;
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
  //   removeFile(fileName: string) {

  //   }
}
