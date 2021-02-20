import fs from 'fs';

function deleteOtherFiles(files: string[][], indexToKeep: number): void {
  files.splice(indexToKeep, 1);

  const filesForDeletion: string[] = [].concat(...files);
  let i = filesForDeletion.length;
  if (i < 1) throw new Error('No files for deletion');

  filesForDeletion.forEach(function (file) {
    fs.unlink(file, function (err) {
      i--;
      if (err) throw err;
      else if (i <= 0) {
        return;
      }
    });
  });
}

export { deleteOtherFiles };
