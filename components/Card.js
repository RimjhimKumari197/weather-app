import Image from "next/image";
function Card(props) {
  const date = new Date(props.data.dt * 1000);
  const formattedDate = date.toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  const formattedTime = date.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
  });
  return (
    <>
      <div className="border border-white border-2 rounded-3xl px-3 w-full max-w-xs sm:max-w-sm  md:max-w-md  xl:max-w-2xl mx-4 sm:mx-auto bg-white/15 py-5">
        <div className="flex flex-col sm:flex-row gap-2 sm:gap-15">
          <div className=" py-0 w-[250px] sm:w-[150px] md:w-[200px] mx-4 sm:mx-0">
            <Image
              src={`https://openweathermap.org/img/wn/${props.data.weather[0].icon}@2x.png`}
              height="550"
              width="550"
              alt="weather image"
              className="w-full h-auto"
            />
          </div>
          <div className="mx- flex flex-col items-start gap-y-1 sm:mx-3">
            <div className="flex gap-2 ">
              <div className="py-2">
                <Image src="/location.png" alt="City" height="40" width="30" />
              </div>
              <span className="font-medium text-4xl ">
                {props.data.name}({props.data.sys.country})
              </span>
            </div>
            <div>
              <span className="font-medium text-lg mx-2">
                {props.data.main.temp}°C
              </span>
              <span className="font-normal">
                {" "}
                / Feels like:{props.data.main.feels_like}°C
              </span>
            </div>
            <div>
              <span className="font-medium text-lg mx-2">
                {props.data.weather[0].main}
              </span>
              <span>({props.data.weather[0].description})</span>
              <div className="mx-2 my-1.5">
                <span className="font-medium text-lg">Humidity:</span>
                {props.data.main.humidity}%
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6 px-3">
          <div>
            <span className="font-medium text-lg">Minimum Temprature</span>:{" "}
            {props.data.main.temp_min}°C
          </div>
          <div>
            <span className="font-medium text-lg">Maximum Temprature</span>:{" "}
            {props.data.main.temp_max}°C
          </div>

          <div>
            <span className="font-medium text-lg">Wind Speed</span>:{" "}
            {props.data.wind.speed * (3.6).toFixed(2)}km/h
          </div>
          <div>
            <span className="font-medium text-lg">Wind Direction</span>:{" "}
            {props.data.wind.deg}°
          </div>

          <div>
            <span className="font-medium text-lg">Cloudiness</span>:{" "}
            {props.data.clouds.all}%
          </div>
          <div>
            <span className="font-medium text-lg">Visibility</span>:{" "}
            {props.data.visibility}mts
          </div>

          <div>
            <span className="font-medium text-lg">Longitude:</span>{" "}
            {props.data.coord.lon.toFixed(2)}{" "}
          </div>
          <div>
            <span className="font-medium text-lg">Latitude</span>:{" "}
            {props.data.coord.lat.toFixed(2)}
          </div>

          <div>
            <span className="font-medium text-lg">Date</span>: {formattedDate}
          </div>
          <div>
            <span className="font-medium text-lg">Time</span>: {formattedTime}
          </div>

          <div>
            <span className="font-medium text-lg">Atmospheric Pressure</span>:{" "}
            {props.data.main.pressure} hPa
          </div>
        </div>
      </div>
    </>
  );
}
export default Card;
