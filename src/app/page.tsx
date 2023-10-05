import Hero from './_components/Hero';
import axios from 'axios';

const getCars = async () => {
  const options: any = {
    method: 'GET',
    url: 'https://cars-by-api-ninjas.p.rapidapi.com/v1/cars',
    params: { model: 'corolla' },
    headers: {
      'X-RapidAPI-Key':
        'f86fcdd41amshab2de44902e86d8p13fbe8jsn5573c717d5b6',
      'X-RapidAPI-Host':
        'cars-by-api-ninjas.p.rapidapi.com',
    },
  };

  const url =
    'https://cars-by-api-ninjas.p.rapidapi.com/v1/cars';
  const res = await axios.request(url, options);
  return res.data;
};

export default async function RootApp({
  searchParams,
}: {
  searchParams: any;
}) {
  const carsData = await getCars();
  console.log('cars data', carsData);
  return (
    <main>
      <Hero cars={carsData} />
    </main>
  );
}
