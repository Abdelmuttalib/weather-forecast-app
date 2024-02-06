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
  res: NextApiResponse<Data>
) {
  const cityKey = req.query.city as string;

  const weatherForecastData = await getWeatherForecastData(cityKey);

  res.status(200).json({ city: `Hello ${cityKey}`, data: weatherForecastData });
}
