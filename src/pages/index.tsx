import CitiesCombobox from "@/components/cities-combobox";
import { ComboboxDemo } from "@/components/combobox";
import { fetchAPI, getTopCities, getWeatherForecastData } from "@/lib/api";
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
  console.log({ locations });
  console.log({ locationWeatherForecastData });

  const [city, setCity] = useState({
    label: locations[0].LocalizedName,
    value: locations[0].Key,
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
              cities={locations.map((location) => ({
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
        {JSON.stringify(data)}
        Weather Forecast App
        <ComboboxDemo />
      </main>
    </div>
  );
}

export const getServerSideProps = (async () => {
  const locations: Location[] = await getTopCities();

  const firstLocationKey = locations?.[0].Key;

  const locationWeatherForecastData = await getWeatherForecastData(
    firstLocationKey
  );

  return {
    props: {
      locations,
      locationWeatherForecastData,
    },
  };
}) satisfies GetServerSideProps<{
  locations: Location[];
  locationWeatherForecastData: WeatherForecast;
}>;
