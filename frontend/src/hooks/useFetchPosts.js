import { useState, useEffect, useCallback } from 'react';
import axiosInstance from '../api/axiosInstance';

export function useFetchPosts(
    techCategories = [],
    specializationsCategories = [],
    lvlCategories = [],
    contractCategories = [],
    dimensionCategories = [],
    modeCategories = []
) {
    const [posts, setPosts] = useState([]);
    const [paginationData, setPaginationData] = useState(null); 
    const [page, setPage] = useState(1);
    const [hasMore, setHasMore] = useState(true);
    const [loading, setLoading] = useState(false);

    const fetchPosts = useCallback(async (isInitial = false) => {
        if (loading || (!hasMore && !isInitial)) return;

        setLoading(true);
        const params = new URLSearchParams();
        
        const pageToFetch = isInitial ? 1 : page;
        params.append('page', pageToFetch);

        if (techCategories.length > 0) techCategories.forEach(id => params.append('tech[]', id));
        if (specializationsCategories.length > 0) specializationsCategories.forEach(id => params.append('specialization[]', id));
        if (lvlCategories.length > 0) lvlCategories.forEach(id => params.append('level[]', id));
        if (contractCategories.length > 0) contractCategories.forEach(id => params.append('contract[]', id));
        if (dimensionCategories.length > 0) dimensionCategories.forEach(id => params.append('dimension[]', id));
        if (modeCategories.length > 0) modeCategories.forEach(id => params.append('mode[]', id));

        try {
            const res = await axiosInstance.get(`/api/posts?${params.toString()}`);
            
            const paginator = res.data.data; 
            const newData = paginator.data; 

            setPosts(prev => isInitial ? newData : [...prev, ...newData]);
            
            setPaginationData(paginator);
            
            setHasMore(paginator.current_page < paginator.last_page);
            setPage(paginator.current_page + 1);

        } catch (err) {
            console.error('Błąd pobierania ofert:', err);
        } finally {
            setLoading(false);
        }
    }, [page, hasMore, loading, techCategories, specializationsCategories, lvlCategories, contractCategories, dimensionCategories, modeCategories]);
    useEffect(() => {
        setHasMore(true);
        fetchPosts(true);
    }, [JSON.stringify({ techCategories, specializationsCategories, lvlCategories, contractCategories, dimensionCategories, modeCategories })]);

    return { 
        posts, 
        paginationData,
        loading, 
        hasMore, 
        fetchNextPage: () => fetchPosts(false) 
    };
}