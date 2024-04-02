import React, { useState, useEffect } from 'react';
import { stockMarketAPI } from '../../utils/apis';

const CryptoCard = ({ currency, symbol }) => {
  const [price, setPrice] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currencyData, setCurrencyData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const fetchData = await fetch(stockMarketAPI);
        const data = await fetchData.json();
        setCurrencyData(data?.bpi);
        const currencyPrice = data?.bpi[currency]?.rate;
        setPrice(currencyPrice);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching cryptocurrency price:', error);
        setError('Error fetching data');
        setLoading(false);
      }
    };

    fetchData();
  }, [currency]);

  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-gray-800 text-white mr-5 mt-5 p-10">
      <div>
        <h2 className="font-semibold text-lg mb-2">Bitcoin ({currency})</h2>
        {loading ? (
          <p className="text-gray-400">Loading...</p>
        ) : error ? (
          <p className="text-red-500">{error}</p>
        ) : (
          <>
            <p className="text-gray-400">{currencyData[currency]?.description}</p>
            <p className="text-2xl font-bold">{symbol} {price}</p>
          </>
        )}
      </div>
    </div>
  );
};

export default CryptoCard;
