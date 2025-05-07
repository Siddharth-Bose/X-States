import { useEffect, useState } from "react";
import styles from "./Selector.module.css";

// Base URL of the location API
const baseEndpoint = "https://crio-location-selector.onrender.com/";

export default function Selector() {
  // State variables for dropdown options and user selections
  const [countries, setCountries] = useState([]);
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedState, setSelectedState] = useState("");
  const [selectedCity, setSelectedCity] = useState("");

  // Fetch all countries on initial render
  useEffect(() => {
    async function fetchCountries() {
      try {
        const response = await fetch(`${baseEndpoint}countries`);
        const data = await response.json();
        setCountries(data);
      } catch (error) {
        console.error("Error fetching countries: ", error.message);
      }
    }
    fetchCountries();
  }, []);

  // Fetch states when a country is selected
  useEffect(() => {
    async function fetchState() {
      try {
        const response = await fetch(
          `${baseEndpoint}country=${selectedCountry}/states`
        );
        const data = await response.json();
        setStates(data);
      } catch (error) {
        console.error("Error fetching countries: ", error.message);
      }
    }
    if (selectedCountry) fetchState();
  }, [selectedCountry]);

  // Fetch cities when a state is selected
  useEffect(() => {
    async function fetchCity() {
      try {
        const response = await fetch(
          `${baseEndpoint}country=${selectedCountry}/state=${selectedState}/cities`
        );
        const data = await response.json();
        setCities(data);
      } catch (error) {
        console.error("Error fetching countries: ", error.message);
      }
    }
    if (selectedState) fetchCity();
  }, [selectedCountry, selectedState]);

  // Handle country selection change
  function handleCountryChange(e) {
    setSelectedCountry(e.target.value);
    setSelectedState("");
    setSelectedCity("");
  }

  // Handle state selection change
  function handleStateChange(e) {
    setSelectedState(e.target.value);
    setSelectedCity("");
  }

  // Handle city selection change
  function handleCityChange(e) {
    setSelectedCity(e.target.value);
  }

  return (
    <>
      {/* Dropdown section for country, state, and city */}
      <div className={styles.selectWrapper}>
        {/* Country Dropdown */}
        <select
          name="country"
          id="country"
          onChange={(e) => {
            handleCountryChange(e);
          }}
          value={selectedCountry}
          className={styles.countrySelect}
        >
          <option value="">Select Country</option>
          {countries.map((country) => {
            return (
              <option key={country} value={country}>
                {country}
              </option>
            );
          })}
        </select>
        {/* State Dropdown */}
        <select
          name="state"
          id="state"
          disabled={!selectedCountry}
          onChange={(e) => {
            handleStateChange(e);
          }}
          value={selectedState}
          className={styles.stateSelect}
        >
          <option value="">Select State</option>
          {states?.map((state) => {
            return (
              <option key={state} value={state}>
                {state}
              </option>
            );
          })}
        </select>
        {/* City Dropdown */}
        <select
          name="city"
          id="city"
          disabled={!selectedState}
          onChange={(e) => {
            handleCityChange(e);
          }}
          value={selectedCity}
          className={styles.citySelect}
        >
          <option value="">Select City</option>
          {cities?.map((city) => {
            return (
              <option key={city} value={city}>
                {city}
              </option>
            );
          })}
        </select>
      </div>
      {/* Final output showing the selected location */}
      {selectedCity && (
        <span className={styles.paragraph}>
          {`You selected `}
          <span className={styles.countryText}>{`${selectedCity} `}</span>
          <span className={styles.stateCityText}>
            {`${selectedState}, ${selectedCountry}`}
          </span>
          <h6 className={styles.testCase}>
            You selected {selectedCity}, {selectedState}, {selectedCountry}
          </h6>
        </span>
      )}
    </>
  );
}
