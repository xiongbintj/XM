const key = 'cIYsrAWTCGAeFo4GJeYm54LjVedftjSh'
//获取城市信息
const getCity = async (city) => {
	const base = 'http://dataservice.accuweather.com/locations/v1/cities/search'
	const query = `?apikey=${key}&q=${city}`
	const response = await fetch(base + query)
	const data = await response.json()
	return data 
}
getCity('shanghai')
.then(data=>console.log(data))
.catch(err=>console.log(err))