import React, { useEffect, useRef } from 'react';
import { FaArrowUp } from "react-icons/fa";

function BackToTopButton() {
    const buttonRef = useRef(null);

    function scrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }

    useEffect(() => {
        function handleScroll() {
            if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
                buttonRef.current.style.display = "block";
            } else {
                buttonRef.current.style.display = "none";
            }
        }

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <button ref={buttonRef} onClick={scrollToTop} style={{
            position: 'fixed',
            bottom: '20px',
            right: '20px',
            transform: 'translateX(-50%)',
            backdropFilter: 'blur(5px)',
            color: 'black',
            border: 'none',
            cursor: 'pointer',
            borderRadius: '50%',
            display:'flex',
            alignItems: 'center',
            width: '50x',
            height: '50px',
            justifyContent: 'center'
        }}><FaArrowUp size={24} /></button>
    );
}

export default BackToTopButton;