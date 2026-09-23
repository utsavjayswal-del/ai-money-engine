export default function Home() {
  return (
    <main>
      <h1>AI Money Engine</h1>

      <p>
        Understand your idle money and explore where it could potentially
        be deployed based on your needs.
      </p>

      <h2>Let's understand your money</h2>

      <label>
        How much surplus money do you currently have?
      </label>

      <br />

      <input
        type="number"
        placeholder="Enter amount in ₹"
      />

      <br />
      <br />

      <button>Continue</button>
    </main>
  );
}