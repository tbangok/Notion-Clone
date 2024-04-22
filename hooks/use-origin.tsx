import { useEffect, useState } from "react";

export const useOrigin = () => {
  const [mounted, setMounted] = useState(false);

  //So origin type of window is undefined, is not undefined. In that case, we're gonna checking if we have the window location origin. If we do, we are using the origin, otherwise we are adding the empty string.
  const origin =
    typeof window !== "undefined" && window.location.origin
      ? window.location.origin
      : "";

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return "";
  }

  return origin
};
