import React from "react";
import { Link } from "react-router-dom";

interface RouteLinkProps {
  title: string;
  route: string;
}

const RouteLink: React.FC<RouteLinkProps> = ({ title, route }) => {
  return <Link to={route}>{title}</Link>
};

export default RouteLink;
