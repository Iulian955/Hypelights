import * as functions from "firebase-functions";
import { remoteAddress} from "./../constants/address";
const localHost = remoteAddress ;
console.log("Local host iss:", localHost);
export const applyCORSpolicy = (response: functions.Response<any>) => { 
  response.header("Access-Control-Allow-Origin","*");
  response.header("Access-Control-Allow-Credentials", "true");
  response.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  response.header("Access-Control-Allow-Methods", "PUT, POST, GET, DELETE, OPTIONS");
};
  