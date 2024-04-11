import React from "react";

function WAAC ({valorDeFirma, dividaLiquida, valorDeMercado, Rd, Re, c}) {
    const calculateWaac = () =>{
        const waac = valorDeMercado / valorDeFirma * (Re / 100) + dividaLiquida / valorDeFirma * (Rd / 100) * (1 - (c / 100))
        return waac
    }

    const finalWaac = calculateWaac() * 100

    return (
        <div>
          <h2>WAAC: {finalWaac} %</h2>
          <h5>WAAC é o custo de capital, necessário para calcular o valuation</h5>
        </div>
      );

}

export default WAAC