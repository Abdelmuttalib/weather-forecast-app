import { formatDate } from "@/lib/date";
import React from "react";
import { CalendarIcon, DropletIcon, FilterIcon, WindIcon } from "./icons";
import { WeatherForecast } from "@/lib/types";
import { Skeleton } from "./ui/skeleton";

type WeatherCardProps = {
  data: WeatherForecast["DailyForecasts"][0];
  location: string;
};

export default function WeatherCard({ data, location }: WeatherCardProps) {
  const { Date, Temperature, RealFeelTemperature, Day, AirAndPollen } = data;

  const { Wind, RelativeHumidity } = Day;

  const airQuality =
    AirAndPollen?.find((item) => item.Name === "AirQuality")?.Category ?? "";

  const date = formatDate(Date);

  const temperature = Math.round(Temperature.Maximum.Value);

  return (
    <div className="flex border flex-col w-full max-w-xl mx-auto rounded-lg sm:h-72 bg-white">
      <div className="w-full flex items-start sm:items-center gap-y-1 sm:gap-y-0 flex-col sm:flex-row sm:justify-between px-5 py-3 text-gray-700 border-b uppercase text-xs sm:text-sm font-medium">
        <p>{location} - Today</p>
        <div className="flex items-center gap-x-2 text-gray-500">
          <CalendarIcon className="h-[19px] w-[19px] mt-0.5" />
          <p>{date}</p>
        </div>
      </div>
      <div className="w-full h-full flex flex-col sm:flex-row gap-y-8 sm:gap-y-0 gap-x-4 px-5 py-3">
        {/* main */}
        <div className="justify-center items-center w-full h-full flex flex-col gap-y-2">
          <div className="flex items-end">
            <h2 className="text-6xl sm:text-8xl tracking-tight font-semibold">
              {temperature}°
            </h2>
            <p className="sm:text-lg font-semibold text-gray-600">C</p>
          </div>
          <div className="w-full flex justify-center flex-col gap-y-2 items-center text-left">
            <p className="text-sm sm:text-base font-medium text-gray-900">
              {/* Use the Day.IconPhrase here */}
              {Day.IconPhrase}
            </p>
            <p className="text-sm text-gray-700">
              <span className="px-2.5 py-1 italic bg-gray-200/70 text-gray-900 rounded-lg">{`RealFeel ${RealFeelTemperature.Maximum.Value}°`}</span>
            </p>
          </div>
        </div>

        {/* details */}
        <div className="flex flex-col h-full gap-y-4 w-full sm:max-w-[40%]">
          <div className="flex flex-col justify-evenly h-full gap-y-2 w-full">
            <div className="flex items-center gap-4">
              <div className="p-2 bg-gray-200/60 rounded-md">
                <WindIcon className="h-6 w-6 text-gray-500" />
              </div>
              <div className="grid">
                <p className="font-medium">{`${Wind.Speed.Value} ${Wind.Speed.Unit}`}</p>
                <p className="text-sm text-gray-500">Wind Speed</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="p-2 bg-gray-200/60 rounded-md">
                <DropletIcon className="h-6 w-6 text-gray-500" />
              </div>
              <div className="grid">
                <p className="font-medium">{`${RelativeHumidity.Average}%`}</p>
                <p className="text-sm text-gray-500">Humidity</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="p-2 bg-gray-200/60 rounded-md">
                <FilterIcon className="h-6 w-6 text-gray-500" />
              </div>
              <div className="grid">
                <p className="font-medium">{`${airQuality}`}</p>
                <p className="text-sm text-gray-500">Air Quality</p>
              </div>
            </div>
            {/* Add similar blocks for other details like Air Quality */}
          </div>
        </div>
      </div>
    </div>
  );
}

export function MiniWeatherCard({ data, location }: WeatherCardProps) {
  const {
    Date,
    Temperature,
    Day,
    AirAndPollen,
    // RealFeelTemperature,
  } = data;

  const { Wind, RelativeHumidity } = Day;

  const airQuality =
    AirAndPollen?.find((item) => item.Name === "AirQuality")?.Category ?? "";

  const date = formatDate(Date);

  const temperature = Math.round(Temperature.Maximum.Value);

  return (
    <div className="flex border flex-col w-full max-w-xl mx-auto rounded-lg sm:h-44 bg-white">
      <div className="w-full flex flex-col sm:flex-row items-start gap-y-1 sm:gap-y-1 sm:items-center justify-between px-5 py-3 text-gray-700 border-b uppercase text-xs sm:text-sm font-medium">
        <p>{location}</p>
        <div className="flex items-center gap-x-2 text-gray-500">
          <CalendarIcon className="h-4 w-4" />
          <p>{date}</p>
        </div>
      </div>
      <div className="w-full h-full flex gap-x-4 px-5 py-3">
        {/* main */}
        <div className="justify-center h-full flex flex-col">
          <div className="flex items-end">
            <h2 className="text-4xl tracking-tight font-semibold">
              {temperature}°
            </h2>
            <p className="font-semibold text-gray-600">C</p>
          </div>
          <div className="w-full flex justify-center flex-col items-center text-left">
            <p className="text-sm font-medium text-gray-800">
              {/* Use the Day.IconPhrase here */}
              {Day.IconPhrase}
            </p>
            {/* <p className="text-xs text-gray-700">
              <span className="px-2 py-1 whitespace-nowrap italic bg-gray-200/60 text-gray-900 rounded-lg">{`RealFeel ${RealFeelTemperature.Maximum.Value}°`}</span>
            </p> */}
          </div>
        </div>

        {/* details */}
        <div className="flex flex-col h-full gap-y-4 sm:w-full">
          <div className="flex sm:justify-evenly flex-col sm:flex-row h-full gap-y-2 w-full">
            <div className="flex items-center gap-4">
              <div className="p-2 bg-gray-200/60 rounded-md">
                <WindIcon className="h-[18px] w-[18px] text-gray-500" />
              </div>
              <div className="grid">
                <p className="text-sm font-medium">{`${Wind.Speed.Value} ${Wind.Speed.Unit}`}</p>
                <p className="text-xs text-gray-500">Wind Speed</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="p-2 bg-gray-200/60 rounded-md">
                <DropletIcon className="h-[18px] w-[18px] text-gray-500" />
              </div>

              <div className="grid">
                <p className="text-sm font-medium">
                  {`${RelativeHumidity.Average}%`}
                </p>
                <p className="text-xs text-gray-500">Humidity</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="p-2 bg-gray-200/60 rounded-md">
                <FilterIcon className="h-[18px] w-[18px] text-gray-500" />
              </div>

              <div className="grid">
                <p className="text-sm font-medium">{airQuality}</p>
                <p className="text-xs text-gray-500">Air Quality</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function WeatherCardLoaderUI() {
  return (
    <div className="flex border flex-col w-full max-w-xl mx-auto rounded-lg sm:h-72 bg-white">
      <div className="w-full flex items-center justify-between px-5 py-3 text-gray-700 border-b uppercase text-sm font-medium">
        <div>
          <Skeleton className="w-20 h-7" />
        </div>
        <div className="flex items-center gap-x-2 text-gray-500">
          <Skeleton className="h-[19px] w-[19px]" />

          <Skeleton className="w-20 h-6" />
        </div>
      </div>
      <div className="w-full h-full flex flex-col gap-y-8 sm:gap-y-0 sm:flex-row gap-x-4 px-5 py-3">
        {/* main */}
        <div className="justify-center items-center w-full h-full flex flex-col gap-y-2">
          <div className="flex items-end">
            <div className="text-8xl tracking-tight font-semibold">
              <Skeleton className="w-40 h-36" />
            </div>
          </div>
          <div className="w-full flex justify-center flex-col gap-y-2 items-center text-left">
            <div className="font-medium text-gray-900">
              {/* Use the Day.IconPhrase here */}
              <Skeleton className="w-20 h-4" />
            </div>
            <div className="text-sm text-gray-700">
              <Skeleton className="w-20 h-7 rounded-xl" />
            </div>
          </div>
        </div>

        {/* details */}
        <div className="flex flex-col h-full gap-y-4 w-full max-w-[40%]">
          <div className="flex flex-col justify-evenly h-full gap-y-2 w-full">
            <div className="flex items-center gap-4">
              <div className="p-2 bg-gray-200/60 rounded-md">
                <Skeleton className="w-6 h-6" />
              </div>
              <div className="grid gap-y-1">
                <div className="font-medium">
                  <Skeleton className="w-20 h-6" />
                </div>
                <Skeleton className="w-20 h-5" />
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="p-2 bg-gray-200/60 rounded-md">
                <Skeleton className="w-6 h-6" />
              </div>
              <div className="grid gap-y-1">
                <div className="font-medium">
                  <Skeleton className="w-20 h-6" />
                </div>
                <Skeleton className="w-20 h-5" />
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="p-2 bg-gray-200/60 rounded-md">
                <Skeleton className="w-6 h-6" />
              </div>
              <div className="grid gap-y-1">
                <div className="font-medium">
                  <Skeleton className="w-20 h-6" />
                </div>
                <Skeleton className="w-20 h-5" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function MiniWeatherCardLoaderUI() {
  return (
    <div className="flex border flex-col w-full max-w-xl mx-auto rounded-lg sm:h-44 bg-white">
      <div className="w-full flex items-center justify-between px-5 py-3 text-gray-700 border-b uppercase text-sm font-medium">
        <Skeleton className="w-20 h-7" />
        <div className="flex items-center gap-x-2 text-gray-500">
          <Skeleton className="h-[19px] w-[19px]" />

          <Skeleton className="w-20 h-6" />
        </div>
      </div>
      <div className="w-full h-full flex gap-y-6 sm:gap-y-0 flex-col sm:flex-row gap-x-4 px-5 py-3">
        {/* main */}
        <div className="justify-center h-full flex flex-col items-center sm:items-baseline">
          <div className="flex items-end">
            <Skeleton className="w-20 h-16" />
          </div>
          <div className="w-full flex mt-1 justify-center flex-col items-center text-left">
            <Skeleton className="w-20 h-6 rounded-full" />
            {/* <p className="text-xs text-gray-700">
              <span className="px-2 py-1 whitespace-nowrap italic bg-gray-200/60 text-gray-900 rounded-lg">{`RealFeel ${RealFeelTemperature.Maximum.Value}°`}</span>
            </p> */}
          </div>
        </div>

        {/* details */}
        <div className="flex flex-col h-full gap-y-4 w-full">
          <div className="flex flex-col sm:flex-row justify-evenly h-full gap-y-2 w-full">
            <div className="flex items-center gap-4">
              <div className="p-2 bg-gray-200/60 rounded-md">
                <Skeleton className="h-[18px] w-[18px] text-gray-500" />
              </div>
              <div className="grid gap-y-1">
                <Skeleton className="w-20 h-7" />
                <Skeleton className="w-20 h-7" />
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="p-2 bg-gray-200/60 rounded-md">
                <Skeleton className="h-[18px] w-[18px] text-gray-500" />
              </div>

              <div className="grid gap-y-1">
                <Skeleton className="w-20 h-7" />
                <Skeleton className="w-20 h-7" />
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="p-2 bg-gray-200/60 rounded-md">
                <Skeleton className="h-[18px] w-[18px] text-gray-500" />
              </div>

              <div className="grid gap-y-1">
                <Skeleton className="w-20 h-7" />
                <Skeleton className="w-20 h-7" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

{
  /* <div className="flex flex-col w-full max-w-xl mx-auto rounded-lg h-72 bg-white">
            <div className="w-full flex items-center justify-between px-5 py-3 text-gray-700 border-b uppercase text-sm font-medium">
              <p>New York - Current Weather</p>
              <div className="flex items-center gap-x-2 text-gray-500">
                <CalendarIcon className="h-[18px] w-[18px]" />
                <p>11:35 PM</p>
              </div>
            </div>
            <div className="w-full h-full flex gap-x-4 px-5 py-3">
              <div className="justify-center items-center w-full h-full flex flex-col">
                <div className="flex items-end">
                  <h2 className="text-8xl tracking-tight font-semibold">25°</h2>
                  <p className="text-lg font-semibold text-gray-600">C</p>
                </div>
                <div className="w-full flex justify-center flex-col items-center text-left">
                  <p className="font-medium text-gray-900">Sunny</p>
                  <p className="text-sm text-gray-700">RealFeel 27°</p>
                </div>
              </div>

              <div className="flex flex-col h-full gap-y-4 w-full max-w-[40%]">
                <div className="flex flex-col justify-evenly h-full gap-y-2 w-full">
                  <div className="flex items-center gap-4">
                    <WindIcon className="h-6 w-6 text-gray-500" />
                    <div className="grid">
                      <p className="font-medium">5 km/h</p>
                      <p className="text-sm text-gray-500">Wind Speed</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <DropletIcon className="h-6 w-6 text-gray-500" />
                    <div className="grid">
                      <p className="font-medium">60%</p>
                      <p className="text-sm text-gray-500">Humidity</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <FilterIcon className="h-6 w-6 text-gray-500" />
                    <div className="grid">
                      <p className="font-medium">Good</p>
                      <p className="text-sm text-gray-500">Air Quality</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div> */
}
