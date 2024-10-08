import React, { useEffect, useRef, useState } from "react";
import "./BeanMap.scss";
import { Loader } from "@googlemaps/js-api-loader";
import Bean from "../../assets/images/bean.png";
import BeanInfoBox from "../BeanInfoBox/BeanInfoBox";
import AddBeanForm from "../BeanForm/AddBeanForm";
import EditBeanForm from "../BeanForm/EditBeanForm";
import { googleMapsApiKey } from "../../utils/utils";

const googleMapsLoader = new Loader({
  apiKey: googleMapsApiKey,
  version: "weekly",
});

function MapComponent({
  center,
  zoom,
  selectedResult,
  setSelectedResult,
  beansData,
}) {
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

        beansData.forEach((bean) => {
          addMarker(
            { lat: bean.coordinates.latitude, lng: bean.coordinates.longitude },
            map
          );
        });

        setMap(map);
      })
      .catch((error) => {
        console.error("Error loading Google Maps API:", error);
      });
  }, [beansData, center, zoom]);

  useEffect(() => {
    if (map) {
      map.setCenter(center); // Update map center when center changes
    }
  }, [center, map]);

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

function BeanMap({ selectedResult, selectedBean, onBeanAdded, beansData }) {
  //Update the map center (make it move) when a result is clicked - but default is Calgary
  const [mapCenter, setMapCenter] = useState({
    lat: 51.041083366219205,
    lng: -114.06598360272451,
  });

  //states for showing the BeanForm
  const [showAddBeanForm, setShowAddBeanForm] = useState(false);
  const [refreshBeanList, setRefreshBeanList] = useState(false);

  useEffect(() => {
    // Check to ensure there are results, and a result was clicked
    if (selectedResult && selectedResult.coordinates) {
      const { latitude, longitude } = selectedResult.coordinates;

      setMapCenter({ lat: latitude, lng: longitude });
    }
  }, [selectedResult]);

  //If there is a selected Bean from Bean list, move the map to that bean
  useEffect(() => {
    if (selectedBean && selectedBean.coordinates) {
      const { latitude, longitude } = selectedBean.coordinates;
      setMapCenter({ lat: latitude, lng: longitude });
    }
  }, [selectedBean]);

  const handleAddBean = () => {
    setShowAddBeanForm(true); // Show the AddBeanForm when "Add a Bean" is clicked
  };

  const handleFormSubmit = (formData) => {
    console.log("Form submitted with data:", formData);
    // Handle logic upon form submission (add)
    setShowAddBeanForm(false); // Hide the AddBeanForm after submission
  };

  const handleBeanAdded = () => {
    onBeanAdded();
  };
  //If a bean is selected from the list, move the map to those coordinates and zoom
  if (selectedBean) {
    return (
      <section className="bean-map">
        <MapComponent center={mapCenter} zoom={17} beansData={beansData} />
      </section>
    );
  }

  if (!selectedResult && !selectedBean) {
    return (
      <section className="bean-map">
        <MapComponent center={mapCenter} zoom={12} beansData={beansData} />
      </section>
    );
  }

  const refreshBeanListData = () => {
    setRefreshBeanList((prev) => !prev);
  };
  return (
    <section className="bean-map">
      <MapComponent center={mapCenter} zoom={17} beansData={beansData} />
      <BeanInfoBox restaurant={selectedResult} onAddBean={handleAddBean} />
      {showAddBeanForm && (
        <AddBeanForm
          onSubmit={handleFormSubmit}
          onClose={() => setShowAddBeanForm(false)}
          selectedResult={selectedResult}
          onBeanAdded={onBeanAdded}
        />
      )}
    </section>
  );
}

export default BeanMap;
