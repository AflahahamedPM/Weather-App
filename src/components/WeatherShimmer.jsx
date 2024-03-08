import Skeleton from "react-loading-skeleton";


const WeatherShimmer = () => {
  return (
    <Skeleton
      style={{
        height: 270,
        width: 300,
        marginLeft: 600,
        marginBottom: 20,
        marginTop: 20,
        borderRadius: 10,
      }}
    />
  );
};

export default WeatherShimmer;
