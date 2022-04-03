import { sitesService } from '../servises/sites'
import SitePreview from './SitePreview';
function Portfolio() {
    const sites = sitesService.query()
    return (
        <div id='portfolio' className="portfolio main-cmp">
            <div className="portfolio-container">
                <div className="txt-container">
                    <h1>My Portfolio</h1>
                    <p>A small gallery of some of my projects done throughout my carrer. Some of the projects was done with amazing people i've worked with (credits will be given accordingly), and others are all mine too crdit.
                    </p>
                </div>
                <div className="gallery-container">
                    <ul className='gallery'>
                        {sites.map(site =>
                            <SitePreview site={site} key={site.id}></SitePreview>)}
                    </ul>
                </div>
            </div>
        </div >
    );
}

export default Portfolio;