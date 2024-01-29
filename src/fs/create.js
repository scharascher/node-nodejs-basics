import {appendFile, access, constants} from 'node:fs';

const create = async () => {
    const FILE_PATH = 'src/fs/files/fresh.txt';
    access(FILE_PATH, constants.F_OK, (err) => {
        if (!err) throw Error('FS operation failed');
        appendFile(FILE_PATH, 'I am fresh and young', function (err) {});
    });
    
};

await create();