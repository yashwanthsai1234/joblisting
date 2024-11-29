const { exec } = require('child_process');

const runSimilarityCheck = (resumePath, jobDescription) => {
  return new Promise((resolve, reject) => {
    const command = `python3 path/to/similarity_api.py --resume "${resumePath}" --description "${jobDescription}"`;
    exec(command, (error, stdout, stderr) => {
      if (error) {
        return reject(`Error: ${stderr}`);
      }
      resolve(stdout.trim());
    });
  });
};

module.exports = runSimilarityCheck;

