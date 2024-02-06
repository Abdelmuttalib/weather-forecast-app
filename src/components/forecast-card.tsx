// @ts-nocheck

import {
  CardTitle,
  CardDescription,
  CardHeader,
  CardContent,
  Card,
} from "@/components/ui/card";
import { CalendarIcon } from "@/pages";

export function ForecastCard() {
  return (
    <Card className="w-full max-w-md rounded-lg">
      <CardHeader className="w-full flex flex-row items-center justify-between bg-red-300 px-5 py-3 text-gray-700 border-b uppercase text-sm font-medium">
        <p>New York</p>
        <div className="flex items-center gap-x-2 text-gray-500">
          <CalendarIcon className="h-4 w-4" />
          <p>11:35 PM</p>
        </div>
      </CardHeader>

      <div className="grid gap-1">
        <CardTitle className="text-lg">San Francisco</CardTitle>
        <CardDescription className="text-sm text-gray-500 dark:text-gray-400">
          Sunny
        </CardDescription>
      </div>
      <CardContent className="grid gap-4">
        <div className="flex items-center gap-4">
          <ThermometerIcon className="h-6 w-6 text-gray-500 dark:text-gray-400" />
          <div className="grid gap-1">
            <p className="text-lg font-semibold">27°C</p>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Temperature
            </p>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <WindIcon className="h-6 w-6 text-gray-500 dark:text-gray-400" />
          <div className="grid gap-1">
            <p className="text-lg font-semibold">5 km/h</p>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Wind Speed
            </p>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <DropletIcon className="h-6 w-6 text-gray-500 dark:text-gray-400" />
          <div className="grid gap-1">
            <p className="text-lg font-semibold">60%</p>
            <p className="text-sm text-gray-500 dark:text-gray-400">Humidity</p>
          </div>
        </div>
      </CardContent>
    </Card>
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
