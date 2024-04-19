import React, { useState } from 'react'
import axios from 'axios'
import {
  Container,
  TextField,
  Button,
  Typography,
  CircularProgress,
  Box,
} from '@mui/material'
import BG from './components/BG'
import WAAC from './components/WAAC.js'
import Gordon from './components/Gordon.js'
import {
  calculateWaac,
  // calculateFairValue,
  // calculateValuationGordon,
} from './utils/math.js'
// import BuscarDados from './components/BuscarDados';
import { ThemeProvider, createTheme } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
})

function App() {
  const [ticker, setTicker] = useState('')
  // const [valuation, setValuation] = useState(null)
  const [lpa, setLPA] = useState(null)
  const [vpa, setVPA] = useState(null)
  const [valorAtual, setValorAtual] = useState(null)
  const [loading, setLoading] = React.useState(false)
  const [dividaLiquida, setDividaLiquida] = useState(null)
  const [valorDeFirma, setValorDeFirma] = useState(null)
  const [valorDeMercado, setValorDeMercado] = useState(null)
  const [Re, setRe] = useState(null)
  const [Rd, setRd] = useState(null)
  const [c, setC] = useState(null)
  const [dividendsGrowth, setDividensGrowth] = useState(null)
  const [dividensYield, setDividendsYield] = useState(null)

  const handleTickerChange = (event) => {
    setTicker(event.target.value)
  }

  const handleSubmit = async () => {
    setLoading(true)
    try {
      const response = await axios.get(
        `http://localhost:5000/get_company?ticker=${ticker}`,
      ) // https://fundamentus-flask.onrender.com
      console.log(response.data)
      // console.log(response.data.Div_Yield)
      setLPA(response.data.LPA)
      setVPA(response.data.VPA)
      setValorAtual(response.data.Cotacao)
      setDividaLiquida(response.data.Div_Liquida)
      setValorDeFirma(response.data.Valor_da_firma)
      setValorDeMercado(response.data.Valor_de_mercado)
      setDividendsYield(response.data.Div_Yield)
      // console.log(dividensYield)
      setLoading(false)
    } catch (error) {
      console.error('Erro ao buscar dados:', error)
      setLoading(false)
    }
  }

  const finalWaac = calculateWaac(
    valorDeFirma,
    dividaLiquida,
    valorDeMercado,
    Re,
    Rd,
    c,
  )

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline>
        <Container>
          <h1>Valuation</h1>
          <TextField
            label="Ticker da Ação"
            value={ticker}
            onChange={handleTickerChange}
            variant="outlined"
            fullWidth
            required
            style={{ marginBottom: '20px' }}
            id="ticker"
          />
          <TextField
            label="Re (Retorno esperado)"
            type="number"
            value={Re}
            onChange={(e) => setRe(e.target.value)}
            variant="outlined"
            fullWidth
            required
            style={{ marginBottom: '20px' }}
          />
          <TextField
            label="Rd (Custo da Dívida)"
            type="number"
            value={Rd}
            onChange={(e) => setRd(e.target.value)}
            variant="outlined"
            fullWidth
            required
            style={{ marginBottom: '20px' }}
          />
          <TextField
            label="c (Taxa de Imposto Corporativa)"
            type="number"
            value={c}
            onChange={(e) => setC(e.target.value)}
            variant="outlined"
            fullWidth
            required
            style={{ marginBottom: '20px' }}
          />
          <TextField
            label="g (Taxa de Crescimento de dividendos)"
            type="number"
            value={dividendsGrowth}
            onChange={(e) => setDividensGrowth(e.target.value)}
            variant="outlined"
            fullWidth
            required
            style={{ marginBottom: '20px' }}
          />
          <Button variant="contained" onClick={handleSubmit}>
            Buscar
          </Button>
          <Box display="flex" justifyContent="center" mt={2}>
            {loading && <CircularProgress />}
          </Box>

          <WAAC finalWaac={finalWaac} />

          <Gordon
            valorAtual={valorAtual}
            dividensYield={dividensYield}
            dividendsGrowth={dividendsGrowth}
            finalWaac={finalWaac}
          />
          {lpa && vpa && (
            <div>
              <Typography variant="h6">LPA: {lpa}</Typography>
              <Typography variant="h6">VPA: {vpa}</Typography>
              <Typography variant="h6">Cotação: R$ {valorAtual}</Typography>
              <BG lpa={lpa} vpa={vpa} />
            </div>
          )}
        </Container>
      </CssBaseline>
    </ThemeProvider>
  )
}

export default App
