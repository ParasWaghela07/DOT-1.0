function downloadFile(url, progressCallback, completionCallback) {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", url);
    xhr.responseType = "blob"; // Specify the response type as blob
  
    xhr.addEventListener("progress", (event) => {
      // Calculate the progress percentage and invoke the progress callback
      const progress = Math.round((event.loaded / event.total) * 100);
      progressCallback(progress);
    });
  
    xhr.addEventListener("load", () => {
      // Invoke the completion callback with the downloaded blob object
      completionCallback(xhr.response);
    });
  
    xhr.send();
  }
  
  // Test case
  const url = "https://dot-batch-project-assets.vercel.app/devdetective-images.zip";
  downloadFile(
    url,
    (progress) => console.log(`Download progress: ${progress}%`), // progress callback logs the progress percentage
    (blob) => console.log(`File downloaded. Blob size: ${blob.size} bytes`) // completion callback logs the size of the downloaded blob
  );