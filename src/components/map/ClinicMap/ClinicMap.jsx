import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { useTranslation } from "react-i18next";
import "./ClinicMap.css";

import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";

const CLINIC_POSITION = [52.5163, 13.3889];

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon2x,
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});

const ClinicMap = () => {
  const { t } = useTranslation("clinic");

  return (
    <div className="clinic-map">
      <MapContainer
        center={CLINIC_POSITION}
        zoom={15}
        scrollWheelZoom={false}
        className="clinic-map__container"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={CLINIC_POSITION}>
          <Popup>
            <strong>{t("title")}</strong>
            <br />
            {t("address.value")}
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default ClinicMap;
