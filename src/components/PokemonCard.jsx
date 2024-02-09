import React from 'react';

const PokemonCard = ({ pokemon }) => {
    const { name, imageUrl, description } = pokemon;

    return (
        <div className="col-md-4 g-3">
            <div className="card">
                <img src={imageUrl} alt={name} className="card-img-top" />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">{description}</p>
                </div>
            </div>
        </div>
    );
};

export default PokemonCard;
