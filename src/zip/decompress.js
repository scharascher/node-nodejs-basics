import {createWriteStream, createReadStream} from 'fs';
import zlib from 'zlib';

const decompress = async () => {
    const gz = zlib.createUnzip();
    gz.on('error', (error) => {    
        console.log(error.stack);   
    });
    const filePath = 'src/zip/files/archive.gz';
    const input = createReadStream(filePath);
    const output = createWriteStream('src/zip/files/fileToCompress.txt');
    output.on('error', (error) => {    
        console.log(error.stack);       
    });
    output.on('finish', () => {
        console.log("Write success.");   
    });
    input.pipe(gz).pipe(output);
}
await decompress();