// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { getWeatherForecastData } from "@/lib/api";
import { WeatherForecast } from "@/lib/types";
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  city: string;
  data: WeatherForecast;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data | { error: string }>
) {
  try {
    if (req.method !== "GET") {
      throw new Error("Method Not Allowed");
    }

    const cityKey = req.query.cityKey as string;

    if (!cityKey) {
      throw new Error("City key is required");
    }

    const weatherForecastData = await getWeatherForecastData(cityKey);

    if (!weatherForecastData) {
      throw new Error("Weather forecast data not found");
    }

    res.status(200).json({ ...weatherForecastData, city: cityKey });
  } catch {
    res.status(500).json({ error: "Internal Server Error" });
  }
}
