import { readFile } from 'node:fs/promises';

const read = async () => {
    try {console.log(await readFile('src/fs/files/fileToRead.txt', 'utf-8'));}
    catch {throw Error('FS operation failed');}
};

await read();