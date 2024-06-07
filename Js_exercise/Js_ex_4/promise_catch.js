function handlePromiseError(promise, errorMessage) {
    promise.catch(error => {
      console.error(errorMessage, error);
    });
  }