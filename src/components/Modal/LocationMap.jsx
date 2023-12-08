/* eslint-disable no-unused-vars */
import React, { useState, useCallback, useEffect } from "react";
import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";
import arrowLeft from "../../assets/logo/icons/arrow_left.svg";
import axios from "axios";
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from "react-places-autocomplete";

const LocationMap = ({ setIsMapVisible, onSave }) => {
  const [map, setMap] = useState(null);
  const [customLocation, setCustomLocation] = useState(null);
  const [searchAddress, setSearchAddress] = useState("");
  const [lat, setLat] = useState("");
  const [lang, setLang] = useState("");
  const [location, setLocation] = useState("");

  const onMapLoad = useCallback((map) => {
    setMap(map);
  }, []);

  useEffect(() => {
    // Fetch the user's current location when the component mounts
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setCustomLocation({ lat: latitude, lng: longitude });
        },
        (error) => {
          console.error("Error fetching current location:", error.message);
        }
      );
    } else {
      console.error("Geolocation is not supported by this browser.");
    }
  }, []); // Run this effect only once when the component mounts

  const handleMapClick = (event) => {
    const { latLng } = event;
    setCustomLocation({ lat: latLng.lat(), lng: latLng.lng() });
  };

  const handleSaveClick = async () => {
    // Use the Geocoding API to get address details
    if (customLocation) {
      try {
        const response = await axios.get(
          `https://maps.googleapis.com/maps/api/geocode/json?latlng=${customLocation.lat},${customLocation.lng}&key=AIzaSyBH0Ey-G2PbWkSCLyGG1A9TCg9LDPlzQpc`
        );

        const locationDetails = response.data.results[0];
        const addressComponents = locationDetails.address_components;

        // Extract city and country information
        let city = "";
        let country = "";

        for (const component of addressComponents) {
          if (component.types.includes("locality")) {
            city = component.long_name;
          } else if (component.types.includes("country")) {
            country = component.long_name;
          }
        }
        setLat(customLocation.lat);
        setLang(customLocation.lng);
        setLocation(`${city}, ${country}`);

        onSave({
          lat: customLocation.lat,
          lang: customLocation.lng,
          location: `${city}, ${country}`,
        });
        setIsMapVisible(false);
      } catch (error) {
        console.error("Error fetching location details:", error);
      }
    }
  };

  const containerStyle = {
    height: "20rem",
  };

  const apiKey = "AIzaSyBH0Ey-G2PbWkSCLyGG1A9TCg9LDPlzQpc";

  const handleAddressChange = (address) => {
    setSearchAddress(address);
  };

  const handleSelect = async (address) => {
    try {
      const results = await geocodeByAddress(address);
      const latLng = await getLatLng(results[0]);

      setCustomLocation({ lat: latLng.lat, lng: latLng.lng });
      setSearchAddress(address);
    } catch (error) {
      console.error("Error selecting address:", error);
    }
  };

  return (
    <>
      <section style={{ height: "26rem" }} className="p-3">
        <img
          src={arrowLeft}
          onClick={() => setIsMapVisible(false)}
          className="cursorP"
          alt=""
        />
        <PlacesAutocomplete
          value={searchAddress}
          onChange={handleAddressChange}
          onSelect={handleSelect}
        >
          {({
            getInputProps,
            suggestions,
            getSuggestionItemProps,
            loading,
          }) => (
            <div className="mainSearchDiv00">
              <input
                {...getInputProps({
                  placeholder: "Search for a place...",
                  className: "form-control",
                })}
              />
              <div className="autocomplete-dropdown-container suggDiv00">
                {loading && <div>Loading...</div>}
                {suggestions.map((suggestion) => {
                  const style = {
                    backgroundColor: suggestion.active ? "#006835" : "#fff",
                    color: suggestion.active ? "#ffff" : "",
                    padding: suggestion.active ? "5px" : "5px",
                  };
                  return (
                    <div
                      {...getSuggestionItemProps(suggestion, { style })}
                      key={suggestion.placeId}
                    >
                      {suggestion.description}
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </PlacesAutocomplete>

        <GoogleMap
          mapContainerStyle={containerStyle}
          center={customLocation || { lat: 0, lng: 0 }}
          zoom={13}
          onLoad={onMapLoad}
          onClick={handleMapClick}
          apiKey={apiKey}
        >
          {/* Marker for user's current location */}
          <Marker position={customLocation || { lat: 0, lng: 0 }} label="📍" />

          {/* Marker for custom location */}
          {customLocation && <Marker position={customLocation} label="📍" />}
        </GoogleMap>

        <button className="btn-primary text-center" onClick={handleSaveClick}>
          Save
        </button>
      </section>
    </>
  );
};

export default LocationMap;
