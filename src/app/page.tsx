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

  const company = {
    "Symbol": "TSLA",
    "AssetType": "Common Stock",
    "Name": "Tesla Inc",
    "Description": "Tesla, Inc. is an American electric vehicle and clean energy company based in Palo Alto, California. Tesla's current products include electric cars, battery energy storage from home to grid-scale, solar panels and solar roof tiles, as well as other related products and services. In 2020, Tesla had the highest sales in the plug-in and battery electric passenger car segments, capturing 16% of the plug-in market (which includes plug-in hybrids) and 23% of the battery-electric (purely electric) market. Through its subsidiary Tesla Energy, the company develops and is a major installer of solar photovoltaic energy generation systems in the United States. Tesla Energy is also one of the largest global suppliers of battery energy storage systems, with 3 GWh of battery storage supplied in 2020.",
    "CIK": "1318605",
    "Exchange": "NASDAQ",
    "Currency": "USD",
    "Country": "USA",
    "Sector": "MANUFACTURING",
    "Industry": "MOTOR VEHICLES & PASSENGER CAR BODIES",
    "Address": "3500 DEER CREEK RD, PALO ALTO, CA, US",
    "FiscalYearEnd": "December",
    "LatestQuarter": "2024-03-31",
    "MarketCapitalization": "554888921000",
    "EBITDA": "12265000000",
    "PERatio": "44.5",
    "PEGRatio": "2.982",
    "BookValue": "20.19",
    "DividendPerShare": "None",
    "DividendYield": "None",
    "EPS": "3.91",
    "RevenuePerShareTTM": "29.8",
    "ProfitMargin": "0.144",
    "OperatingMarginTTM": "0.055",
    "ReturnOnAssetsTTM": "0.0472",
    "ReturnOnEquityTTM": "0.237",
    "RevenueTTM": "94745002000",
    "GrossProfitTTM": "20853000000",
    "DilutedEPSTTM": "3.91",
    "QuarterlyEarningsGrowthYOY": "-0.534",
    "QuarterlyRevenueGrowthYOY": "-0.087",
    "AnalystTargetPrice": "179.72",
    "AnalystRatingStrongBuy": "5",
    "AnalystRatingBuy": "12",
    "AnalystRatingHold": "21",
    "AnalystRatingSell": "6",
    "AnalystRatingStrongSell": "4",
    "TrailingPE": "44.5",
    "ForwardPE": "67.57",
    "PriceToSalesRatioTTM": "5.67",
    "PriceToBookRatio": "8.35",
    "EVToRevenue": "12.42",
    "EVToEBITDA": "58.23",
    "Beta": "2.408",
    "52WeekHigh": "299.29",
    "52WeekLow": "138.8",
    "50DayMovingAverage": "170.87",
    "200DayMovingAverage": "215.97",
    "SharesOutstanding": "3189200000",
    "DividendDate": "None",
    "ExDividendDate": "None"
  }

  return (
    <>
      <Navigation />

      <main className="flex min-h-screen flex-col items-center justify-between px-24 py-4">
        <CompanyHeader company={company} />
        <StockGraph />
        <CompanyDetails company={company} />
      </main>
    </>
  );
}
