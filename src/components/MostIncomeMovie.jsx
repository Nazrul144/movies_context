import React, { useContext } from 'react';
import { MovieContext } from '../provider/ContextProvider';
import Card from './Card/Card';

const MostIncomeMovie = () => {
    const {budget} = useContext(MovieContext);
    return (
        <div>
             <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-4'>
            {
                budget?.map(movie => <Card key={movie.id} movie={movie}></Card>)
            }
            </div>
        </div>
    );
};

export default MostIncomeMovie;