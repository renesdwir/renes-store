import SideBar from "../../../components/sections/SideBar";
import TransactionContent from "../../../components/sections/TransactionContent";

export default function Transactions() {
  return (
    <section className="transactions overflow-auto">
      <SideBar activeMenu="transactions" />
      <TransactionContent />
    </section>
  );
}
