// javascript
import { useState, useEffect } from 'react';
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

    const fetchPosts = async () => {
        const params = new URLSearchParams();

        if (techCategories.length > 0) techCategories.forEach(id => params.append('tech[]', id));
        if (specializationsCategories.length > 0) specializationsCategories.forEach(id => params.append('specialization[]', id));
        if (lvlCategories.length > 0) lvlCategories.forEach(id => params.append('level[]', id));
        if (contractCategories.length > 0) contractCategories.forEach(id => params.append('contract[]', id));
        if (dimensionCategories.length > 0) dimensionCategories.forEach(id => params.append('dimension[]', id));
        if (modeCategories.length > 0) modeCategories.forEach(id => params.append('mode[]', id));

        try {
            const res = await axiosInstance.get(`/api/posts?${params.toString()}`);
            setPosts(res.data);
        } catch (err) {
            console.log(err);
        }
    };

    const depsKey = JSON.stringify({
        techCategories,
        specializationsCategories,
        lvlCategories,
        contractCategories,
        dimensionCategories,
        modeCategories
    });

    useEffect(() => {
        fetchPosts();
    }, [depsKey]);

    return { posts, setPosts, fetchPosts };
}
