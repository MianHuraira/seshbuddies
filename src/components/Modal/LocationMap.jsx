import React, { useRef, useState, useEffect } from "react";
import arrowLeft from "../../assets/logo/icons/arrow_left.svg";
import { Map, Marker, GoogleApiWrapper } from "google-maps-react";

const LocationMap = ({ setIsMapVisible }) => {
  const mapRef = useRef(null);
  const [selectedLocation, setSelectedLocation] = useState(null);

  const handleMapClick = (mapProps, map, clickEvent) => {
    const lat = clickEvent.latLng.lat();
    const lng = clickEvent.latLng.lng();
    setSelectedLocation({ lat, lng });
  };

  const handleSaveClick = () => {
    console.log("Selected Location:", selectedLocation);
    setIsMapVisible(false);
  };

  useEffect(() => {
    // Fetch the user's current location using Geolocation API
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          const initialLocation = { lat: latitude, lng: longitude };
          mapRef.current.map.setCenter(initialLocation);
          setSelectedLocation(initialLocation);
        },
        (error) => {
          console.error("Error getting current location:", error);
        }
      );
    } else {
      console.error("Geolocation is not supported by this browser.");
    }
  }, []);

  return (
    <>
      <section
        className={`p-3 ${
          selectedLocation ? "map-container" : "map-container-empty"
        }`}
      >
        <img
          src={arrowLeft}
          onClick={() => setIsMapVisible(false)}
          className="cursorP"
          alt=""
        />
        <div className="position-relative h-75 d-flex flex-column justify-content-between">
          <Map
            ref={mapRef}
            google={window.google}
            zoom={14}
            onClick={handleMapClick}
          >
            {selectedLocation && (
              <Marker
                position={{
                  lat: selectedLocation.lat,
                  lng: selectedLocation.lng,
                }}
              />
            )}
          </Map>
        </div>
        <button className="btn-primary text-center" onClick={handleSaveClick}>
          Save
        </button>
      </section>
    </>
  );
};

export default GoogleApiWrapper({
  apiKey: "AIzaSyBH0Ey-G2PbWkSCLyGG1A9TCg9LDPlzQpc",
})(LocationMap);
