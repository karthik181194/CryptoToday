import React, { useState,useEffect } from 'react';
import millify from 'millify';
import { Link } from 'react-router-dom';
import { useGetCryptosQuery } from '../services/cryptoApi';
const CryptoCurrencies = ({ simplified }) => {
    const count = simplified ? 10 : 100;
    const { data: cryptosList, isFetching } = useGetCryptosQuery(count);
    const [cryptos, setCryptos] = useState([]);
    const [searchItem,setSearchItem] = useState('');
    useEffect(() => {
        const filteredData = cryptosList?.data?.coins.filter((coin) => coin.name.toString().toLowerCase().includes(searchItem.toString().toLowerCase()));
        setCryptos(filteredData);
    }, [cryptosList,searchItem])
    if (isFetching) {
        return 'Loading...';
    }
    return (
        <>
        {!simplified && (
        <input className="shadow appearance-none border rounded w-1/2 text-sm flex  m-auto py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Search Crypto" onChange={(e) => setSearchItem(e.target.value)}></input>
        )}
        <div className="cardWrapper flex w-full flex-wrap">
            {cryptos?.map((currency) => (

                <div className="w-23% m-2 shadow cursor-pointer transition duration-500 ease-in-out hover:shadow-xl bg-white" key={currency.id}>
                    <Link to={`/cryptodetails/${currency.id}`}>
                        <div className="justify-between  flex">
                            <div className="text-sm p-2">{`${currency.rank}. ${currency.name}`}</div>
                            <img className="image h-6 mr-2 m-2 object-contain" src={currency.iconUrl} />
                        </div>
                        <div className="currencyDetails p-3 text-sm">
                            <div className="text-gray-700 font-medium">Price: ${millify(currency.price)}</div>
                            <div className="text-gray-700 font-medium">Marketcap: {millify(currency.marketCap)}</div>
                            <div className="text-gray-700 font-medium">Daily Change: {millify(currency.change)}</div>
                        </div>
                    </Link>
                </div>

            ))
            }
        </div>
    </>
    )
}

export default CryptoCurrencies
