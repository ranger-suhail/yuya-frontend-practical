export const getQueryId = (windowLocationSearch: string): string | null => {
  const urlParams = new URLSearchParams(windowLocationSearch);
  return urlParams.get("id");
};
