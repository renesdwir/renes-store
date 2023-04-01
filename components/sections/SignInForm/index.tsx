import Link from "next/link";
import { useState } from "react";

export default function SignInForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const onSubmit = () => {
    const data = {
      email: email,
      password: password,
    };
  };
  return (
    <>
      <h2 className="text-4xl fw-bold color-palette-1 mb-10">Sign In</h2>
      <p className="text-lg color-palette-1 m-0">
        Masuk untuk melakukan proses top up
      </p>
      <div className="pt-50">
        <label
          htmlFor="email"
          className="form-label text-lg fw-medium color-palette-1 mb-10"
        >
          Email Address
        </label>
        <input
          type="email"
          className="form-control rounded-pill text-lg"
          name="email"
          aria-describedby="email"
          placeholder="Enter your email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="pt-30">
        <label
          htmlFor="password"
          className="form-label text-lg fw-medium color-palette-1 mb-10"
        >
          Password
        </label>
        <input
          type="password"
          className="form-control rounded-pill text-lg"
          name="password"
          aria-describedby="password"
          placeholder="Your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div className="button-group d-flex flex-column mx-auto pt-50">
        <button
          type="button"
          className="btn btn-sign-in fw-medium text-lg text-white rounded-pill mb-16"
        >
          Continue to Sign In
        </button>
        {/* <button type="submit"
                                className="btn btn-sign-in fw-medium text-lg text-white rounded-pill mb-16"
                                role="button">Continue to Sign In</button>  */}
        <Link
          className="btn btn-sign-up fw-medium text-lg color-palette-1 rounded-pill"
          href="/sign-up"
          role="button"
          onSubmit={onSubmit}
        >
          Sign Up
        </Link>
      </div>
    </>
  );
}
