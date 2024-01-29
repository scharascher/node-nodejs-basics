import { promises, existsSync } from 'node:fs';

const PATH = 'src/fs/files/fileToRemove.txt';

const remove = async () => {
    const exists = existsSync(PATH);
    if (!exists) throw Error('FS operation failed');
    await promises.unlink(PATH);
};

await remove();