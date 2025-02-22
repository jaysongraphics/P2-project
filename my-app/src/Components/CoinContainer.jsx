import React, { useState, useEffect } from 'react'
import AllCoins from './AllCoins'
import FavCoins from './FavCoins'
import NavBar from './NavBar'
import Logo from './Logo'
import Chart from './Chart'
import Space from './Space'
import CoinDetail from './CoinDetail'

function CoinContainer(){
    const [coins, setCoins] = useState([])
    const coinUrl = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=25&page=1&sparkline=false"
    const [search, setSearch] = useState("")
    const [toggle, setToggle] = useState(true)
    const [sort, setSort] = useState('')
    const [tog, setTog] = useState(false)
    const [detail, setDetail] = useState(true)

    useEffect(()=> {
      fetch(coinUrl)
      .then (res => res.json())
      .then (coinData => setCoins(coinData))
    }, [])

    const filteredCoin = coins.filter(coin => {
        return (coin.name.toLowerCase().includes(search.toLowerCase()))
        ||
        (coin.symbol.toLowerCase().includes(search.toLowerCase()))
      })
    
      const handleSort = () => {
        if (sort === "Name"){
             return filteredCoin.sort((a, b) =>a.name.localeCompare(b.name))  
        }else if (sort === "Symbol"){
            return filteredCoin.sort((a, b) =>a.symbol.localeCompare(b.symbol))  
        }else if (sort === "Current Price"){
            return filteredCoin.sort((a, b) =>(a.current_price < b.current_price) ? 1 : -1)  
        }else if (sort === "Change in 24h"){
            return filteredCoin.sort((a, b) => 
            parseInt(b.price_change_percentage_24h*100)
             - 
            parseInt(a.price_change_percentage_24h*100)
            )   
        }else {
            return filteredCoin
    } 
}
    return (
        <main>
            <Logo />
            <NavBar 
                search={search} 
                setSearch={setSearch}
                setToggle={setToggle}
                toggle={toggle}
                tog={tog}
                setTog={setTog}
                />
            {tog ?
                (<Chart 
                    coins={coins}/>) : (null)
                    }
                {toggle ? 
            (<AllCoins
                coins={handleSort()} 
                setSort={setSort} 
                setDetail={setDetail} 
                detail={detail}
                />
            ):( 
            <FavCoins
                    setSort={setSort}
                    sort={sort}
                />)}
            <Space 
            />
         </main>   
    )
}

export default CoinContainer