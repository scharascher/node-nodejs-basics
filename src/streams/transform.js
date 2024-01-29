import { compose, Transform, Writable, Readable, Duplex } from 'node:stream';

const transform = async () => {
    const transformStream = new Transform({
        transform(chunk, encoding, callback) {
            this.push(chunk.toString().split('').reverse().join(''));
            callback();
        }
    })
      
    process.stdin.pipe(transformStream).pipe(process.stdout);
};

await transform();