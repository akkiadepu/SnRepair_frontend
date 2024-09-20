
import "./ActivitsCardStyle.css";
import React, { useEffect, useState } from 'react';
import axios from 'axios';

function ActivitsCardComponent() {

  const [activities, setActivities] = useState([]);

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_BACKEND_URL}/image/project-activities`)
      .then(response => {
        setActivities(response.data);
      })
      .catch(error => {
        console.error('Error fetching project activities:', error);
      });
  }, []);


  const fetchImage = async (fileName) => {
    try {
      const response = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/image/fileSystem/${fileName}`, {
        responseType: 'blob',
      });
      const imageURL = URL.createObjectURL(response.data);
      return imageURL;
    } catch (error) {
      console.error('Error fetching image:', error);
      return 'path/to/fallback/image.jpg'; // Fallback image on error
    }
  };



  return (
    // <div className="project">
    //   {activities.map((activity, index)=>(
    //     <div key={index}>
    //     <h2>{activity.projectTitle}</h2>
    //     <div className="images">
    //       {/* <img src={beforeImage} alt="before" /> */}
    //       <AsyncImage fileName={activity.beforeImageName} fetchImage={fetchImage} />
    //       {/* <img src={afterImage} alt="after" /> */}
    //       <AsyncImage fileName={activity.afterImageName} fetchImage={fetchImage} />
    //     </div>
    //     <p>{activity.description}</p>
    //     <hr />
    //     </div>
    //   ))}
      
    // </div>
<>
    {/* <div className="card" style={{width:"18rem"}}>
  <img src="..." className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" className="btn btn-primary">Go somewhere</a>
  </div>
</div> */}
<div className="project-container">
      {activities.map((activity, index) => (
        <div key={index} className="project">
          <h2>{activity.projectTitle}</h2>
          <div className="image-wrapper">
            <div className="image-item">
              <AsyncImage fileName={activity.beforeImageName} fetchImage={fetchImage} />
              <span className="label">before</span>
            </div>
            <div className="image-item">
              <AsyncImage fileName={activity.afterImageName} fetchImage={fetchImage} />
              <span className="label">after</span>
            </div>
          </div>
          <p>{activity.description}</p>
          <hr />
        </div>
      ))}
    </div>
</>
  );

  function AsyncImage({ fileName, fetchImage }) {
    const [imageSrc, setImageSrc] = useState(null);
  
    useEffect(() => {
      const loadImage = async () => {
        const imageURL = await fetchImage(fileName);
        setImageSrc(imageURL);
      };
  
      loadImage();
    }, [fileName, fetchImage]);
  
    return imageSrc ? <img src={imageSrc} alt="Project Image" /> : <p>Loading...</p>;
  }
}

export default ActivitsCardComponent;
