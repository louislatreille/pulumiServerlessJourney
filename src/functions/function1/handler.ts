export const builder = () => {
  const handler = async () => {
    console.log("Hello from function 1!");

    return {
      statusCode: 200,
    };
  };

  return handler;
};

export const main = builder();
