import React, { useState } from 'react';

export function FadeInImage({ src, alt }) {
    const [loaded, setLoaded] = useState(false);

    return (
        <div
            style={{
                width: '100%',
                height: '100%',
                backgroundColor: '#ccc', // placeholder background
                position: 'relative',
                overflow: 'hidden',
            }}
        >
            <img
                src={src}
                alt={alt}
                onLoad={() => setLoaded(true)}
                style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    opacity: loaded ? 1 : 0,
                    transition: 'opacity 0.5s ease-in-out',
                    display: 'block',
                }}
                loading="lazy"
            />
        </div>
    );
}
