import Skeleton from "react-loading-skeleton";

const WeatherForcastShimmer = () => {
  return (
   <Skeleton count={8}
   style={{
     borderRadius: 10,
     marginLeft: 10,
     width: 1500,
     marginBottom: 10,
     height:34
   }}/>
  );
};

export default WeatherForcastShimmer;
