export interface Location {
  Version: number;
  Key: string;
  Type: string;
  Rank: number;
  LocalizedName: string;
  EnglishName: string;
  PrimaryPostalCode: string;
  Region: {
    ID: string;
    LocalizedName: string;
    EnglishName: string;
  };
  Country: {
    ID: string;
    LocalizedName: string;
    EnglishName: string;
  };
  AdministrativeArea: {
    ID: string;
    LocalizedName: string;
    EnglishName: string;
    Level: number;
    LocalizedType: string;
    EnglishType: string;
    CountryID: string;
  };
  TimeZone: {
    Code: string;
    Name: string;
    GmtOffset: number;
    IsDaylightSaving: boolean;
    NextOffsetChange: string | null;
  };
  GeoPosition: {
    Latitude: number;
    Longitude: number;
    Elevation: {
      Metric: {
        Value: number;
        Unit: string;
        UnitType: number;
      };
      Imperial: {
        Value: number;
        Unit: string;
        UnitType: number;
      };
    };
  };
  IsAlias: boolean;
  SupplementalAdminAreas: [];
  DataSets: string[];
}

export interface WeatherForecast {
  Headline: {
    EffectiveDate: string;
    EffectiveEpochDate: number;
    Severity: number;
    Text: string;
    Category: string;
    EndDate: string | null;
    EndEpochDate: number | null;
    MobileLink: string;
    Link: string;
  };
  DailyForecasts: {
    Date: string;
    EpochDate: number;
    Sun: {
      Rise: string;
      EpochRise: number;
      Set: string;
      EpochSet: number;
    };
    Moon: {
      Rise: string;
      EpochRise: number;
      Set: string;
      EpochSet: number;
      Phase: string;
      Age: number;
    };
    Temperature: {
      Minimum: {
        Value: number;
        Unit: string;
        UnitType: number;
      };
      Maximum: {
        Value: number;
        Unit: string;
        UnitType: number;
      };
    };
    RealFeelTemperature: {
      Minimum: {
        Value: number;
        Unit: string;
        UnitType: number;
        Phrase: string;
      };
      Maximum: {
        Value: number;
        Unit: string;
        UnitType: number;
        Phrase: string;
      };
    };
    RealFeelTemperatureShade: {
      Minimum: {
        Value: number;
        Unit: string;
        UnitType: number;
        Phrase: string;
      };
      Maximum: {
        Value: number;
        Unit: string;
        UnitType: number;
        Phrase: string;
      };
    };
    HoursOfSun: number;
    DegreeDaySummary: {
      Heating: {
        Value: number;
        Unit: string;
        UnitType: number;
      };
      Cooling: {
        Value: number;
        Unit: string;
        UnitType: number;
      };
    };
    AirAndPollen: {
      Name: string;
      Value: number;
      Category: string;
      CategoryValue: number;
      Type?: string;
    }[];
    Day: {
      Icon: number;
      IconPhrase: string;
      HasPrecipitation: boolean;
      PrecipitationType?: string;
      PrecipitationIntensity?: string;
      ShortPhrase: string;
      LongPhrase: string;
      PrecipitationProbability: number;
      ThunderstormProbability: number;
      RainProbability: number;
      SnowProbability: number;
      IceProbability: number;
      Wind: {
        Speed: {
          Value: number;
          Unit: string;
          UnitType: number;
        };
        Direction: {
          Degrees: number;
          Localized: string;
          English: string;
        };
      };
      WindGust: {
        Speed: {
          Value: number;
          Unit: string;
          UnitType: number;
        };
        Direction: {
          Degrees: number;
          Localized: string;
          English: string;
        };
      };
      TotalLiquid: {
        Value: number;
        Unit: string;
        UnitType: number;
      };
      Rain: {
        Value: number;
        Unit: string;
        UnitType: number;
      };
      Snow: {
        Value: number;
        Unit: string;
        UnitType: number;
      };
      Ice: {
        Value: number;
        Unit: string;
        UnitType: number;
      };
      HoursOfPrecipitation: number;
      HoursOfRain: number;
      HoursOfSnow: number;
      HoursOfIce: number;
      CloudCover: number;
      Evapotranspiration: {
        Value: number;
        Unit: string;
        UnitType: number;
      };
      SolarIrradiance: {
        Value: number;
        Unit: string;
        UnitType: number;
      };
      RelativeHumidity: {
        Minimum: number;
        Maximum: number;
        Average: number;
      };
      WetBulbTemperature: {
        Minimum: {
          Value: number;
          Unit: string;
          UnitType: number;
        };
        Maximum: {
          Value: number;
          Unit: string;
          UnitType: number;
        };
        Average: {
          Value: number;
          Unit: string;
          UnitType: number;
        };
      };
      WetBulbGlobeTemperature: {
        Minimum: {
          Value: number;
          Unit: string;
          UnitType: number;
        };
        Maximum: {
          Value: number;
          Unit: string;
          UnitType: number;
        };
        Average: {
          Value: number;
          Unit: string;
          UnitType: number;
        };
      };
    };
    Night: {
      Icon: number;
      IconPhrase: string;
      HasPrecipitation: boolean;
      ShortPhrase: string;
      LongPhrase: string;
      PrecipitationProbability: number;
      ThunderstormProbability: number;
      RainProbability: number;
      SnowProbability: number;
      IceProbability: number;
      Wind: {
        Speed: {
          Value: number;
          Unit: string;
          UnitType: number;
        };
        Direction: {
          Degrees: number;
          Localized: string;
          English: string;
        };
      };
      WindGust: {
        Speed: {
          Value: number;
          Unit: string;
          UnitType: number;
        };
        Direction: {
          Degrees: number;
          Localized: string;
          English: string;
        };
      };
      TotalLiquid: {
        Value: number;
        Unit: string;
        UnitType: number;
      };
      Rain: {
        Value: number;
        Unit: string;
        UnitType: number;
      };
      Snow: {
        Value: number;
        Unit: string;
        UnitType: number;
      };
      Ice: {
        Value: number;
        Unit: string;
        UnitType: number;
      };
      HoursOfPrecipitation: number;
      HoursOfRain: number;
      HoursOfSnow: number;
      HoursOfIce: number;
      CloudCover: number;
      Evapotranspiration: {
        Value: number;
        Unit: string;
        UnitType: number;
      };
      SolarIrradiance: {
        Value: number;
        Unit: string;
        UnitType: number;
      };
      RelativeHumidity: {
        Minimum: number;
        Maximum: number;
        Average: number;
      };
      WetBulbTemperature: {
        Minimum: {
          Value: number;
          Unit: string;
          UnitType: number;
        };
        Maximum: {
          Value: number;
          Unit: string;
          UnitType: number;
        };
        Average: {
          Value: number;
          Unit: string;
          UnitType: number;
        };
      };
      WetBulbGlobeTemperature: {
        Minimum: {
          Value: number;
          Unit: string;
          UnitType: number;
        };
        Maximum: {
          Value: number;
          Unit: string;
          UnitType: number;
        };
        Average: {
          Value: number;
          Unit: string;
          UnitType: number;
        };
      };
    };
    Sources: string[];
    MobileLink: string;
    Link: string;
  }[];
}
