import { locations } from "../utilities/locations";

function LocationSelect({ handleLocationChange }) {
  return (
    <select
      onChange={handleLocationChange}
      className="bg-slate-800 p-5"
      id="location-select"
    >
      <option value="">Select a location</option>
      {locations.map((loc, index) => (
        <option key={index} value={loc.name}>
          {loc.name}
        </option>
      ))}
    </select>
  );
}

export default LocationSelect;
