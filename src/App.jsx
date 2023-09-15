import { useState } from 'react';
import './App.css';
import Card from './components/Card';
import Form from './components/Form';
import MoviesList from './components/MoviesList';
import Header from './components/Header';
import Footer from './components/Footer';

const App = () => {
  const [search, setSearch] = useState('');

  // console.log(typeof image);

  return (
    <>
      <Header />
      <Card>
        <Form searchValue={search} setSearch={setSearch} />
        <MoviesList searchValue={search} />
      </Card>
      <Footer />
    </>
  );
};

export default App;
