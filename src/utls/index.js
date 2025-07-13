export const DEAFAULT_PLACE = {
  name: "London",
  place_id: "london-4298960",
  adm_area1: "Kentucky",
  adm_area2: "Laurel",
  country: "United States of Kingdom",
  lat: "37.12898N",
  lon: "84.08326W",
  timezone: "America/New_York",
  type: "settlement",
};

export const MEASUREMENT_SYSTEMS={
  AUTO:"auto",
  METRIC:"metric",
  UK:"uk",
  US:"us",
  CA:"ca"
}
export const UNITS = {
  metric: {
    temperature: '°C',
    precipitation: 'mm/h',
    wind_speed: 'm/s',
    visibility: 'km',
    humidity: '%',
    uv_index: '',
    cloud_cover: '%',
  },
  us: {
    temperature: '°F',
    precipitation: 'in/h',
    wind_speed: 'mph',
    visibility: 'mi',
    humidity: '%',
    uv_index: '',
    cloud_cover: '%',
  },
  uk: {
    temperature: '°C',
    precipitation: 'mm/h',
    wind_speed: 'mph',
    visibility: 'mi',
    humidity: '%',
    uv_index: '',
    cloud_cover: '%',
  },
  ca: {
    temperature: '°C',
    precipitation: 'mm/h',
    wind_speed: 'km/h',
    visibility: 'km',
    humidity: '%',
    uv_index: '',
    cloud_cover: '%',
  },
};
