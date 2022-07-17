/**
 * TODO
 * @returns 
 */
export default function useGameQueryParams() {
  const params = new URLSearchParams(window.location.search);
  const hostname = params.get('hostname');
  const port = params.get('port');
  const radius = params.get('radius');
  const protocol = params.get('protocol');

  return { hostname, port, radius, protocol };
}