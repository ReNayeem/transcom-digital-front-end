"use client";

export default function Payment() {
  const handlePayment = async () => {
    const res = await fetch("/api/payment", { method: "GET" });
    const data = await res.json();
    console.log(data.url);
  };

  return <button onClick={handlePayment}>Pay</button>;
}
