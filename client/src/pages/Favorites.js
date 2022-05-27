import React, { useEffect, useState } from 'react'
import FavItem from '../components/FavItem'

function Favorites() {
    const [favs, setFavs] = useState([])
    const [favsLoaded, setFavsLoaded] = useState(false)

    useEffect(() => {
        fetch("/favorites")
            .then(res => res.json())
            .then(favs => {
                console.log(favs)
                setFavs(favs)
                setFavsLoaded(true)
            })
    }, [])

    const handleRemoveFavorite = (id) => {
        const configObj = {
            method: 'DELETE',
            headers: {
                "Content-Type": "application/json"
            }
        }

        fetch(`/favorites/${id}`, configObj)
            .then(setFavs(favs.filter((fav) => fav.id !== id)))
    }

    if (!favsLoaded) return <h3>Loading...</h3>

    return (
        <div>
            {favs.map((fav) => <FavItem key={fav.id} fav={fav} handleRemoveFavorite={handleRemoveFavorite} />)}
        </div>
    )
}

export default Favorites