import {
  Accordion,
  AccordionItemHeading,
  AccordionItem,
  AccordionItemPanel,
  AccordionItemButton,
} from "react-accessible-accordion";

const WEEK_DAYS = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

const WeatherForcast = ({ data }) => {
  const dayInWeek = new Date().getDay();
  const forcastDays = WEEK_DAYS.slice(dayInWeek).concat(
    WEEK_DAYS.slice(0, dayInWeek)
  );

  return (
    <div className="h-full pb-5">
      <label className="m-2 p-2">7 day Forecast</label>
      <Accordion allowZeroExpanded>
        {data.list.splice(0, 7).map((item, idx) => (
          <AccordionItem key={idx}>
            <AccordionItemHeading>
              <AccordionItemButton>
                <div className="flex justify-between items-center bg-gradient-to-r from-blue-100 to-gray-200 m-2 rounded-lg cursor-pointer">
                  <div className="flex items-center ml-4">
                    <img
                      src={`icons/${item.weather[0].icon}.png`}
                      alt=""
                      className="w-10 mr-2"
                    />
                    <p className="mr-2">{item.weather[0].description}</p>
                  </div>

                  <div className="flex items-center mr-4">
                    <label className="mr-4 text-left">{forcastDays[idx]}</label>
                    <label className="text-gray-400">
                      {Math.round(item.main.temp_min)}°C /
                      {Math.round(item.main.temp_max)}°C
                    </label>
                  </div>
                  
                </div>
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <div className="grid grid-cols-2 m-4">
                <div className=" flex justify-between mx-4">
                  <label>Pressure</label>
                  <label className="text-gray-600">
                    {item.main.pressure} hPa
                  </label>
                </div>

                <div className=" flex justify-between mx-4">
                  <label>Humidity</label>
                  <label className="text-gray-600">
                    {item.main.humidity} g.m-3
                  </label>
                </div>

                <div className="flex justify-between mx-4">
                  <label>Clouds</label>
                  <label className="text-gray-600">
                    {item.clouds.all} Oktas
                  </label>
                </div>

                <div className="flex justify-between mx-4">
                  <label>Sea level</label>
                  <label className="text-gray-600">
                    {item.main.sea_level} m
                  </label>
                </div>

                <div className="flex justify-between mx-4">
                  <label>Wind speed</label>
                  <label className="text-gray-600">{item.wind.speed} m/s</label>
                </div>

                <div className="flex justify-between mx-4">
                  <label>Feels like</label>
                  <label className="text-gray-600">
                    {item.main.feels_like} °C{" "}
                  </label>
                </div>

              </div>
            </AccordionItemPanel>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

export default WeatherForcast;
