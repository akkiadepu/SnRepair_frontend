


import React, { useEffect, useState } from 'react';
import './HomeActivitsComponentsStyle.css';
import axios from 'axios';
import { Link } from 'react-router-dom';

function HomeActivitsComponent() {
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    // Fetch the latest activities from the backend
    const fetchActivities = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/image/latest-activities`);
        setActivities(response.data.slice(0, 4)); // Display only the latest 4 activities
      } catch (error) {
        console.error('Error fetching project activities:', error);
      }
    };

    fetchActivities();

    // Set interval to refetch data every 10 seconds
    const interval = setInterval(() => {
      fetchActivities();
    }, 10000);

    // Clear interval on component unmount
    return () => clearInterval(interval);
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
   
    <section id="activities" className="activities">
    <div className="container1">
        <h2>Latest Activities</h2>
        <h3 className="line"> the lorems fsfd sfbadfbsdf lkojnoilknoilk asdkjnklsdflksmksndkjvandlansdvksndvlaknkldbn oajrlkgnlksn</h3>
        <div className="activity-list">
            {activities.map((activity, index) => (
                <div className="activity-item" key={index}>
                    <AsyncImage fileName={activity.afterImageName} fetchImage={fetchImage} />
                    <h3>{activity.projectTitle}</h3>
                    <p>{activity.description}</p>
                    <Link to="/activits" className="activity-link">Click Here</Link>
                </div>
            ))}
        </div>
    </div>
</section>

    
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

    return imageSrc ? <img src={imageSrc} alt="Project After Image" /> : <p>Loading...</p>;
  }
}

export default HomeActivitsComponent;


