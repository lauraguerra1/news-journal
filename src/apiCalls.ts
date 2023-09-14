const getAllNews = async (global: boolean) => {
  const url = global ? `https://newsapi.org/v2/top-headlines?category=general&apiKey=${process.env.REACT_APP_API_KEY}` : `https://newsapi.org/v2/top-headlines?country=us&apiKey=${process.env.REACT_APP_API_KEY}`
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error('Something went wrong, please try again')
  }
  return response.json()
}

export {getAllNews}