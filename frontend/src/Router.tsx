import React, { useState, useMemo, createContext } from "react";

const paths = [
  "",
  "v1/customer",
  "v2/customer",
  "v3/customer",
  "v4/customer",
  "404",
] as const;

type Path = typeof paths[number];

const isPath = (path: string): path is Path => paths.includes(path as Path);

export const pagesMapping: { [key: string]: Path } = {
  home: "",
  customerV1: "v1/customer",
  customerV2: "v2/customer",
  customerV3: "v3/customer",
  customerV4: "v4/customer",
  notFound: "404",
};

export const RoutingContext = createContext({ page: pagesMapping.home });

export default function Router({ children }: { children: React.ReactNode }) {
  const urlPath = window.location.pathname.slice(1).toLowerCase();
  const path = isPath(urlPath) ? urlPath : pagesMapping.notFound;

  const [page, setPage] = useState<Path>(path);

  const value = useMemo(() => ({ page, setPage }), [page, setPage]);

  return (
    <RoutingContext.Provider value={value}>{children}</RoutingContext.Provider>
  );
}
