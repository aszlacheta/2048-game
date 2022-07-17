
/**
 * Hook used to determine url query paramaters provided by the user
 * @returns {{hostname: string, port: string, radius: string, protocol: string}}
 */
export default function useGameQueryParams() {
  const params = new URLSearchParams(window.location.search);
  const hostname = params.get('hostname') ?? undefined;
  const port = params.get('port') ?? undefined;
  const radius = params.get('radius') ?? undefined;
  const protocol = params.get('protocol') ?? undefined;

  return { hostname, port, radius, protocol };
}