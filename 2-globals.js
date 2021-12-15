// Ctrl + ' -> Open terminal or switch to terminal
// node app.js or note app to run code 
// Ctrl+C to stop
// clear to clean the terminal

// GLOBALS - NO WINDOW

// __dirname - path tu current directory
// __filename - file name
// require - function to use modules (CommumJS)
// module - info about current module (file)
// process - info about env where the program is being executed
console.log(`Executing...`);
console.log(`  Directory name: ${__dirname}`);
console.log(`  File name: ${__filename}`);

const interval = 1000
setInterval(() => {
    console.log('hello World');
}, interval);
