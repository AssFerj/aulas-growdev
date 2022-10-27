function ultimaMatricula(): number {
  let ultima = Number(localStorage.getItem("ultima-matricula")) || 0;

  const atual = (ultima += 1);

  localStorage.setItem("ultima-matricula", `${atual}`);

  return atual;
}

export default ultimaMatricula;
