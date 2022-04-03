import { createFunctionHandler } from "@resources/createFunctionHandler";
import type { AWS } from "@serverless/typescript";

const serverlessConfiguration: AWS = {
  service: "pulumi-serverless-journey",
  frameworkVersion: "3",
  provider: {
    name: "aws",
    runtime: "nodejs14.x",
    region: "us-east-1",
    stage: "dev",
    environment: {
      AWS_NODEJS_CONNECTION_REUSE_ENABLED: "1",
    },
  },
  plugins: ["serverless-bundle", "serverless-iam-roles-per-function"],
  custom: {},
  package: {
    individually: true,
  },
  functions: {
    function1: createFunctionHandler("function1", "/function1", "POST"),
    function2: createFunctionHandler("function2", "/function2", "POST"),
    function3: createFunctionHandler("function3", "/function3", "POST"),
  },
  resources: {
    Resources: {},
  },
};

module.exports = serverlessConfiguration;
