import { createContext, useEffect, useState } from "react";

export const MovieContext = createContext();

const ContextProvider = ({children}) => {

    const [movies, setMovies] = useState([]);
    const [topMovies, setTopMovies] = useState([]);
    const [budget, setBudget] = useState([]);
    const [rewardedMoives, setRewardedMovies] = useState([]);

    useEffect(()=>{
        fetch('movie.json')
        .then(res => res.json())
        .then(data =>{
            setMovies(data)

            const topmovie = [...data].sort((a,b)=> parseInt(b.views) - parseInt(a.views))
            setTopMovies(topmovie)

            const movieBudget = [...data].filter((item)=> item.budget.split(" ")[0] >=70);
            setBudget(movieBudget);

            const rewardedmovie = [...data].filter((item) => parseInt(item.rating)>= 7)
            setRewardedMovies(rewardedmovie);
        })
        
    },[])

console.log(rewardedMoives);

    const movieInfo = {movies, topMovies, budget, rewardedMoives}

    

    return (
        <MovieContext.Provider value={movieInfo}>
            {children}
        </MovieContext.Provider>
    );
};



export default ContextProvider;