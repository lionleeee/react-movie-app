import { useEffect, useState } from "react";

const useInfiniteScroll = (): number => {
  const [page, setPage] = useState<number>(1);

  const handleScroll = (): void => {
    const scrollTop: number = document.documentElement.scrollTop;
    const innerHeight: number = window.innerHeight;
    const scrollHeight: number = document.documentElement.scrollHeight;

    if (scrollTop + innerHeight >= scrollHeight) {
      setPage((prevPage) => prevPage + 1);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  console.log(page);
  return page;
};

export default useInfiniteScroll;
