import React, {useState} from 'react'

function NavBar({search, setSearch, setToggle, toggle, setTog, tog}){
    const [changeState, setChangeState] = useState(false)
    const [changeChart, setchangeChart] = useState(true)

    function handleToggle(){
        setChangeState(changeState => !changeState)
    }

    function handleLists(){
        handleToggle()
        setToggle(!toggle)
    }

    function handleChart(){
        setchangeChart(changeSta => !changeSta)
    }

    function handleChartData(){
        handleChart()
        setTog(!tog)
    }

    return (
    <div className = 'NavBar'>
        <div className="ui focus input">
             <button className ='ui basic blue button'
                onClick={handleLists}
                > 
                {changeState ? "All Coins" : "Favorite Coins"}
            </button>
                    <button className ='ui basic blue button'
                            onClick={handleChartData}>             
                            {changeChart ? "Show Chart" : "Hide Chart"}
                    </button>
            <input onChange={(e) => setSearch(e.target.value)} 
                type="text" 
                value={search}
                placeholder="Search name or symbol..."/>
        </div>
    </div>
    
      );
    }
    

export default NavBar
