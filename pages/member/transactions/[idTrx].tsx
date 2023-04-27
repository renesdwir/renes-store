import jwtDecode from "jwt-decode";
import SideBar from "../../../components/sections/SideBar";
import TransactionDetailContent from "../../../components/sections/TransactionDetailContent";
import { JWTPayloadTypes, UserTypes } from "../../../services/dataTypes";
import { getTransactionDetail } from "../../../services/member";

export default function TransactionsDetail({ transactionDetail }) {
  return (
    <section className="transactions-detail overflow-auto">
      <SideBar activeMenu="transactions" />
      <TransactionDetailContent />
    </section>
  );
}
interface GetServerSideProps {
  req: {
    cookies: {
      token: string;
    };
  };
  params: {
    idTrx: string;
  };
}
export async function getServerSideProps({ req, params }: GetServerSideProps) {
  const { token } = req.cookies;
  const { idTrx } = params;
  if (!token) {
    return {
      redirect: {
        destination: "/sign-in",
        permanent: false,
      },
    };
  }

  const jwtToken = Buffer.from(token, "base64").toString("ascii");
  const payload: JWTPayloadTypes = jwtDecode(jwtToken);
  const userPayload: UserTypes = payload.player;
  const IMG = process.env.NEXT_PUBLIC_IMG;
  userPayload.avatar = `${IMG}/${userPayload.avatar}`;
  const response = await getTransactionDetail(idTrx, jwtToken);

  return {
    props: {
      transactionDetail: response.data,
    },
  };
}
