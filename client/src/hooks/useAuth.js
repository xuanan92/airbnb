import { useSelector } from "react-redux";
import { selectCurrentToken } from "../features/auth/authSlice";
import { jwtDecode } from "jwt-decode";

const useAuth = () => {
  const token = useSelector(selectCurrentToken);
  let isHost = false;
  let isGuest = false;
  let status = "Guest";

  if (token) {
    const decoded = jwtDecode(token);
    const { email, roles } = decoded.UserInfo;

    isHost = roles.includes("Host");
    isGuest = roles.includes("Guest");

    if (isHost) status = "Host";
    if (isGuest) status = "Guest";

    return { email, roles, isHost, isGuest, status };
  }

  return { email: "", roles: [], isHost, isGuest, status };
};
export default useAuth;
