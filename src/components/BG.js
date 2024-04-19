import React from 'react'
import { calculateFairValue } from '../utils/math'

function BG({ lpa, vpa }) {
  const fairValue = calculateFairValue(lpa, vpa)

  return (
    <div>
      <h2>Valor Justo (Fórmula de Graham): R$ {fairValue}</h2>
    </div>
  )
}

export default BG
