import React from "react";

function BG({lpa, vpa}) {
    const calculateGrahamFormula = () => {
        const multiplier = 22.5
        const fairValueBefore = Math.sqrt(multiplier * lpa * vpa)
        const fairValue = (fairValueBefore / 100).toFixed(2)
        return fairValue
      };
    
      const fairValue = calculateGrahamFormula();
    
      return (
        <div>
          <h2>Valor Justo (Fórmula de Graham): R$ {fairValue}</h2>
        </div>
      );
    }
    
export default BG;