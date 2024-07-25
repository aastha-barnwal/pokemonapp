import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Card} from 'react-bootstrap';
import { useDispatch, useSelector} from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logout } from '../redux/counter/authSlics';

const PokemonDetail = () => {
  const { username, pokemonName } = useParams(); //get from url
  const [pokemon, setPokemon] = useState(null); //pokemon data
  const [loading, setLoading] = useState(true); //data is being fetch or not
  const dispatch = useDispatch(); //redux action
  const navigate = useNavigate(); //navigate to different url
  const user = useSelector((state) => state.auth.user);
  // function on clicking logout 
  const handleLogout = () => {
    dispatch(logout()); // Dispatch the logout action
    navigate('/login'); // Redirect to login page after logout
  };
  useEffect(() => {
    if (user && user.username !== username) {
      navigate('/register');
    }
  }, [user, username, navigate]);
  // renders at start when pokemon name set
  useEffect(() => {
    const fetchPokemonDetail = async () => {
      try {
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
        setPokemon(response.data);
      } catch (error) {
        console.error('Error fetching Pokémon detail:');
      } finally {
        setLoading(false);
      }
    };

    fetchPokemonDetail();
  }, [pokemonName]);

  if (loading) return <p>....loading</p>;

  if (!pokemon) return <div>Pokémon not found!</div>;

  return (
    <div>
    <button className="btn btn-danger position-fixed top-0 end-0 m-3"
        onClick={handleLogout}>
        Logout
      </button>
     
    <div className="container mt-4 d-flex justify-content-center">
      <Card style={{ width: '18rem' }} className="text-center">
        <Card.Img variant="top" src={pokemon.sprites.other['official-artwork'].front_default} />
        <Card.Body>
          <Card.Title><strong>{pokemon.name}</strong></Card.Title>
          <Card.Text>
            <div>Height: {pokemon.height / 10} m</div>
            <div>Weight: {pokemon.weight / 10} kg</div>
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
    </div>
  );
};

export default PokemonDetail;
