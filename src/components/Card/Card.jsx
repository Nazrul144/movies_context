import React from 'react';

const Card = ({movie}) => {
    const {movie_name, actor_actress, director, views, rating, category, budget} = movie;
    return (
        <div>
            <div className="card h-full bg-base-100 shadow-xl">
                <figure><img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">Movie Name: {movie_name}</h2>
                    <p> {actor_actress}</p>
                    <p>Director{director}</p>
                    <p>Budget:{budget}</p>
                    <p className='font-bold'>Category:{category}</p>
                    <p>Rating: {rating}</p>
                    <p>Views: {views}</p>
                   
                </div>
            </div>
        </div>
    );
};

export default Card;