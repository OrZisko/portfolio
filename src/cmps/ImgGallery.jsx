import React, { useEffect, useRef, useState } from 'react';

function ImgGallery({ imgName }) {
    const [imgGallery, setImgGaleery] = useState([])
    const [galleryPos, setGalleryPos] = useState(0)
    let intervalIdRef = useRef()
    useEffect(() => {
        const imgs = [];
        for (let i = 1; i <= 3; i++) {
            imgs.push(imgName + i)
        }
        setImgGaleery(imgs)
        intervalIdRef.current = setInterval(() => {
            setGalleryPos(prevPos => prevPos < 200 ? prevPos + 100 : 0)
        }, 8000)
        return () => {
            clearInterval(intervalIdRef.current)
        }
    }, [])

    const isImgIdx = (idx) => {
        return (idx === galleryPos || galleryPos / idx === 100) ? 'img-idx now' : 'img-idx'
    }
    if (!imgGallery) return (<div>Loding...</div>)
    return (
        <div className='img-gallery'>
            <div className='img-container'>
                {imgGallery.map(img => <img style={{ left: `-${galleryPos}%` }} className='site-img' src={require(`../assets/images/sites-img/${img}.png`)} alt="" key={img} />)}
            </div>
            <div className='pagination'>
                {imgGallery.map((img, idx) => <div key={idx} className={isImgIdx(idx)} ></div>)}
            </div>
        </div>
    );
}

export default ImgGallery