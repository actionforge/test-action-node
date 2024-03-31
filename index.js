const core = require('@actions/core');


const printEnvironment = core.getBooleanInput('environment', { required: false });
if (printEnvironment) {
    console.log(`Working directory: ${process.cwd()}`);
    console.log(`Current directory: ${__dirname}`);
    console.log(`Home directory: ${process.env.HOME}`);
    console.log(`Environment: ${JSON.stringify(process.env, null, 2)}`);
}


const input1 = core.getInput('input1', { required: false });
if (!['lorem', 'ipsum', 'dolor'].includes(input1)) {
    throw new Error(`Invalid input1 value: ${input1}`);
}

const input2 = core.getInput('input2', { required: false });
if (!['lorem', 'ipsum', 'dolor'].includes(input2)) {
    throw new Error(`Invalid input2 value: ${input2}`);
}

core.setOutput('output1', 'this output1 is set by test-action-node');
core.setOutput('output2', 'this output2 is set by test-action-node');

core.addPath(`/foo/bar/test-action-node`);
core.exportVariable('MY_ENV', `this env modified by test-action-node and input1 value is '${input1}'`);