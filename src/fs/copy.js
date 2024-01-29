import {cp} from 'node:fs/promises';
import {existsSync} from 'node:fs';

const FILES_PATH = 'src/fs/files';
const FILES_COPY_PATH = 'src/fs/files_copy';
const copy = async () => {
    const baseExists = existsSync(FILES_PATH);
    const copyExists = existsSync(FILES_COPY_PATH);
    if (!baseExists || copyExists) throw Error('FS operation failed');
    await cp(FILES_PATH, FILES_COPY_PATH, {recursive: true});
};

await copy();
