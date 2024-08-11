import { useEffect, useState } from "react";
import axios from "axios";

function useCurrencyInfo(currency) {
  let URL = `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/inr.json`;
  const [data, setData] = useState({});
  console.log("currency" + currency);
  //   let response = axios.get(URL);

  useEffect(() => {
    fetch(URL)
      .then((res) => {
        //res.json();
        console.log("res11111" + JSON.stringify(res));
      })
      .then((res) => {
        console.log("res" + res);
        setData(res[currency]);
      });
  }, [currency]);
  console.log("hello" + data);
  return data;
}

export default useCurrencyInfo;
