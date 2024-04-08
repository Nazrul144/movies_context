import React, { useContext } from 'react';
import Card from './Card/Card';
import { MovieContext } from '../provider/ContextProvider';

const TopMovies = () => {
    const { topMovies } = useContext(MovieContext)
    console.log(topMovies)
    return (
        <div>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-4'>
                {
                    topMovies?.map(movie => <Card key={movie.id} movie={movie}></Card>)
                }
            </div>
        </div>
    );
};

export default TopMovies;