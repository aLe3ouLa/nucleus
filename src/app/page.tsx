"use client";
import CompanyDetails from "@/components/CompanyDetails";
import CompanyHeader from "@/components/CompanyHeader";
import Navigation from "@/components/Navigation";
import StockGraph from "@/components/StockGraph";
import { buildStocksUrls } from "@/utils/buildStocksUrl";

// const getIncomeStatement = async () => {
//   const url = buildStocksUrls("OVERVIEW");
//   const options = { method: "GET", headers: { accept: "application/json" } };

//   const response = await fetch(url, options);
//   const data = await response.json();
//   console.log(data)
// };

export default function Home() {
  // const data = getIncomeStatement();

  return (
    <>
      <Navigation />

      <main className="flex min-h-screen flex-col items-center justify-between px-24 py-4">
        <CompanyHeader companyName="Tesla Inc." />
        <StockGraph />
        <CompanyDetails />
      </main>
    </>
  );
}
