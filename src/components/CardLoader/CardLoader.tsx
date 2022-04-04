import React from "react";
import ContentLoader from "react-content-loader";

const CardLoader = () => (
  <ContentLoader
    speed={2}
    width={225}
    height={350}
    viewBox="0 0 225 350"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    <rect x="5" y="224" rx="0" ry="0" width="214" height="40" />
    <rect x="5" y="0" rx="0" ry="0" width="214" height="214" />
    <rect x="5" y="274" rx="10" ry="10" width="40" height="28" />
    <rect x="65" y="274" rx="10" ry="10" width="40" height="28" />
    <rect x="125" y="274" rx="10" ry="10" width="40" height="28" />
    <rect x="180" y="274" rx="10" ry="10" width="40" height="28" />
    <rect x="10" y="310" rx="20" ry="20" width="205" height="38" />
  </ContentLoader>
);

export default CardLoader;
