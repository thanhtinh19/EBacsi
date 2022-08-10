import '../../App.css';
import img1 from '../../img/banner/Banner 1 (1920x640).png'
import img2 from '../../img/banner/Banner 2 Tong dai.jpg'

import SlideBanner from './Banner/Banner';
import SlideLayout2 from './Layout2/Layout2';
import Layout3 from './Layout3/Layout3';
import Layout4 from './Layout4/Layout4';
import Layout5 from './Layout5/Layout5';
import Layout6 from './Layout6/Layout6';
import Layout7 from './Layout7/Layout7';
import Layout8 from './Layout8/Layout8';
const collection = [
    { src: img1, caption: "Caption one" },
    { src: img2, caption: "Caption two" },

];

function Home() {
    return (
        <div className="App">

            <SlideBanner
                input={collection}
                ratio={`3:2`}
                mode={`automatic`}
                timeout={`2500`}
            />
            <p className='title_layout2'>SẢN PHẨM - DỊCH VỤ NỔI BẬT</p>
            <SlideLayout2 />
            <Layout3 />
            <Layout4/>
            <Layout5/>
            <Layout6/>
            <Layout7/>
            <Layout8/>
        </div>
    );
}

export default Home;