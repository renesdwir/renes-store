import Link from "next/link";
import {
  BanksTypes,
  NominalsTypes,
  PaymentTypes,
} from "../../../services/dataTypes";
import NominalItem from "./NominalItem";
import PaymentItem from "./PaymentItem";
import { useState } from "react";
import { useRouter } from "next/router";
import { toast } from "react-toastify";

interface TopUpFormProps {
  nominals: NominalsTypes[];
  payments: PaymentTypes[];
}
export default function TopUpForm(props: TopUpFormProps) {
  const router = useRouter();
  const { nominals, payments } = props;
  const [verifyID, setVerifyID] = useState("");
  const [bankAccountName, setBankAccountName] = useState("");
  const [nominalItem, setNominalItem] = useState({});
  const [paymentItem, setPaymentItem] = useState({});
  const onNominalItemChange = (data: NominalsTypes) => {
    // localStorage.setItem("nominal-item", JSON.stringify(data));
    setNominalItem(data);
  };
  const onPaymentItemChange = (payment: PaymentTypes, bank: BanksTypes) => {
    const _data = {
      payment,
      bank,
    };
    setPaymentItem(_data);
    // localStorage.setItem("payment-item", JSON.stringify(_data));
  };
  const onSubmit = () => {
    if (
      verifyID === "" ||
      bankAccountName === "" ||
      Object.keys(nominalItem).length === 0 ||
      Object.keys(paymentItem).length === 0
    ) {
      toast.error("Please fill in all data");
    } else {
      const data = {
        verifyID,
        bankAccountName,
        nominalItem,
        paymentItem,
      };
      localStorage.setItem("data-topup", JSON.stringify(data));
      router.push("/checkout");
    }
  };
  return (
    <>
      <div className="pt-md-50 pt-30">
        <div className="">
          <label
            htmlFor="ID"
            className="form-label text-lg fw-medium color-palette-1 mb-10"
          >
            Verify ID
          </label>
          <input
            type="text"
            className="form-control rounded-pill text-lg"
            id="ID"
            name="ID"
            aria-describedby="verifyID"
            placeholder="Enter you  r ID"
            value={verifyID}
            onChange={(e) => setVerifyID(e.target.value)}
          />
        </div>
      </div>
      <div className="pt-md-50 pb-md-50 pt-30 pb-20">
        <p className="text-lg fw-medium color-palette-1 mb-md-10 mb-0">
          Nominal Top Up
        </p>
        <div className="row justify-content-between">
          {nominals.map((nominal) => (
            <NominalItem
              key={nominal._id}
              _id={nominal._id}
              coinQuantity={nominal.coinQuantity}
              coinName={nominal.coinName}
              price={nominal.price}
              onChange={() => onNominalItemChange(nominal)}
            />
          ))}

          <div className="col-lg-4 col-sm-6"></div>
        </div>
      </div>
      <div className="pb-md-50 pb-20">
        <p className="text-lg fw-medium color-palette-1 mb-md-10 mb-0">
          Payment Method
        </p>
        <fieldset id="paymentMethod">
          <div className="row justify-content-between">
            {payments?.map((payment) => {
              return payment.banks.map((bank) => {
                return (
                  <PaymentItem
                    bankId={bank._id}
                    type={payment.type}
                    name={bank.bankName}
                    onChange={() => onPaymentItemChange(payment, bank)}
                  />
                );
              });
            })}
            <div className="col-lg-4 col-sm-6"></div>
          </div>
        </fieldset>
      </div>
      <div className="pb-50">
        <label
          htmlFor="bankAccount"
          className="form-label text-lg fw-medium color-palette-1 mb-10"
        >
          Bank Account Name
        </label>
        <input
          type="text"
          className="form-control rounded-pill text-lg"
          id="bankAccount"
          name="bankAccount"
          aria-describedby="bankAccount"
          placeholder="Enter your Bank Account Name"
          value={bankAccountName}
          onChange={(e) => setBankAccountName(e.target.value)}
        />
      </div>
      <div className="d-sm-block d-flex flex-column w-100">
        <button
          type="button"
          className="btn btn-submit rounded-pill fw-medium text-white border-0 text-lg"
          onClick={onSubmit}
        >
          Continue
        </button>
      </div>
    </>
  );
}
