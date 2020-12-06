import bbox from "@turf/bbox";
import destination from "@turf/destination";
import { featureCollection, point } from "@turf/helpers";

export default function calculateBBox(centerPoint, radiusDistance) {
  console.log(centerPoint);
  const cp = point([centerPoint.lon, centerPoint.lat]);
  const NPoint = destination(cp, radiusDistance, 0, {
    units: "kilometers"
  });
  const SPoint = destination(cp, radiusDistance, 180, {
    units: "kilometers"
  });
  const EPoint = destination(cp, radiusDistance, 90, {
    units: "kilometers"
  });
  const WPoint = destination(cp, radiusDistance, 270, {
    units: "kilometers"
  });

  const fc = featureCollection([cp, NPoint, SPoint, EPoint, WPoint]);

  return bbox(fc);
}
