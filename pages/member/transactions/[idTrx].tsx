import jwtDecode from "jwt-decode";
import SideBar from "../../../components/sections/SideBar";
import TransactionDetailContent from "../../../components/sections/TransactionDetailContent";
import { JWTPayloadTypes, UserTypes } from "../../../services/dataTypes";

export default function TransactionsDetail() {
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
}
export async function getServerSideProps({ req }: GetServerSideProps) {
  const { token } = req.cookies;
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
  return {
    props: {
      user: userPayload,
    },
  };
}
