import {Worker} from 'worker_threads';
import {cpus} from 'node:os'

const performCalculations = async () => {
    const numberOfCores = cpus().length;
    const promises = [];
    const createWorker = (n) => new Promise((resolve, reject) => {
        const worker = new Worker("./src/wt/worker.js", {
            workerData: {n},
        });
        worker.on('message', resolve);
        worker.on('error', reject);
        worker.on('exit', (code) => {
            if (code !== 0)
            reject(new Error(`Worker stopped with exit code ${code}`));
        });
    });
    for (let i = 0; i< numberOfCores; i++) {
        promises.push(createWorker(10 + i));
    }
    const result = await Promise.allSettled(promises);
    console.log(result.map(r => {
        return {
            status: r.status === 'fulfilled'?'resolved':'error',
            value: r.status === 'fulfilled'?r.value:null
        }
    }));
};

await performCalculations();