export async function getRandomNumber(): Promise<number> {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(Math.floor(Math.random() * 10000));
      }, 800); //wait before getting resolved
    });
  }