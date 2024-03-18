const calcularFCD = (dados) => {
    const taxaDesconto = 0.1;
    const crescimentoDividendos = 0.05;
    const valorResidual = 100;
  
    const fluxoCaixa = dados.map((item) => {
      return item.dividendoLiquido * (1 + crescimentoDividendos);
    });
  
    const valorPresente = fluxoCaixa.reduce((valorAtual, fluxoFuturo, ano) => {
      return valorAtual + (fluxoFuturo / Math.pow((1 + taxaDesconto), ano + 1));
    }, 0);
  
    return valorPresente + valorResidual;
  };