import { atom } from "recoil";
import User from "../interfaces/User";

export default atom({
  key: "userState",
  default: <User[]>[],
});
