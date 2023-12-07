/* eslint-disable no-unused-vars */
import React, { useState, useCallback, useEffect } from "react";
import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";
import arrowLeft from "../../assets/logo/icons/arrow_left.svg";
import axios from "axios";

const LocationMap = ({ setIsMapVisible }) => {
  const [map, setMap] = useState(null);
  const [customLocation, setCustomLocation] = useState(null);

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
        const address = locationDetails;

        // Log the results to the console
        console.log("Latitude:", customLocation.lat);
        console.log("Longitude:", customLocation.lng);
        console.log("Location Name:", address);
      } catch (error) {
        console.error("Error fetching location details:", error);
      }
    }
  };

  const containerStyle = {
    height: "20rem",
  };

  const apiKey = "AIzaSyBH0Ey-G2PbWkSCLyGG1A9TCg9LDPlzQpc";

  return (
    <>
      <section style={{ height: "26rem" }} className="p-3">
        <img
          src={arrowLeft}
          onClick={() => setIsMapVisible(false)}
          className="cursorP"
          alt=""
        />
      
          <GoogleMap
            mapContainerStyle={containerStyle}
            center={customLocation || { lat: 0, lng: 0 }}
            zoom={13}
            onLoad={onMapLoad}
            onClick={handleMapClick}
            apiKey={apiKey}
          >
            {/* Marker for user's current location */}
            <Marker
              position={customLocation || { lat: 0, lng: 0 }}
              label="📍"
            />

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
