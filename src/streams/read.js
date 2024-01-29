import {createReadStream} from 'node:fs';
const read = async () => {
    const stream = createReadStream('src/streams/files/fileToRead.txt');
    stream.on('data', d => process.stdout.write(d.toString()));
};

await read();