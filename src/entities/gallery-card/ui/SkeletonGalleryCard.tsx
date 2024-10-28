import ContentLoader from "react-content-loader";

export default function SkeletonGalleryCard() {
  return (
    <ContentLoader
      speed={2}
      width={387}
      height={514}
      viewBox="0 0 387 514"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
    >
      <rect x="0" y="0" rx="0" ry="0" width="387" height="444" />
      <rect x="36" y="378" rx="0" ry="0" width="334" height="132" />
    </ContentLoader>
  );
}
