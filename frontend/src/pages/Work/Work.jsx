import { useEffect, useRef } from 'react';
import { Layout } from '../../components/Layout/Layout'
import WorkView from '../../components/WorkView/WorkView'
import { useLocation } from "react-router-dom";
import { useFetchPosts } from "../../hooks/useFetchPosts.js";

export function Work() {
    const location = useLocation();
    const loaderRef = useRef(null);
    const filters = location.state?.filters ?? [];

    const { posts, loading, hasMore, fetchNextPage } = useFetchPosts(
        filters.tech || [],
        filters.specializations || [],
        filters.level || [],
        filters.contract || [],
        filters.dimension || [],
        filters.mode || []
    );

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting && hasMore && !loading) {
                fetchNextPage();
            }
        }, { threshold: 1.0 });

        if (loaderRef.current) observer.observe(loaderRef.current);

        return () => observer.disconnect();
    }, [hasMore, loading, fetchNextPage]);

    return (
        <Layout abs={true}>
            <WorkView posts={posts} />
            <div ref={loaderRef} style={{ height: '40px', margin: '20px 0', textAlign: 'center' }}>
                {loading && <p style={{ color: 'var(--main-color)', fontWeight: '600' }}>Ładowanie kolejnych ofert...</p>}
                {!hasMore && posts.length > 0 && <p>To już wszystkie oferty dla Twoich filtrów.</p>}
            </div>
        </Layout>
    );
}