import Image from "next/image";
import Auth from "./Auth";
import Menu from "./Menu";
import ToggleMenu from "./ToggleMenu";
import { NavClassName } from "../../../styles/grouping-classname";

export default function Navbar() {
  return (
    <section>
      <nav className={NavClassName}>
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <Image src="/icon/logo.svg" alt="" width={60} height={60} />
          </a>
          <ToggleMenu />
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto text-lg gap-lg-0 gap-2">
              <Menu title={"Home"} href={"/"} active />
              <Menu title={"Games"} href={"/"} />
              <Menu title={"Rewards"} href={"/"} />
              <Menu title={"Discover"} href={"/"} />
              <Menu title={"Global Rank"} href={"/"} />
              <Auth />
            </ul>
          </div>
        </div>
      </nav>
    </section>
  );
}
