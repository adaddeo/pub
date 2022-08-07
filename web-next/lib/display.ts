export const displayHash = (hash: string) =>
  hash.slice(0, 5) + "..." + hash.slice(hash.length - 6, hash.length - 1);
