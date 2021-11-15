import React from 'react';
import millify from 'millify';
import { Link } from 'react-router-dom';
import { useGetCryptosQuery } from '../services/cryptoApi';
import {CryptoCurrencies,News} from '../components';
const HomePage = () => {
    const { data, isFetching } = useGetCryptosQuery(10);
    const globalStats = data?.data?.stats;
    console.log(data)
    if (isFetching) {
        return 'Loading...';
    }
    return (
        <div className="wrapper flex flex-wrap">
            <h3 className="flex-grow-0 flex-shrink-0 w-full">Global Crypto Stats</h3>
            <div className="w-1/4 pr-3 py-2">
                <div className="bg-gradient-to-tr from-pink-500 to-pink-700 text-white border rounded shadow-lg p-2">
                    <h4 className="text-sm">Total CryptoCurrencies</h4>
                    <span>{globalStats.total}</span>
                </div>
            </div>
            <div className="w-1/4 pr-3 py-2">
                <div className="bg-gradient-to-tr from-yellow-500 to-yellow-700 text-white shadow-lg border rounded p-2">
                    <h4 className="text-sm">Total Exchanges</h4>
                    <span>{millify(globalStats.totalExchanges)}</span>
                </div>
            </div>
            <div className="w-1/4 pr-3 py-2">
                <div className="bg-gradient-to-tr from-purple-500 to-purple-700 text-white border rounded shadow-lg p-2">
                    <h4 className="text-sm">Total Marketcap</h4>
                    <span>{millify(globalStats.totalMarketCap)}</span>
                </div>
            </div>
            <div className="w-1/4 pr-3 py-2">
                <div className="bg-gradient-to-tr from-red-500 to-red-700 border rounded shadow-lg p-2 text-white">
                    <h4 className="text-sm">Total 24h volume</h4>
                    <span>{millify(globalStats.total24hVolume)}</span>
                </div>
            </div>
            {/* <div className="w-1/3 pt-3 px-3 md:pr-2 rounded shadow"><span>5</span></div> */}
            <div className="flex justify-between
             flex-grow-0 flex-shrink-0 w-full my-3">
                <h3 className="">Top 10 crypto currencies in the world</h3>
                <Link to='/cryptocurrencies'>
                    <button className="bg-blue-500 hover:bg-blue-700 text-white py-2 text-sm mr-1 px-4 rounded-full">Show more</button>
                </Link>
            </div>
            <CryptoCurrencies simplified />
            <div className="cryptoCurrenciesWrapper flex justify-between
             flex-grow-0 flex-shrink-0 w-full my-3">
                <h3 className="">Latest crypto news</h3>
                <Link to='/news'>
                    <button className="bg-blue-500 hover:bg-blue-700 text-white py-2 text-sm mr-1 px-4 rounded-full">Show more</button>
                </Link>
            </div>
            <News simplified />
        </div>
    )
}

export default HomePage

