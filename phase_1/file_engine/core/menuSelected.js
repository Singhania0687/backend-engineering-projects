
// ------------------------ MENU HELPER ------------------------ //

export default function menuselected(choice) {
    return {
        '1': 'Create Folder',
        '2': 'Upload File',
        '3': 'List Files',
        '4': 'Read File',
        '5': 'Rename File / Folder',
        '6': 'Delete File / Folder',
        '7': 'Exit'
    }[choice];
}
