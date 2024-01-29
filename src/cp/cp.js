import {spawn} from 'child_process';

const spawnChildProcess = async (args) => {
    const options = {
        stdio: [ 'pipe', 'pipe', 'pipe' ]
    };

    const child = spawn('node', ['src/cp/files/script.js', ...(args || [])], options);
    child.stdout.pipe(process.stdout);
    child.stdin.write("Message to child");
};

// Put your arguments in function call to test this functionality
spawnChildProcess( /* [someArgument1, someArgument2, ...] */);
