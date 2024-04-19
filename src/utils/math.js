// math.js

// Função para calcular WAAC
export const calculateWaac = (
  valorDeFirma,
  dividaLiquida,
  valorDeMercado,
  Rd,
  Re,
  c,
) => {
  const waac =
    (valorDeMercado / valorDeFirma) * (Re / 100) +
    (dividaLiquida / valorDeFirma) * (Rd / 100) * (1 - c / 100)
  return (waac * 100).toFixed(2)
}

// Função para calcular o Valor Justo pela Fórmula de Graham
export const calculateFairValue = (lpa, vpa) => {
  const multiplier = 22.5
  const fairValueBefore = Math.sqrt(multiplier * lpa * vpa)
  return (fairValueBefore / 100).toFixed(2)
}

// Função para calcular a Valuation pelo método de Gordon
export const calculateValuationGordon = (
  valorAtual,
  dividensYield,
  dividendsGrowth,
  finalWaac,
) => {
  console.log({
    // dividensPerStock,
    valorAtual,
    dividensYield,
    dividendsGrowth,
    finalWaac,
  })
  //   console.log(dividensYield)
  const dividensYieldNumber = parseFloat(
    dividensYield.replace(',', '.').replace('%', ''),
  )
  //   console.log(dividensYieldNumber)
  const dividensPerStock = valorAtual * (dividensYieldNumber / 100)
  //   console.log(dividensPerStock)
  //   console.log(
  //     dividensPerStock,
  //     valorAtual,
  //     dividensYield,
  //     dividendsGrowth,
  //     finalWaac,
  //   )
  const finalGordon =
    (dividensPerStock * (1 + dividendsGrowth)) / (finalWaac - dividendsGrowth)
  console.log(finalGordon)
  return finalGordon
}
