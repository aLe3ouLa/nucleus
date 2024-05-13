export const buildStocksUrls = ({ functionName }: { functionName: string }) => {
  const urlParams = new URLSearchParams({
    apikey: process.env.NEXT_PUBLIC_API_KEY || "",
    function: functionName,
    symbol: "TSLA",
  });

  return `${process.env.NEXT_PUBLIC_STOCKS_API_KEY}?${urlParams.toString()}`;
};
