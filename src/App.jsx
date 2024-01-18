import { useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import './App.css';
import Header from './components/Header';
import ResidentForm from './components/ResidentForm';
import LocationInfo from './components/LocationInfo';
import Pagination from './components/Pagination';
import ResidentList from './components/ResidentList';
import Footer from './components/Footer';
import { getRandomNumber } from './helpers/handleRandom';
import { getResidentsByLocation } from './helpers/api'

const RESIDENTS_PERPAGE = 8;

function App() {
  const [location, setLocation] = useState();
  const [nameLocation, setNameLocation] = useState("");
  const [page, setPage] = useState(1);
  const [theme, setTheme] = useState("dark");
  const [searching, setSearching] = useState(false);

  const changeTheme = () => setTheme(theme === "dark" ? "light" : "dark");

  const showAlert = (message) => {
    if (!searching) {
      Swal.fire({
        icon: 'warning',
        title: 'Ups no hay nadie aquí!',
        text: message,
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault()
    setNameLocation(e.target.idLocation.value)
  };

  const pagination = () => {
    if (!location) {
      return null;
    }
    const maxLimit = page * RESIDENTS_PERPAGE;
    const minLimit = maxLimit - RESIDENTS_PERPAGE;
    const newResidents = location.residents.slice(minLimit, maxLimit);
    if (newResidents.length === 0) {
      showAlert('No hay residentes en esta dimensión.');
    }

    return newResidents;
  };

  useEffect(() => {
    setPage(1);
    const dimension = nameLocation === "" ? getRandomNumber(126) : nameLocation;
    if (!/^\d+$/.test(dimension)) {
      showAlert('Ingrese un número válido para la dimensión.');
      return;
    }

    setSearching(true);

    getResidentsByLocation(dimension)
      .then((res) => setLocation(res))
      .catch((err) => {
        console.error(err);
        showAlert('Hubo un error al obtener datos de la API.');
      })
      .finally(() => setSearching(false));
  }, [nameLocation]);
  

  return (
    <div className="App" id={theme}>
      <Header/>
      <ResidentForm changeTheme={changeTheme} theme={theme} handleSubmit={handleSubmit} searching={searching}/>
      <LocationInfo location={location} />
      <Pagination page={page} setPage={setPage} location={location} RESIDENTS_PERPAGE={RESIDENTS_PERPAGE}/>
      <ResidentList pagination={pagination}/>
      <Footer/> 
    </div>
  )
}

export default App
