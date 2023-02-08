async function api_Get_Plazi() {
  const datos = await fetch('https://api.escuelajs.co/api/v1/categories',  {
    method: 'GET',
  })
  return await datos.json();
}

export default api_Get_Plazi;
