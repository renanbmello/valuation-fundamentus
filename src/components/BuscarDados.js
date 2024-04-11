import React, { useState, useEffect } from 'react';
import axios from 'axios';

const BuscarDados = ({ codigoAcao, }) => {
  const [dados, setDados] = useState([]);

  useEffect(() => {
    if (codigoAcao) {
      axios.get(`http://localhost:5000/get_company?ticker=${codigoAcao}`)
      .then((response) => setDados(response.data))
      .catch((error) => console.error('Erro ao buscar dados:', error));
    }
  }, [codigoAcao]);

  return (
    <div>
    {dados.length > 0 && dados.map((item) => (
      <p key={item.papel}>{item.papel}</p>
    ))}
  </div>
  );
};

export default BuscarDados;