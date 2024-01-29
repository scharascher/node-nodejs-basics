import {createWriteStream, createReadStream} from 'fs';
import zlib from 'zlib';

const compress = async () => {
    const gz = zlib.createGzip();
    gz.on('error', (error) => {    
        console.log(error.stack);   
    });
    const filePath = 'src/zip/files/fileToCompress.txt';
    const input = createReadStream(filePath);
    const output = createWriteStream('src/zip/files/archive.gz');
    output.on('error', (error) => {    
        console.log(error.stack);       
    });
    output.on('finish', () => {
        console.log("Write success.");   
    });
    input.pipe(gz).pipe(output);
};

await compress();