const GetImages: React.FC<string> = (path) => {
  return `https://image.tmdb.org/t/p/original/${path}`;
};

export default GetImages;
