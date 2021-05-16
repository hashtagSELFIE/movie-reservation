import { CognitoUserPool } from "amazon-cognito-identity-js";

const poolData = {
  UserPoolId: "ap-southeast-1_lqAyEnv0b",
  ClientId: "61rmrsh4qoitfm4vq5nams567p",
};

// const poolData = {
//   UserPoolId: process.env.NEXT_PUBLIC_USERPOOLID,
//   ClientId: process.env.NEXT_PUBLIC_CLIENTID
// }

const UserPool = new CognitoUserPool(poolData);

export default UserPool;
