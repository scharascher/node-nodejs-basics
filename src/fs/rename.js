import { promises, existsSync } from 'node:fs';

const INITIAL_PATH = 'src/fs/files/wrongFilename.txt';
const RENAME_PATH = 'src/fs/files/properFilename.md';
const rename = async () => {
    const initialExists = existsSync(INITIAL_PATH);
    const renamedExists = existsSync(RENAME_PATH);
    if (!initialExists || renamedExists) throw Error('FS operation failed');
    await promises.rename(INITIAL_PATH, RENAME_PATH);
};

await rename();