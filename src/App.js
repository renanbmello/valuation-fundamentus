import React, { useState } from 'react';
import axios from 'axios';
import { Container, TextField, Button, Typography } from '@mui/material';
import BG from './components/BG'

function App() {
  const [ticker, setTicker] = useState('');
  const [valuation, setValuation] = useState(null);
  const [lpa, setLPA] = useState(null);
  const [vpa, setVPA] = useState(null)
  const [valorAtual, setValorAtual] = useState(null)

  const handleTickerChange = (event) => {
    setTicker(event.target.value);
  };

  const handleSubmit = async () => {
    try {
      const response = await axios.get(`https://fundamentus-flask.onrender.com/get_company?ticker=${ticker}`); //https://fundamentus-flask.onrender.com
      console.log(response.data);
      setLPA(response.data.LPA);
      setVPA(response.data.VPA);
      setValorAtual(response.data.Cotacao)
    } catch (error) {
      console.error('Erro ao buscar dados:', error);
    }
  };

  return (
    <Container>
      <h1>Valuation</h1>
      <TextField
        label="Ticker da Ação"
        value={ticker}
        onChange={handleTickerChange}
        variant="outlined"
        fullWidth
        style={{ marginBottom: '20px' }}
      />
      <Button variant="contained" onClick={handleSubmit}>Buscar</Button>
      {lpa && vpa && (
        <div>
          <Typography variant="h6">LPA: {lpa}</Typography>
          <Typography variant="h6">VPA: {vpa}</Typography>
          <Typography variant="h6">Cotação: R$ {valorAtual}</Typography>
          <BG lpa={lpa} vpa={vpa} />
        </div>
      )}
    </Container>
  );
}

export default App;