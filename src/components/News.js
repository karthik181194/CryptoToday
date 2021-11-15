import React,{useState} from 'react';
import { useGetCryptoNewsQuery } from '../services/cryptoNewsApi';
import { useGetCryptosQuery } from '../services/cryptoApi';
import moment from 'moment';

const News = ({ simplified }) => {
    const [newsCategory, setNewsCategory] = useState('Cryptocurrency');
    const { data: newsList } = useGetCryptoNewsQuery({ newsCategory, count: simplified ? 6 : 12 })
    const { data } = useGetCryptosQuery(100);
    const demoImage = 'https://www.bing.com/th?id=OVFT.mpzuVZnv8dwIMRfQGPbOPC&pid=News';
    // console.log(newsList);
    if (!newsList?.value) {
        return 'Loading...';
    }
    return (
        <>
        {!simplified && (
        <select className="shadow border rounded text-sm flex  m-auto py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Search Crypto" onChange={(e) => setNewsCategory(e.target.value)}>
<option value="Cryptocurrency">Cryptocurrency</option>
{
data?.data?.coins.map((coin) => (
<option value={coin.name} key={coin.id}>{coin.name} </option>
))
}
        </select>
        )}
            <div className="cardWrapper flex w-full flex-wrap">
                {newsList?.value.map((news, i) => (

                    <div className="w-1/3  cursor-pointer mb-3" key={i}>
                        <a href={news.url} target="_blank">
                        <div className=" m-2 bg-white shadow hover:shadow-xl transition duration-500 ease-in-out text-sm h-full relative pb-8">
                            <div className="justify-between flex">
                                <div className="text-sm p-2">{news.name}
                                </div>
                                <img className="image h-20 mr-2 m-2 object-contain" src={news.image?.thumbnail?.contentUrl || demoImage} />
                            </div>
                            <div className="newsDescription">
                                <p class="text-gray-700 font-medium p-2">
                                    {news.description > 100 ?
                                    `${news.description.substring(0,100)}...`:
                                    news.description}
                                    </p>
                            </div>
                            <div className="justify-between flex items-center absolute bottom-0 w-full">
                                <div className="justify-center flex items-center">
                                <img className="image max-h-10 mr-2 m-2" src={news.provider[0].image?.thumbnail?.contentUrl || demoImage} />
                                <p className="text-xs font-medium">{news.provider[0].name}</p>
                                </div>
                                <div className="text-xs p-2 text-gray-700 font-light items-center">{moment(news.datePublished).startOf('ss').fromNow()}
                                </div>
                            </div>
                        </div>
                        </a>
                    </div>
                ))}
            </div>
        </>
    )
}

export default News
