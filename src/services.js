async function api_Get_mortin() {
  const datos = await fetch('https://rickandmortyapi.com/api/character',  {
    method: 'GET',
  })
  const {results} = await datos.json();
  return results
}

export default api_Get_mortin;
