import React from 'react';

function Cards() {
    const arr = [
           { title: "hour", src: '/images/hour.png', para: "$1040", },
        { title: "laptop", src: '/images/laptop.jpeg', para: "$300", },
        { title: "Virtual reality", src: '/images/Virtual reality.jpg', para: "$8000", },
        
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

export default Cards;
