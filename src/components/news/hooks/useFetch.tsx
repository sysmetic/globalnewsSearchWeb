import { useEffect, useRef, useState } from "react";

export const useFetch = () => {
  const [hasMore, setHasMore] = useState<boolean>(false);
  const [isLoading, setIsLoaing] = useState<Boolean>(false);
};
