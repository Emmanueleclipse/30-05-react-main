export default (myFile) => {
  return new Promise((resolve, reject) => {
    const fileReader = new FileReader();

    if (fileReader && myFile) {
      fileReader.readAsDataURL(myFile);
      fileReader.onload = () => {
        resolve(fileReader.result);
      };
      fileReader.onerror = (error) => {
        reject(error);
      };
    } else {
      reject(new Error('No file provided'));
    }
  });
};
