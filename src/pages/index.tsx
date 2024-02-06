// @ts-nocheck

import CitiesCombobox from "@/components/cities-combobox";
import { ComboboxDemo } from "@/components/combobox";
import { ForecastCard } from "@/components/forecast-card";
import { WeatherCard } from "@/components/weather-card";
import { fetchAPI, getTopCities, getWeatherForecastData } from "@/lib/api";
import { locationsData } from "@/lib/data";
import { Location, WeatherForecast } from "@/lib/types";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import { Inter } from "next/font/google";
import Image from "next/image";
import { useState } from "react";
import useSWR from "swr";

const inter = Inter({ subsets: ["latin"] });

export default function Home({
  locations,
  locationWeatherForecastData,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  // console.log({ locations });
  // console.log({ locationWeatherForecastData });

  const [city, setCity] = useState({
    label: locationsData[0].LocalizedName,
    value: locationsData[0].Key,
  });

  const { data } = useSWR(
    `/api/weather-forecast?city=${city.value}`,
    (url: string) => fetchAPI(url)
  );

  return (
    <div className="w-full h-full min-h-screen">
      <div className="w-full h-[28rem] bg-red-300 relative">
        <Image
          // src="https://images.unsplash.com/photo-1563669172719-6d3fffd82e36?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          src="https://images.pexels.com/photos/3497624/pexels-photo-3497624.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          srcset="https://images.pexels.com/photos/3497624/pexels-photo-3497624.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1 1000w, https://images.pexels.com/photos/3497624/pexels-photo-3497624.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2 5000w"
          // srcset="https://images.pexels.com/photos/18991371/pexels-photo-18991371.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=500&w=350 350w, https://images.pexels.com/photos/18991371/pexels-photo-18991371.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=500&w=500 500w, https://images.pexels.com/photos/18991371/pexels-photo-18991371.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=500&w=1000 1000w, https://images.pexels.com/photos/18991371/pexels-photo-18991371.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=500&w=1500 1500w, https://images.pexels.com/photos/18991371/pexels-photo-18991371.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=500&w=2000 2000w, https://images.pexels.com/photos/18991371/pexels-photo-18991371.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=500&w=2500 2500w, https://images.pexels.com/photos/18991371/pexels-photo-18991371.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=500&w=3000 3000w, https://images.pexels.com/photos/18991371/pexels-photo-18991371.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=500&w=3500 3500w, https://images.pexels.com/photos/18991371/pexels-photo-18991371.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=500&w=4000 4000w, https://images.pexels.com/photos/18991371/pexels-photo-18991371.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=500&w=4500 4500w, https://images.pexels.com/photos/18991371/pexels-photo-18991371.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=500&w=5000 5000w"
          alt="Weather Forecast App"
          layout="fill"
          className="object-center object-cover"
          quality={100}
        />
        {/* search box */}
        <div className="w-full h-full absolute z-50 flex items-center justify-center">
          <div className="mx-auto w-full max-w-xl z-50">
            <CitiesCombobox
              cities={locationsData.map((location) => ({
                label: location.LocalizedName,
                value: location.Key,
              }))}
              selected={city}
              setSelected={setCity}
            />
          </div>
        </div>
      </div>
      <main
        className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
      >
        {/* Weather Forecast App */}
        <div className="w-full">
          {/*  */}
          <div className="flex flex-col w-full max-w-xl mx-auto rounded-lg shadow-lg h-80">
            <div className="w-full flex items-center justify-between px-5 py-3 text-gray-700 border-b uppercase text-sm font-medium">
              <p>New York - Current Weather</p>
              <p>11:35 PM</p>
            </div>
            <div className="w-full flex gap-x-4 px-5 py-3">
              {/* main */}
              <div className="justify-center items-center w-full h-full flex flex-col max-w-[60%]">
                <div className="flex items-end">
                  <h2 className="text-7xl tracking-tight font-semibold">25°</h2>
                  <p className="text-lg">C</p>
                </div>
                <div className="w-full">
                  <p className="font-medium">Sunny</p>
                  <p className="text-sm">RealFeel 27°</p>
                </div>
              </div>
              {/* details */}
              <div className="flex flex-col gap-y-4">
                <div>
                  <div className="flex flex-col gap-y-2 divide-y">
                    <div className="flex items-center gap-4">
                      <ThermometerIcon className="h-6 w-6 text-gray-500 dark:text-gray-400" />
                      <div className="grid gap-1">
                        <p className="text-lg font-semibold">27°C</p>
                        <p className="text-sm text-gray-500">Temperature</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <WindIcon className="h-6 w-6 text-gray-500 dark:text-gray-400" />
                      <div className="grid gap-1">
                        <p className="text-lg font-semibold">5 km/h</p>
                        <p className="text-sm text-gray-500">Wind Speed</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <DropletIcon className="h-6 w-6 text-gray-500" />
                      <div className="grid gap-1">
                        <p className="text-lg font-semibold">60%</p>
                        <p className="text-sm text-gray-500">Humidity</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <FilterIcon className="h-6 w-6 text-gray-500" />
                      <div className="grid gap-1">
                        <p className="text-lg font-semibold">Good</p>
                        <p className="text-sm text-gray-500">Air Quality</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* <WeatherCard />
          <ForecastCard /> */}
        </div>
      </main>
    </div>
  );
}

function FilterIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" />
    </svg>
  );
}

function CloudSunIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 2v2" />
      <path d="m4.93 4.93 1.41 1.41" />
      <path d="M20 12h2" />
      <path d="m19.07 4.93-1.41 1.41" />
      <path d="M15.947 12.65a4 4 0 0 0-5.925-4.128" />
      <path d="M13 22H7a5 5 0 1 1 4.9-6H13a3 3 0 0 1 0 6Z" />
    </svg>
  );
}

function ThermometerIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M14 4v10.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0Z" />
    </svg>
  );
}

function WindIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M17.7 7.7a2.5 2.5 0 1 1 1.8 4.3H2" />
      <path d="M9.6 4.6A2 2 0 1 1 11 8H2" />
      <path d="M12.6 19.4A2 2 0 1 0 14 16H2" />
    </svg>
  );
}

function DropletIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5C6 11.1 5 13 5 15a7 7 0 0 0 7 7z" />
    </svg>
  );
}

export const getServerSideProps = (async () => {
  // const locations: Location[] = await getTopCities();

  // const firstLocationKey = locations?.[0].Key;

  // const locationWeatherForecastData = await getWeatherForecastData(
  //   firstLocationKey
  // );

  return {
    props: {
      locations: [],
      locationWeatherForecastData: {},
    },
  };
}) satisfies GetServerSideProps<{
  locations: Location[];
  locationWeatherForecastData: WeatherForecast;
}>;
