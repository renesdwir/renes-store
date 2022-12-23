import SideBar from "../../../components/sections/SideBar";
import TransactionDetailContent from "../../../components/sections/TransactionDetailContent";

export default function TransactionsDetail() {
  return (
    <section className="transactions-detail overflow-auto">
      <SideBar />
      <TransactionDetailContent />
    </section>
  );
}
