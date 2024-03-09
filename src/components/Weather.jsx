
const Weather = ({data}) => {
  return (
    <div className="mx-auto my-10 h-auto w-[300px] shadow-xl rounded-lg bg-gradient-to-r from-blue-100 to-gray-200">
      <div className="flex justify-between items-center p-2">
        <div className="m-2 p-2">
          <h1 className="m-0 py-1 text-lg font-semibold text-normal leading-[1px] tracking-wide">
            {data.name} 
          </h1>
          <h1 className="m-0 font-light text-sm">{data.weather[0].description}</h1>
        </div>
        <img src={`icons/${data.weather[0].icon}.png`} alt="" className="w-32" />
      </div>

      <div className=" flex justify-between items-center p-2">
        <h1 className="font-bold text-6xl w-auto tracking-tighter my-[10px] mx-2">
          {Math.round(data.main.temp)}°C
        </h1>
        <div className="w-full pl-3 ">

          <div className="flex justify-between">
            <span className="px-2 text-left font-light text-sm text-gray-500">
              Feels like
            </span>
            <span className="font-semibold text-sm text-right">{Math.round(data.main.feels_like)}°C</span>
          </div>

          <div className="flex justify-between">
            <span className="px-2 font-light text-sm text-gray-500">Wind</span>
            <span className="font-semibold text-sm text-right">{Math.round(data.wind.speed)} m/s</span>
          </div>

          <div className="flex justify-between">
            <span className="px-2 font-light text-sm text-gray-500">
              Humidity
            </span>
            <span className="font-semibold text-sm text-right">{Math.round(data.main.humidity)} g.m-3</span>
          </div>

          <div className="flex justify-between">
            <span className="px-2 font-light text-sm text-gray-500">
              Pressure
            </span>
            <span className="font-semibold text-sm text-right">{Math.round(data.main.pressure)} hpa</span>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Weather;
