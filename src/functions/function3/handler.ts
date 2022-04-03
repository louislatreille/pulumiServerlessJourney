export const builder = () => {
  const handler = async () => {
    console.log("Hello from function 3!");

    return {
      statusCode: 200,
    };
  };

  return handler;
};

export const main = builder();
