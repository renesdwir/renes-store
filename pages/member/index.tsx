import OverviewContent from "../../components/sections/OverviewContent";
import SideBar from "../../components/sections/SideBar";

export default function Member() {
  return (
    <section className="overview overflow-auto">
      <SideBar activeMenu="overview" />
      <OverviewContent />
    </section>
  );
}
