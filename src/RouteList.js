import { Route, Routes, Navigate } from "react-router-dom";
import Dog from "./Dog";
import Whiskey from "./Whiskey";
import Perry from "./Perry";
import Duke from "./Duke";

export default function RouteList() {
  return (
    <Routes>
      <Route path="/Dog/:name" element={<Dog />} />
      <Route path="/Dog/Whiskey" element={<Whiskey />} />
      <Route path="/Dog/Perry" element={<Perry />} />
      <Route path="/Dog/Duke" element={<Duke />} />
      <Route path="*" element={<Navigate to="/Dog" />} />
    </Routes>
  );
}
