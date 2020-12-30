import React, { useMemo } from 'react'
import queryString from 'query-string';
import { HeroCard } from '../heroes/HeroCard';
import { useForm } from '../../hooks/useForm';
import { useLocation } from 'react-router-dom';
import { getHeroesByName } from '../../selectors/getHeroesByName';

export const SearchScreen = ({ history }) => {
    
    const location = useLocation();
    const { q = '' } = queryString.parse(location.search);

    const [values, handleInputChange ] = useForm({
        search: q
    });
    const { search } = values;
    const heroesFiltered = useMemo(() => getHeroesByName(q), [q]);
    // const heroesFiltered = getHeroesByName(search);

    const handleSearch = (e) => {
        e.preventDefault();
        history.push(`?q=${search}`);
    }

    return (
        <div>
            <h1>Search Screen</h1>
            <hr />

            <div className="row">
                <div className="col-5">
                    <h4>Search Form</h4>
                    <hr />
                    
                    <form onSubmit={ handleSearch }>
                        <input 
                            name="search"
                            type="text"
                            placeholder="Find your hero"
                            className="form-control"
                            onChange={ handleInputChange }
                            value={ search }
                        />

                        <button
                            type="submit"
                            className="btn btn-block btn-outline-primary mt-1"
                        >
                            Search...
                        </button>
                    </form>
                </div>
                <div className="col-7">
                    <h4>Reslts</h4>
                    <hr />

                    {
                        (q === '') 
                            && 
                        <div className="alert alert-info">
                            Search a hero
                        </div>
                    }
                    {
                        (q !== '' && heroesFiltered.length === 0) 
                            && 
                        <div className="alert alert-danger">
                            There is no a hero with { q }
                        </div>
                    }

                    {
                        heroesFiltered.map(hero => (
                            <HeroCard key={ hero.id } { ...hero } />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}
