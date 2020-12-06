import React from "react";

export default function BBoxDisplay(props) {
  return (
    <pre>
      <code>{JSON.stringify(props.bbox)}</code>
    </pre>
  );
}
