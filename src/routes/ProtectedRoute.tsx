import { Navigate } from "react-router-dom";

interface ProtectedRouteProps {
  children: React.ReactNode;
}

export default function ProtectedRoute({
  children,
}: ProtectedRouteProps) {

  const isAuthenticated = false;

  return isAuthenticated ? children : <Navigate to="/login" />;
}