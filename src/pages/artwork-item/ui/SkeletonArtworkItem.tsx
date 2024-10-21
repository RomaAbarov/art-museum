import ContentLoader from "react-content-loader";

export default function SkeletonArtworkItem() {
  return (
    <ContentLoader
      speed={2}
      width={1280}
      height={570}
      viewBox="0 0 1280 570"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
    >
      <rect x="0" y="0" rx="0" ry="0" width="497" height="570" />
      <rect x="650" y="0" rx="0" ry="0" width="640" height="80" />
      <rect x="650" y="110" rx="0" ry="0" width="350" height="20" />
      <rect x="650" y="340" rx="0" ry="0" width="480" height="230" />
    </ContentLoader>
  );
}
