import Cookies from "js-cookie";
import Link from "next/link";
import jwtDecode from "jwt-decode";

import { useEffect, useState } from "react";
import { JWTPayloadTypes, UserTypes } from "../../../services/dataTypes";
import { useRouter } from "next/router";

export default function Auth() {
  const router = useRouter();
  const [isLogin, setIsLogin] = useState(false);
  const [user, setUser] = useState({
    avatar: "",
    email: "",
    id: "",
    name: "",
    username: "",
  });
  useEffect(() => {
    const token = Cookies.get("token");
    if (token) {
      const jwtToken = atob(token);
      const payload: JWTPayloadTypes = jwtDecode(jwtToken);
      const userFromPayload: UserTypes = payload.player;
      const IMG = process.env.NEXT_PUBLIC_IMG;
      userFromPayload["avatar"] = `${IMG}/${userFromPayload.avatar}`;
      setIsLogin(true);
      setUser(userFromPayload);
    }
  }, []);

  const onLogout = () => {
    Cookies.remove("token");
    router.push("/");
    setIsLogin(false);
  };
  if (isLogin) {
    return (
      <li className="nav-item my-auto dropdown d-flex">
        <div className="vertical-line d-lg-block d-none"></div>
        <div>
          <a
            className="dropdown-toggle ms-lg-40"
            href="#"
            role="button"
            id="dropdownMenuLink"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <img
              src={user.avatar}
              className="rounded-circle"
              width="40"
              height="40"
              alt=""
            />
          </a>

          <ul
            className="dropdown-menu border-0"
            aria-labelledby="dropdownMenuLink"
          >
            <li>
              <Link
                className="dropdown-item text-lg color-palette-2"
                href="/member"
              >
                My Profile
              </Link>
            </li>
            <li>
              <Link className="dropdown-item text-lg color-palette-2" href="">
                Wallet
              </Link>
            </li>
            <li>
              <Link
                className="dropdown-item text-lg color-palette-2"
                href="/member/edit-profile"
              >
                Account Settings
              </Link>
            </li>
            <li onClick={onLogout}>
              <a className="dropdown-item text-lg color-palette-2" href="#">
                Log Out
              </a>
            </li>
          </ul>
        </div>
      </li>
    );
  }
  return (
    <li className="nav-item my-auto">
      <Link
        href={"/sign-in"}
        className="btn btn-sign-in d-flex justify-content-center ms-lg-2 rounded-pill"
        role="button"
      >
        Sign In
      </Link>
    </li>
  );
}
