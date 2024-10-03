const fs = require('fs');
const path = require('path');

// Define the directory for log files
const logsDir = path.resolve(__dirname, 'Logs');

// Function to check and create Logs directory
const ensureLogDirectory = () => {
    if (!fs.existsSync(logsDir)) {
        fs.mkdirSync(logsDir, { recursive: true });
        console.log('Logs directory created');
    } else {
        console.log('Logs directory already exists');
    }
};

// Function to create log files in the Logs directory
const createLogFiles = (numFiles) => {
    for (let i = 1; i <= numFiles; i++) {
        const logFilePath = path.join(logsDir, `log${i}.txt`);
        fs.writeFileSync(logFilePath, `Log file content for log file ${i}`);
        console.log(`Created file: log${i}.txt`);
    }
};

// Main function to set up logs directory and create log files
const setupLogs = () => {
    ensureLogDirectory();
    process.chdir(logsDir);  // Change to Logs directory
    createLogFiles(10);  // Create 10 log files
};

// Execute the setup
setupLogs();