const fs = require('fs');
const path = require('path');

// Define Logs directory path
const logsDir = path.resolve(__dirname, 'Logs');

// Function to delete all files in Logs directory and remove the directory
const removeLogs = () => {
    // Check if the Logs directory exists
    fs.access(logsDir, fs.constants.F_OK, (err) => {
        if (err) {
            console.log('Logs directory not found.');
        } else {
            // Read files in the Logs directory
            fs.readdir(logsDir, (err, files) => {
                if (err) {
                    console.error('Error reading directory:', err);
                    return;
                }

                // Iterate over files and remove them
                files.forEach((file) => {
                    const filePath = path.join(logsDir, file);
                    fs.unlink(filePath, (err) => {
                        if (err) {
                            console.error(`Error deleting file: ${file}`, err);
                        } else {
                            console.log(`Deleted file: ${file}`);
                        }
                    });
                });

                // Once all files are deleted, remove the Logs directory
                fs.rmdir(logsDir, (err) => {
                    if (err) {
                        console.error('Error removing Logs directory:', err);
                    } else {
                        console.log('Logs directory successfully removed.');
                    }
                });
            });
        }
    });
};
// Execute the function to remove logs
removeLogs();