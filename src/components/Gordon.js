import React from 'react'
import { calculateValuationGordon } from '../utils/math'

function Gordon({ valorAtual, dividensYield, dividendsGrowth, finalWaac }) {
  const valuationGordon = calculateValuationGordon(
    valorAtual,
    dividensYield,
    dividendsGrowth,
    finalWaac,
  )
  // console.log(valuationGordon, dividendsGrowth, finalWaac, valorAtual, dividensYield)

  return (
    <div>
      <h2>Valuation pelo método de Gordon: {valuationGordon}</h2>
    </div>
  )
}

export default Gordon
