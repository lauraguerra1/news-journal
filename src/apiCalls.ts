const getAllNews = async (category?: string) => {
  console.log('apikey', process.env.REACT_APP_API_KEY)
  const url = category ? `https://newsapi.org/v2/top-headlines?country=us?category=${category}&apiKey=${process.env.REACT_APP_API_KEY}` : `https://newsapi.org/v2/top-headlines?country=us&apiKey=${process.env.REACT_APP_API_KEY}`
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error('Something went wrong, please try again')
  }
  return response.json()
}

export {getAllNews}