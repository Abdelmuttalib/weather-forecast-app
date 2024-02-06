// @ts-nocheck

import CitiesCombobox from "@/components/cities-combobox";
import WeatherCard, {
  MiniWeatherCard,
  MiniWeatherCardLoaderUI,
  WeatherCardLoaderUI,
} from "@/components/weather-card";
import { fetchAPI, getTopCities } from "@/lib/api";
import { Location, WeatherForecast } from "@/lib/types";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import { Inter } from "next/font/google";
import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import useSWR from "swr";

const inter = Inter({ subsets: ["latin"] });

export default function Home({
  locations,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const [city, setCity] = useState({
    label: locations?.[0]?.LocalizedName ?? "",
    value: locations?.[0]?.Key ?? "",
  });

  const { data: weatherForecast, isLoading: isLoadingWeatherForecast } =
    useSWR<WeatherForecast>(
      [`/api/weather-forecast`, city.value],
      ([url, cityKey]) => fetchAPI(`${url}?cityKey=${cityKey}`)
    );

  return (
    <>
      <Head>
        <title>Weather Forecast App</title>
        <meta name="description" content="Weather Forecast App" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={`w-full h-full min-h-screen ${inter.className}`}>
        <div className="w-full h-[19rem] sm:h-[28rem] relative">
          <Image
            src="https://images.pexels.com/photos/3497624/pexels-photo-3497624.jpeg"
            srcset="https://images.pexels.com/photos/3497624/pexels-photo-3497624.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1 1000w, https://images.pexels.com/photos/3497624/pexels-photo-3497624.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2 5000w"
            alt="Weather Forecast App"
            layout="fill"
            className="object-center object-cover"
            quality={100}
            loading="eager"
          />
          {/* search box */}
          <div className="w-full h-full absolute z-50 flex p-6 sm:p-0 items-center justify-center">
            <div className="mx-auto w-full sm:max-w-xl z-50">
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
        <main className="flex min-h-screen w-full bg-gray-100 flex-col items-center justify-between p-6 md:p-24">
          <div className="w-full grid grid-cols-1 gap-y-14">
            {/* Today Weather Forecast */}
            {isLoadingWeatherForecast && (
              <>
                <WeatherCardLoaderUI />
                {[...Array(5)].map((n) => (
                  <MiniWeatherCardLoaderUI key={n} />
                ))}
              </>
            )}
            {weatherForecast?.DailyForecasts?.[0] ? (
              <WeatherCard
                data={weatherForecast?.DailyForecasts?.[0]}
                location={city.label ?? ""}
              />
            ) : null}
            {/* 5 Days Weather Forecast */}
            <div className="grid grid-cols-1 gap-y-10">
              {weatherForecast?.DailyForecasts
                ? weatherForecast?.DailyForecasts.slice(1).map(
                    (forecast, index) => (
                      <MiniWeatherCard
                        data={forecast}
                        location={city.label ?? ""}
                        key={forecast.Link}
                      />
                    )
                  )
                : null}
            </div>
          </div>
        </main>
      </div>
    </>
  );
}

export const getServerSideProps = (async () => {
  const locations: Location[] = await getTopCities(50);

  return {
    props: {
      locations,
    },
  };
}) satisfies GetServerSideProps<{
  locations: Location[];
}>;
