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
            left: '50%',
            transform: 'translateX(-50%)',
            backdropFilter: 'blur(10px)',
            color: 'black',
            border: 'none',
            cursor: 'pointer',
            padding: '5px 15px', 
            borderRadius: '50px',
            fontSize: '18px',
            display:'flex',
            alignItems: 'center',
            width: '200px',
            justifyContent: 'center'
        }}><FaArrowUp />Back to top </button>
    );
}

export default BackToTopButton;