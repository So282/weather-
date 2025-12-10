import WeatherWidget from "./WeatherWidget";

export default function App() {
  return (
    <div style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      minHeight: "100vh",
      background: "#e6eef7"
    }}>
      <WeatherWidget />
    </div>
  );
}
