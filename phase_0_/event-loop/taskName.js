export default function taskName(choice){
    return {
    '1': 'setTimeout 0ms',
    '2': 'setImmediate',
    '3': 'process.nextTick',
    '4': 'Promise.then',
    '5': 'I/O callback'
    }[choice]
}