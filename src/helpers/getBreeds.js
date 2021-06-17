
const getBreeds = async () => {
  const url = "https://api.thecatapi.com/v1/breeds";
  const res = await fetch(url);
  const data = await res.json();
  return data;
};

export default getBreeds;
