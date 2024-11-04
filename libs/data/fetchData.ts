
const fetchData = async (url: string, query?: string) => {
  const currentPage = '1';
  const api = `${process.env.NEXT_PUBLIC_API_URL}`;
  const apiUrl = new URL(`${api}/${url}`);
  
  apiUrl.searchParams.append('page', currentPage);
  apiUrl.searchParams.append('limit', '10');
  apiUrl.searchParams.append('sortBy', 'name');
  if(query){
    apiUrl.searchParams.append('search', query);
  }
  const data = await fetch(apiUrl, {
    method: 'GET',
    headers: { 'content-type': 'application/json' },
  })
  
  if (!data.ok) {
    return [];
  }
  return data.json();
};

export {fetchData}