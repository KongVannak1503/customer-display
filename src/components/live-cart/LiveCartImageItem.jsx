import React from 'react'

const LiveCartImageItem = () => {
    return (
        <div
            style={{
                width: '100%',
                height: '100%',
                backgroundColor: '#ccc',
                position: 'relative',
                overflow: 'hidden',
            }}
        >
            <img
                src="https://www.thomas-henry.com/wp-content/uploads/2016/12/thomas-henry-fancy-drink-recipe.jpg"
                style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    transition: 'opacity 0.5s ease-in-out',
                    display: 'block',
                }}
                loading="lazy"
            />
        </div>
    )
}

export default LiveCartImageItem
