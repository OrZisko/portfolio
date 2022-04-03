import { useState, useEffect } from 'react';
import { sitesService } from '../servises/sites'
import ImgGallery from '../cmps/ImgGallery';

function Site(props) {
    const [site, setSite] = useState(null)
    useEffect(() => {
        const site = sitesService.getSiteById(props.match.params.id)
        setSite(site)
    }, [])


    if (!site) return <div>Loding</div>
    return (
        <div className='site-details'>
            <h1>{site.name}</h1>
            <ImgGallery imgName={site.imgName}></ImgGallery>
            <div className='txt-container'>
                <h4>{site.name}</h4>
                <hr />
                <ul className='site-detalis-list'>
                    <li><span>Main Technology:</span> {site.uses.frameworks.join(', ')}</li>
                    <li><span>Style:</span> {site.uses.style}</li>
                    {site.uses.serverSide && <li><span>Server Side:</span> {site.uses.serverSide.join(', ')}</li>}
                    {site.uses.others && <li><span>Also uses:</span> {site.uses.others.join(', ')}</li>}
                </ul>
                <p>{site.desc}</p>
                {site.special && <p className='special'>{site.special}</p>}
                <a href={site.ip} target="_blank" rel='noreferrer'>Visit the Site</a> |
                {site.github && <a href={site.github} target="_blank" rel='noreferrer'>Github</a>}
            </div>
        </div>
    );
}

export default Site;