import { useParams, Navigate } from "react-router-dom";

export default function Dog() {
  const params = useParams();
  if (
    params.name !== "Wishkey" &&
    params.name !== "Perry" &&
    params.name !== "Duke"
  ) {
    return <Navigate to="/Dog" />;
  }
  return (
    <div>
      <h1>Here's more information about your fav dog {params.name}</h1>
    </div>
  );
}
