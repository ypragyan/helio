export default function asset(path) {
  const clean = path.replace(/^\.\//, "").replace(/^\//, "");
  return process.env.NODE_ENV === "production" ? `./${clean}` : `/${clean}`;
}
