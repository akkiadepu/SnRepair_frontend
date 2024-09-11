// import React from 'react'
// import './AdminDashboardStyle.css';
// import { useEffect, useState } from "react";

// import axios from "axios";
// import AdminNav from './AdminNav';


// function AdminDashboard() {
  
//     const [projectTitle, setProjectTitle] = useState('');
//     const [beforeImage, setBeforeImage] = useState(null);
//     const [afterImage, setAfterImage] = useState(null);
//     const [description, setDescription] = useState('');
  
//     const handleSubmit = async (event) => {
//       event.preventDefault();
      
//       const formData = new FormData();
//       formData.append('projectTitle', projectTitle);
//       formData.append('beforeImage', beforeImage);
//       formData.append('afterImage', afterImage);
//       formData.append('description', description);
  
//       try {
//         const response = await axios.post('/api/admin/register', formData, {
//           headers: {
//             'Content-Type': 'multipart/form-data'
//           }
//         });
//         alert(response.data);
//         console.log(response.data);
  
//         setProjectTitle('');
//         setBeforeImage(null);
//         setAfterImage(null);
//         setDescription('');
//         // Reset the file input fields
//         document.getElementById('beforeImage').value = '';
//         document.getElementById('afterImage').value = '';
  
//       } catch (error) {
  
//         console.error("There was an error submitting the form!", error);
//         alert(`Error: ${error.response ? error.response.data : error.message}`);
        
//       }
//     };
  
//     return (
//       <div>
//         Admin

//         <AdminNav/>
//         <form class="form" onSubmit={handleSubmit}>
//           <p class="title">Register </p>
//           <p class="message">Signup now and get full access to our app. </p>
//           <div class="flex">
//             <label>
//               <input class="input" type="text" placeholder="" value={projectTitle} onChange={(e) => setProjectTitle(e.target.value)} required />
//               <span>Project title</span>
//             </label>
//           </div>
  
//           <div class="container">
//             <label htmlFor="beforeImage">Choose before a image:</label>
//             <input accept=".jpg, .jpeg, .png, .svg, .png" className="inpdddut" name="beforeImage" id="beforeImage" type="file"  onChange={(e) => setBeforeImage(e.target.files[0])} required/>
  
//             <label htmlFor="afterImage">Choose after a image:</label>
//             <input accept=".jpg, .jpeg, .png, .svg, .png" className="inpdddut" name="afterImage" id="afterImage" type="file" onChange={(e) => setAfterImage(e.target.files[0])} required/>
//             {/* <input value="Send" type="submit" class="inpdddut"/> */}
//           </div>
  
//           <label>
//             <input className="input" type="text" placeholder="" value={description} onChange={(e) => setDescription(e.target.value)} required/>
//             <span>Desc</span>
//           </label>
  
//           <button className="submit" type="submit">Submit</button>
//           <button className="submit" type="reset">reset</button>
  
//         </form>
//       </div>
//     )

// }

// export default AdminDashboard;

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './AdminDashboardStyle.css';
import AdminNav from './AdminNav';

function AdminDashboard() {
  const [activities, setActivities] = useState([]);

  // Fetch project activities from the backend
  useEffect(() => {
    axios.get(`${process.env.REACT_APP_BACKEND_URL}/image/project-activities`)
      .then(response => {
        setActivities(response.data);
      })
      .catch(error => {
        console.error('Error fetching project activities:', error);
      });
  }, []);

  // Function to fetch the image blob
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
    <div>
      <h2>Project Activities</h2>
      <AdminNav />
      <div className='container'>
        <table>
          <thead>
            <tr>
              <th>Project Title</th>
              <th>Description</th>
              <th>Before Image</th>
              <th>After Image</th>
            </tr>
          </thead>
          <tbody>
            {activities.map((activity, index) => (
              <tr key={index}>
                <td>{activity.projectTitle}</td>
                <td>{activity.description}</td>
                <td>
                  <AsyncImage fileName={activity.beforeImageName} fetchImage={fetchImage} />
                </td>
                <td>
                  <AsyncImage fileName={activity.afterImageName} fetchImage={fetchImage} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

// Separate component to handle image fetching
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

export default AdminDashboard;



