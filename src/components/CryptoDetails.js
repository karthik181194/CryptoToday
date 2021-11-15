import React, { useState } from 'react';
import HTMLReactParser from 'html-react-parser';
import { useParams } from 'react-router-dom';
import millify from 'millify';
import { useGetCryptoDetailsQuery,useGetCryptoHistoryQuery } from '../services/cryptoApi';
import Select from 'react-select';
import LineChart from './LineChart';
const CryptoDetails = () => {
    const [timePeriod, setTimePeriod] = useState('7d');
    const { coinId } = useParams();
    const { data, isFetching } = useGetCryptoDetailsQuery(coinId);
    const { data:coinHistory,fetch } = useGetCryptoHistoryQuery({coinId,timePeriod});
    if (isFetching || fetch) {
        return 'Loading..'
    }
    const cryptoDetailedData = data?.data?.coin;
    const stats = [
        { title: 'Price to USD', value: `$ ${cryptoDetailedData.price && millify(cryptoDetailedData.price)}` },
        { title: 'Rank', value: cryptoDetailedData.rank },
        { title: '24h Volume', value: `$ ${cryptoDetailedData.volume && millify(cryptoDetailedData.volume)}` },
        { title: 'Market Cap', value: `$ ${cryptoDetailedData.marketCap && millify(cryptoDetailedData.marketCap)}` },
        { title: 'All-time-high(daily avg.)', value: `$ ${millify(cryptoDetailedData.allTimeHigh.price)}` },
    ];
    const time = [{ value: '3h', label: '3h' },
    { value: '24h', label: '24h' },
    { value: '7d', label: '7d' },
    { value: '30d', label: '30d' },
    { value: '1y', label: '1y' },
    { value: '3m', label: '3m' },
    { value: '3y', label: '3y' },
    { value: '5y', label: '5y' }];
    const genericStats = [
        { title: 'Number Of Markets', value: cryptoDetailedData.numberOfMarkets },
        { title: 'Number Of Exchanges', value: cryptoDetailedData.numberOfExchanges },
        { title: 'Aprroved Supply', value: cryptoDetailedData.approvedSupply },
        { title: 'Total Supply', value: `$ ${millify(cryptoDetailedData.totalSupply)}` },
        { title: 'Circulating Supply', value: `$ ${millify(cryptoDetailedData.circulatingSupply)}` },
    ];
    return (
        <div>
            <h3 className="currencyName text-center my-1 text-heading commonColor">{cryptoDetailedData.name} ({cryptoDetailedData.slug})</h3>
            <p className="titleDescription text-center my-2 text-sm font-light text-gray-700"> {cryptoDetailedData.name} price in US dollars, View stats,market cap and much more.</p>

            <div>
                <Select
                    className="text-sm w-40"
                    onChange={(value) => setTimePeriod(value.value)}
                    options={time}
                    defaultValue={time[2]}
                />
            </div>
            <LineChart coinHistory={coinHistory} currentPrice={millify(cryptoDetailedData.price)} coinName={cryptoDetailedData.name}/>
            <div className="flex">
                <div className="md:w-1/2 border-solid border rounded shadow  p-2 border-gray-200 my-5 mr-3 bg-white">
                    <div className="coinHeadingWrapper text-center my-1">
                        <h5 className="text-base font-medium pb-1">{cryptoDetailedData.name} Value Statistics</h5>
                        <p className="text-sm font-light">An overview showing the stats of {cryptoDetailedData.name} Value Statistics</p>
                    </div>
                    <div className="coinStatsWrapper">
                        {stats.map((item,index) => (
                            <div className="coinStats flex justify-between py-2 px-2  " key={index}>
                                <h5 className="text-sm font-medium">{item.title}</h5>
                                <p className="text-sm font-lg">{item.value}</p>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="md:w-1/2 border-solid border rounded shadow  p-2 border-gray-200 my-5 mr-3 bg-white">
                    <div className="coinHeadingWrapper text-center my-1">
                        <h5 className="text-base font-medium pb-1">Other Statistics</h5>
                        <p className="text-sm font-light">An overview showing the base and quote currency, the rank, and trading volume.</p>
                    </div>
                    <div className="coinStatsWrapper">
                        {genericStats.map((item,value) => (
                            <div className="coinStats flex justify-between py-2 px-2  " key={value}>
                                <h5 className="text-sm font-medium">{item.title}</h5>
                                <p className="text-sm font-lg">{item.value}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className="flex">
                <div className="coinDescription border-solid border rounded shadow  p-3 border-gray-200 mr-3 bg-white">
                    <h4 className="commonColor">What is {cryptoDetailedData.name}?</h4>
                    <div className="parsedText">
                        {HTMLReactParser(cryptoDetailedData.description)}
                    </div>
                </div>
                <div className="border-solid border rounded shadow  p-2 border-gray-200 self-baseline mr-3 bg-white">
                    <div className="coinHeadingWrapper text-center my-1">
                        <h5 className="text-base font-medium pb-1">{cryptoDetailedData.name} Links</h5>
                    </div>
                    <div className="coinLinks">
                        {cryptoDetailedData.links.map((link) => (
                            <div className="coinStats flex justify-between py-2 px-2  border-b hover:bg-gray-200 " key={link.name}>
                                <h5 className="text-sm font-medium">{link.type}</h5>
                                <a href={link.url} target="_blank" className="text-sm font-lg commonColor pl-3">{link.name}</a>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CryptoDetails;