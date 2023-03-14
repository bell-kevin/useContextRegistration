import { createContext } from "react";

const UserContext = createContext({
  firstName: "",
  lastName: "",
  phone: "",
  email: "",
});

export default UserContext;
