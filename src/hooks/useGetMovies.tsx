import { useQuery } from "@tanstack/react-query";

export default function useGetMovies(initialValue: string, apiFn: () => Promise<any>) {
    const { data, isLoading } = useQuery(["movies", initialValue], apiFn);
    const bannerData = data?.results.slice(0, 3);
    return { data, isLoading, bannerData }

}

