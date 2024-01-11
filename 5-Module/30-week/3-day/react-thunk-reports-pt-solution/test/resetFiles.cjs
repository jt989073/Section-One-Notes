const { exec } = require('child_process');

// all files in the /test/original-files folder will replace those files in the
// equivalent path in the root directory
const replaceFilesScript = `
destination_dir=.
original_dir=./test/original-files
find "$original_dir" -type f -exec bash -c 'cp -v $0 "\${0/$1/$2}"' {} $original_dir $destination_dir \\;
`;

const resetFiles = async function () {
  return new Promise((resolve, reject) => {
    const replaceFilesProcess = exec(
      replaceFilesScript,
      { env: process.env },
      err => (err ? reject(err): resolve())
    );
    replaceFilesProcess.stdout.on('data', function(data) {
      console.log(data);
    });
  }
)};

resetFiles();
