import Skeleton from "react-loading-skeleton";

const WeatherShimmer = () => {
  return (
    <div className="h-[270px] w-[300px] my-5 mb-14 mx-auto shadow-xl rounded-lg">
      <div className="flex justify-between items-center p-2">
        <div className="m-2 p-2 flex justify-between">
          <div className="m-2 p-2">
            <Skeleton
              style={{ marginTop: 30, padding: 4, width: 120, height: 15 }}
            />
            <Skeleton style={{ width: 70, height: 10 }} />
          </div>
          <Skeleton style={{ width: 100, height: 100, borderRadius: 10 }} />
        </div>
      </div>
      <div className="flex justify-between mx-6">
        <div className="">
          <Skeleton  style={{ width: 90, height: 90, borderRadius:10 }} />
        </div>
        <div className="ml-16">
          <Skeleton count={4} style={{ height: 12, width: 100 }} />
        </div>
      </div>
    </div>
  );
};

export default WeatherShimmer;
