export const builder = () => {
  const handler = async () => {
    console.log("Hello from function 2!");

    return {
      statusCode: 200,
    };
  };

  return handler;
};

export const main = builder();
