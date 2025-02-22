import React, {useState} from 'react'

function Buttons({coin, handleFave, symbol}){
    const [favorite, setFavorite] = useState(false)
    
    function handleFavorite(){
        setFavorite(favorite => !favorite)
    }

    function handleClicks(){
        handleFavorite()
        handleFave()
    }

    function handleRemove(){
        handleFavorite()
        removeFave()
    }

    function removeFave(symbol){
        fetch(`http://localhost:3000/fav_coins/${symbol}`, {
            method: 'DELETE',
        })
    }
    
    return(
        <div>
            {favorite ? (
            <button 
                onClick={handleRemove}
                className="ui green basic button">
                🤑  
            </button>
        ):(
            <button
                onClick={handleClicks}
                className="ui blue basic button">
                😀  
            </button>)
            }
        </div>
    )
}
 

export default Buttons