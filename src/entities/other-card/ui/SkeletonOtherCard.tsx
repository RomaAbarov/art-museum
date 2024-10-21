import ContentLoader from "react-content-loader";

export default function SkeletonOtherCard() {
  return (
    <ContentLoader
      speed={2}
      width={416}
      height={130}
      viewBox="0 0 416 130"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
    >
      <rect x="67" y="302" rx="0" ry="0" width="116" height="66" />
      <rect x="15" y="16" rx="0" ry="0" width="80" height="80" />
      <rect x="112" y="16" rx="0" ry="0" width="219" height="98" />
      <circle cx="377" cy="46" r="30" />
    </ContentLoader>
  );
}
