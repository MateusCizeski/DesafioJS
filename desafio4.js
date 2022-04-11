function valorRepetido(vetor) {
    const countMap = Object.create(null);
     for (const element of vetor) {
      countMap[element] = (countMap[element] || 0) + 1;
    }
    return countMap;
  }
  
  const vetor = ['1', '1', '2', '2', '2', '2'];
  console.log(valorRepetido(vetor));