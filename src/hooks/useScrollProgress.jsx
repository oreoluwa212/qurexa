import { useEffect } from 'react';

const useScrollProgress = () => {
    useEffect(() => {
        const updateScrollProgress = () => {
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            const scrollProgress = (scrollTop / scrollHeight) * 100;

            document.body.style.setProperty('--scroll-progress', `${scrollProgress}%`);
        };

        window.addEventListener('scroll', updateScrollProgress);
        updateScrollProgress();

        return () => window.removeEventListener('scroll', updateScrollProgress);
    }, []);
};

export default useScrollProgress;