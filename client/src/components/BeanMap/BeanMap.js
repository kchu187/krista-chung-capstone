import React, { useEffect, useRef, useState } from "react";
import "./BeanMap.scss";
import { Loader } from "@googlemaps/js-api-loader";
import Bean from "../../assets/images/bean.png";
import SearchBar from "../SearchBar/SearchBar";
const googleMapsLoader = new Loader({
  apiKey: "AIzaSyD3hrKzV6JPwWbe_1oAowzXdnpTsOwaZXA",
  version: "weekly",
});
// Use and customize Google's provided Javascript code into states
function MapComponent({ center, zoom }) {
  const [map, setMap] = useState(null);
  const mapContainerRef = useRef(null);
  const markers = [];
  useEffect(() => {
    googleMapsLoader
      .load()
      .then(() => {
        const map = new window.google.maps.Map(mapContainerRef.current, {
          center,
          zoom,
          mapId: "82e8c7d0a07affc8",
        });

        map.addListener("click", (event) => {
          addMarker(event.latLng, map);
        });
        setMap(map);
      })
      .catch((error) => {
        console.error("Error loading Google Maps API:", error);
      });
  }, [center, zoom]);
  const addMarker = (location, map) => {
    const marker = new window.google.maps.Marker({
      position: location,
      map,
      icon: {
        url: Bean,
        scaledSize: new window.google.maps.Size(40, 40),
      },
    });
    markers.push(marker);
  };
  return <div ref={mapContainerRef} className="map"></div>;
}

function BeanMap() {
  return (
    <section className="bean-map">
      <SearchBar />
      <MapComponent
        center={{ lat: 51.041083366219205, lng: -114.06598360272451 }}
        zoom={11.5}
      />
    </section>
  );
}

export default BeanMap;
