"use client";

import { useState } from "react";

export default function Home() {
  const [amount, setAmount] = useState("");
  const [moneyLocation, setMoneyLocation] = useState("");
  const [returnRate, setReturnRate] = useState("");
  const [step, setStep] = useState(1);
  const [timeHorizon, setTimeHorizon] = useState("");

  const moneyLocations = [
    "Savings Account",
    "Current Account",
    "Fixed Deposit",
    "Cash",
    "Existing Investment",
    "Other",
  ];

  return (
    <main className="container">
      <h1>AI Money Engine</h1>

      <p className="intro">
        Understand your idle money and explore where it could potentially be
        deployed based on your needs.
      </p>

      {step === 1 && (
        <section className="question-section">
          <h2>Let's understand your money</h2>

          <label>How much surplus money do you currently have?</label>

          <input
            className="text-input"
            type="number"
            placeholder="Enter amount in ₹"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />

          <button
            className="continue-button"
            onClick={() => setStep(2)}
            disabled={!amount}
          >
            Continue
          </button>
        </section>
      )}

      {step === 2 && (
        <section className="question-section">
          <h2>Where is this money currently kept?</h2>

          <div className="options-grid">
            {moneyLocations.map((location) => (
              <button
                key={location}
                className={`option-card ${
                  moneyLocation === location ? "selected" : ""
                }`}
                onClick={() => setMoneyLocation(location)}
              >
                {moneyLocation === location && (
                  <span className="checkmark">✓</span>
                )}

                {location}
              </button>
            ))}
          </div>

          <button
            className="continue-button"
            onClick={() => setStep(3)}
            disabled={!moneyLocation}
          >
            Continue
          </button>
        </section>
      )}

      {step === 3 && (
        <section className="question-section">
          <h2>Approximately what return are you earning on this money?</h2>

          <input
            className="text-input"
            type="number"
            placeholder="Enter approximate return %"
            value={returnRate}
            onChange={(e) => setReturnRate(e.target.value)}
          />

          <button
            className="continue-button"
            onClick={() => setStep(4)}
            disabled={!returnRate}
          >
            Continue
          </button>
        </section>
      )}

      {step === 4 && (
        <section className="question-section">
          <h2>When might you need this money?</h2>

          <div className="options-grid">
            {[
              "Within 10 days",
              "Within 3 months",
              "Within 6 months",
              "Within 1 year",
              "1–3 years",
              "More than 3 years",
            ].map((option) => (
              <button
                key={option}
                className={`option-card ${
                  timeHorizon === option ? "selected" : ""
                }`}
                onClick={() => setTimeHorizon(option)}
              >
                {timeHorizon === option && <span className="checkmark">✓</span>}

                {option}
              </button>
            ))}
          </div>

          <button
            className="continue-button"
            disabled={!timeHorizon}
            onClick={() => setStep(5)}
          >
            Continue
          </button>
        </section>
      )}
    </main>
  );
}
