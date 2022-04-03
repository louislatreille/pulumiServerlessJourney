import * as apigateway from "@pulumi/aws-apigateway";
import * as aws from "@pulumi/aws";

export const api = new apigateway.RestAPI("pulumi-serverless-journey", {
  stageName: "dev",
  routes: [
    {
      path: "/function1",
      method: "POST",
      eventHandler: new aws.lambda.CallbackFunction("function1", {
        callback: async () => {
          console.log("Hello from function 1!");

          return {
            statusCode: 200,
          };
        },
      }),
    },
    {
      path: "/function2",
      method: "POST",
      eventHandler: new aws.lambda.CallbackFunction("function2", {
        callback: async () => {
          console.log("Hello from function 2!");

          return {
            statusCode: 200,
          };
        },
      }),
    },
    {
      path: "/function3",
      method: "POST",
      eventHandler: new aws.lambda.CallbackFunction("function3", {
        callback: async () => {
          console.log("Hello from function 3!");

          return {
            statusCode: 200,
          };
        },
      }),
    },
  ],
});
