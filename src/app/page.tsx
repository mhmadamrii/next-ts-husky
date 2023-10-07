import CarCatalouge from './_components/CarCatalouge';
import Hero from './_components/Hero';
import axios from 'axios';

const getCars = async () => {
  const options = {
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

  try {
    const response = await axios.request(options);
    return response.data;
  } catch (error) {
    // Handle errors here
    console.error('Error:', error);
    throw error; // Rethrow the error for further handling if needed
  }
};

export default async function RootApp({
  searchParams,
}: {
  searchParams: any;
}) {
  const carsData = await getCars();
  console.log('cars data', carsData);
  return (
    <main className="main-wrapper">
      <Hero cars={carsData} />
      <CarCatalouge />
    </main>
  );
}
