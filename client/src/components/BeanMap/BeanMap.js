import React, { useEffect, useRef, useState } from "react";
import "./BeanMap.scss";
import { Loader } from "@googlemaps/js-api-loader";

const googleMapsLoader = new Loader({
  apiKey: "AIzaSyD3hrKzV6JPwWbe_1oAowzXdnpTsOwaZXA",
  version: "weekly",
});
// Use and customize Google's provided Javascript code into states
function MapComponent({ center, zoom }) {
  const [map, setMap] = useState(null);
  const mapContainerRef = useRef(null);

  useEffect(() => {
    googleMapsLoader
      .load()
      .then(() => {
        const map = new window.google.maps.Map(mapContainerRef.current, {
          center,
          zoom,
          mapId: "82e8c7d0a07affc8",
        });
        setMap(map);
      })
      .catch((error) => {
        console.error("Error loading Google Maps API:", error);
      });
  }, [center, zoom]); // Dependency array ensures useEffect runs whenever center or zoom changes

  return <div ref={mapContainerRef} className="map"></div>;
}

function BeanMap() {
  return (
    <section className="bean-map">
      <MapComponent
        center={{ lat: 51.041083366219205, lng: -114.06598360272451 }}
        zoom={11.5}
      />
    </section>
  );
}

export default BeanMap;
