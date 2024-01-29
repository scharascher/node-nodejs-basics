import {createReadStream} from 'fs';
import {createHash} from 'crypto';

const calculateHash = async () => {
    createReadStream('src/hash/files/fileToCalculateHashFor.txt')
        .pipe(createHash('sha256')
        .setEncoding('hex'))
        .on('finish', function () {
            console.log(this.read());
        })
};

await calculateHash();