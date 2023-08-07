import React, { useState } from "react";
import {
  GoogleMap,
  MarkerF,
  InfoWindow,
  useLoadScript,
} from "@react-google-maps/api";
import "./googlemap.css";

const RoadOneGoogleMap = () => {
  const apiKey = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;

  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: apiKey,
  });

  const [selectedMarker, setSelectedMarker] = useState(null);

  const markers = [
    {
      id: 1,
      position: { lat: 35.52513349841678, lng: 116.80320235379374 },
    },
  ];

  const handleMarkerClick = (marker) => {
    setSelectedMarker(marker);
  };

  if (loadError) {
    return <div>Error loading Google Maps</div>;
  }

  if (!isLoaded) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <GoogleMap
        zoom={16}
        center={{ lat: 35.52528865781779, lng: 116.80314547486742 }}
        mapContainerClassName="map">
        {markers.map((marker) => (
          <MarkerF
            key={marker.id}
            position={marker.position}
            onClick={() => handleMarkerClick(marker)}
          />
        ))}
      </GoogleMap>
    </div>
  );
};

export default RoadOneGoogleMap;
