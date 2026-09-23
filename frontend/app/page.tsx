"use client";

import { useState } from "react";

export default function Home() {
  const [amount, setAmount] = useState("");
  const [moneyLocation, setMoneyLocation] = useState("");
  const [step, setStep] = useState(1);

  const handleMoneyLocation = (location: string) => {
    setMoneyLocation(location);
    setStep(3);
  };

  return (
    <main>
      <h1>AI Money Engine</h1>

      <p>
        Understand your idle money and explore where it could potentially
        be deployed based on your needs.
      </p>

      {step === 1 && (
        <>
          <h2>Let's understand your money</h2>

          <label>
            How much surplus money do you currently have?
          </label>

          <br />
          <br />

          <input
            type="number"
            placeholder="Enter amount in ₹"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />

          <br />
          <br />

          <button
            onClick={() => setStep(2)}
            disabled={!amount}
          >
            Continue
          </button>
        </>
      )}

      {step === 2 && (
        <>
          <h2>Where is this money currently kept?</h2>

          <button onClick={() => handleMoneyLocation("Savings Account")}>
            Savings Account
          </button>

          <button onClick={() => handleMoneyLocation("Current Account")}>
            Current Account
          </button>

          <button onClick={() => handleMoneyLocation("Fixed Deposit")}>
            Fixed Deposit
          </button>

          <button onClick={() => handleMoneyLocation("Cash")}>
            Cash
          </button>

          <button onClick={() => handleMoneyLocation("Existing Investment")}>
            Existing Investment
          </button>

          <button onClick={() => handleMoneyLocation("Other")}>
            Other
          </button>
        </>
      )}

      {step === 3 &&(
        <>
          <h2>Approximately what return are you earning on this money?</h2>

          <input
            type="number"
            placeholder="Enter approximate return %"
          />

          <br />
          <br />

          <button>Continue</button>
        </>
      )}
    </main>
  );
}