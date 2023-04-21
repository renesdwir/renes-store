import Cookies from "js-cookie";
import Footer from "./Footer";
import MenuItem from "./MenuItem";
import Profile from "./Profile";
import { useRouter } from "next/router";

interface SideBarProps {
  activeMenu: "overview" | "transactions" | "settings";
}
export default function SideBar(props: SideBarProps) {
  const router = useRouter();
  const { activeMenu } = props;
  const onLogOut = () => {
    Cookies.remove("token");
    router.push("/sign-in");
  };
  return (
    <section className="sidebar">
      <div className="content pt-50 pb-30 ps-30">
        <Profile />
        <div className="menus">
          <MenuItem
            title="Overview"
            icon="overview"
            href="/member"
            active={activeMenu === "overview"}
          />
          <MenuItem
            title="Transactions"
            icon="transactions"
            href="/member/transactions"
            active={activeMenu === "transactions"}
          />
          <MenuItem title="Messages" icon="messages" href="/member" />
          <MenuItem title="Card" icon="card" href="/member" />
          <MenuItem title="Rewards" icon="rewards" href="/member" />
          <MenuItem
            title="Settings"
            icon="settings"
            href="/member/edit-profile"
            active={activeMenu === "settings"}
          />
          <MenuItem title="Log Out" icon="logout" onClick={onLogOut} />
        </div>
        <Footer />
      </div>
    </section>
  );
}
