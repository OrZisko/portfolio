import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'

function SitePreview({ site }) {

    const [isShown, toggleShow] = useState()
    const onShowMore = (ev) => {
        ev.preventDefault()
        toggleShow(!isShown)
    }
    console.log(site);
    useEffect(() => {
        // toggleShow(require(site.imgs[0]))
    }, [])
    return (
        <article className='site-preview'>
            <Link to={`/site/${site.id}`}>
                <h4>{site.name}</h4>
                {site.imgName && <img src={require(`../assets/images/sites-img/${site.imgName}1.png`)} alt="" />}
            </Link>
        </article>
    );
}

export default SitePreview;