import photo1 from "./images/photo1.jpeg"
import photo2 from "./images/photo2.jpeg"
import photo3 from "./images/photo3.jpeg"
import photo4 from "./images/photo4.jpeg"
import photo5 from "./images/photo5.JPG"
import photo6 from "./images/photo6.JPG"
import photo7 from "./images/photo7.JPG"


function MyGallery() {
    return (
        <div className="myGalleryCont">
            <div className="head">
                <h1>My Gallery</h1>
            </div>
            <div className="decorGallery">
                <div className="CircleMint"></div>
                <div className="dottedLineGal"></div>
            </div>
            {/*
                <div className="patch">
                    <img src={dots} alt="decoration"/>
                    </div>
                    
import dots from "./images/dots.png"
                */}
            <div className="galleryPhotos">
                <img src={photo1} alt="photo_of_my_gallery"/>
                <img src={photo2} alt="photo_of_my_gallery"/>
                <img src={photo3} alt="photo_of_my_gallery"/>
                <img src={photo4} alt="photo_of_my_gallery"/>
                <img src={photo5} alt="photo_of_my_gallery"/>
                <img src={photo6} alt="photo_of_my_gallery"/>
                <img src={photo7} alt="photo_of_my_gallery"/>
            </div>
            <div className="PinkCircle"></div>
        </div>
    )
}

export default MyGallery;