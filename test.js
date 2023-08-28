async function fetchUrl(url) {
  
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'ed06d65c1fmshca7e9b9955b12d8p18a3aajsndd6c0f8b0b00',
            'X-RapidAPI-Host': 'anime-db.p.rapidapi.com'
        }
    };
    
    try {
        const response = await fetch(url, options);
        const result = await response.text();
        console.log(result);
    } catch (error) {
        console.error(error);
    }
  }
    const url = 'https://anime-db.p.rapidapi.com/anime?page=1&size=10&search=Fullmetal&genres=Fantasy%2CDrama&sortBy=ranking&sortOrder=asc';
  fetchUrl(url)
  
// //   const query=""
// //   const number=1;
//   fetchUrl(`https://gogoanime.consumet.stream`);
