'use client'
import react, { useEffect } from 'react';

export default function AdminPortal() {
    useEffect(() => {
        window.open("https://admindashboard-nu-lovat.vercel.app/", "_self")
    }, []);

    return (
        <>
            <div>Redirecting to Admin Portal</div>
        </>
    );
}









