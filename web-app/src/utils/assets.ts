/**
 * Resolves static asset paths taking into account Vite's BASE_URL
 * (essential for GitHub Pages hosting under subpaths like /wow-churn-prediction/).
 */
export function getAssetUrl(path: string): string {
  const base = import.meta.env.BASE_URL || '/';
  const cleanBase = base.endsWith('/') ? base : `${base}/`;
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  return `${cleanBase}${cleanPath}`;
}
