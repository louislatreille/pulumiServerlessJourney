export type ServerlessParameter = string | { Ref: string } | { "Fn::GetAtt": string[] };

export type AdditionalPolicyStatement = {
  Action: string[];
  Resource: Array<ServerlessParameter>;
  Effect: "Allow" | "Deny";
};

export type AuthorizerConfig =
  | { arn: ServerlessParameter }
  | {
      name: string;
      identitySource: string;
      type: string;
    };

export const createFunctionHandler = (
  resourceName: string,
  path: string,
  method: string,
  policyStatements: AdditionalPolicyStatement[] = [],
  environmentVariables: { [key: string]: ServerlessParameter } | undefined = undefined,
  timeout = 5,
  memorySize = 256,
) => ({
  handler: `./src/functions/${resourceName}/handler.main`,
  environment: environmentVariables,
  iamRoleStatementsName: `${resourceName}-exec-role-pulumi-serverless-journey`,
  iamRoleStatementsInherit: true,
  iamRoleStatements: policyStatements,
  timeout,
  memorySize,
  events: [
    {
      http: {
        path,
        method,
        cors: true,
      },
    },
  ],
});
