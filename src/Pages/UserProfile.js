
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Card, Button, Pagination } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../redux/counter/authSlics';

const UserProfile = () => {
  const { username } = useParams();
  const user = useSelector((state) => state.auth.user);

  const dispatch = useDispatch();
  const navigate = useNavigate(); // For redirecting after logout
  const [pokemonData, setPokemonData] = useState([]); // stores the pokemon data requested from api
  const [loading, setLoading] = useState(true);   // it indicates where data is being loaded
  const [currentPage, setCurrentPage] = useState(1); // current page counter
  const [totalPages, setTotalPages] = useState(1); // total pages
  const itemsPerPage = 6; // Number of items per page

  useEffect(() => {
    if (user && user.username !== username) {
      navigate('/register');
    }
  }, [user, username, navigate]);

  // It renders every time the current page changes
  useEffect(() => {
    const fetchPokemonData = async () => {
      try {
        const offset = (currentPage - 1) * itemsPerPage; // set offset to avoid repeated data
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=${itemsPerPage}&offset=${offset}`); // API call
        setPokemonData(response.data.results); // update the pokemanData
        // API is not providing the number of result directly
        setTotalPages(Math.ceil(1118 / itemsPerPage));
      } catch (error) {
        console.error('Error fetching Pokémon data:');
      } finally {
        setLoading(false); // error or success
      }
    };

    fetchPokemonData();
  }, [currentPage]);

  if (loading) return <p>.....loading</p>;

  // function to update page
  const handlePageChange = (page) => {
    setCurrentPage(page);
    setLoading(true);
  };

  // function to logout and navigate to login
  const handleLogout = () => {
    dispatch(logout()); // Dispatch the logout action
    navigate('/login');
  };

  return (
    <div className="container mt-4">
      <button
        className="btn btn-danger position-fixed top-0 end-0 m-3"
        onClick={handleLogout}
      >
        Logout
      </button>
      <h2 className="mb-4">Welcome, {username}!</h2>
      <div className="row">
        {pokemonData.map((pokemon) => {
          const pokemonId = pokemon.url.split('/')[pokemon.url.split('/').length - 2];
          return (
            <div key={pokemon.name} className="col-md-4 mb-4">
              <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemonId}.png`} />
                <Card.Body>
                  <Card.Title>{pokemon.name}</Card.Title>
                  <Button variant="primary" onClick={() => navigate(`/auth/${username}/${pokemon.name}`)}>
                    View More
                  </Button>
                </Card.Body>
              </Card>
            </div>
          );
        })}
      </div>
      <div className="d-flex justify-content-center mt-4">
        <Pagination>
          <Pagination.Prev
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
          />
          <Pagination.Item>{currentPage}</Pagination.Item>
          <Pagination.Next
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
          />
        </Pagination>
      </div>
    </div>
  );
};

export default UserProfile;


