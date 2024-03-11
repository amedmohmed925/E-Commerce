
import React from 'react';

function CardsSectionThree() {
    const arr = [
        { title: "Beats", src: '/images/headPhone2.jpg', para: "$995", },
        { title: "Rocky Mountain", src: '/images/headPhone3.jpg', para: "$899", },
        { title: "Game Console Controller", src: '/images/headPhone4.jpg', para: "$990", },
        { title: "White EliteBook Tablet 810", src: '/images/headPhone5.jpg', para: "$8,250", },
        { title: "Gore Wear C7", src: '/images/headPhone6.jpg', para: "$459", },
        { title: "Wireless Audio System 360", src: '/images/headPhone7.jpg', para: "$799", },
        { title: "Beats", src: '/images/headPhone8.jpg', para: "$950", },
        { title: "Smartwatch 2.0 LTE Wifi", src: '/images/headPhone9.jpg', para: "$499", },

    ]

    return (
        <div className='main py-5 d-flex w-100 flex-wrap gap-3'>
            {arr.length >= 1 ? (
                arr.map((e, i) => (
                    <div className='card-box box mx-auto' key={i}>
                        <img className='w-100 rounded' src={e.src} alt={e.title} />
                        <h2 className='fs-4 fw-light'>{e.title}</h2>
                        <p className='fw-bold'>{e.para}</p>
                    </div>
                ))
            ) : (
                <h1 className='error'>Not Found</h1>
            )}
        </div>
    );
}

export default CardsSectionThree;