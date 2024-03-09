import Skeleton from "react-loading-skeleton";

const WeatherForcastShimmer = () => {
    const arr = [1,2,3,4,5,6,7]
  return (
    arr.map((x,idx)=>(
        <div key={idx}>
        <div className="flex justify-between w-12/12 h-10 my-3 ml-4 mr-4 mx-auto rounded-xl shadow-2xl cursor-pointer">
          <div className="flex items-center">
          <Skeleton
            circle
            style={{ height: 30, width: 30, marginLeft: 10, borderRadius:10 }}
          />
          <Skeleton style={{width:100, marginLeft:20, borderRadius:10}}/>
          </div>
          <div className="flex items-center mr-4">
              <Skeleton style={{width:100, borderRadius:10}}/>
              <Skeleton style={{width:100, borderRadius:10,marginLeft:10}}/>
          </div>
        </div>
      </div>
    ))
    
  );
};

export default WeatherForcastShimmer;
