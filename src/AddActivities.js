// import { useEffect, useState } from "react";
// import React from 'react';
// import axios from "axios";
// import AdminNav from "./AdminNav";
//  import './AdminDashboardStyle.css';

// function AddActivities() {

//     const [projectTitle, setProjectTitle] = useState('');
//     const [beforeImage, setBeforeImage] = useState(null);
//     const [afterImage, setAfterImage] = useState(null);
//     const [description, setDescription] = useState('');

//   const handleSubmit = async (event) => {
//     event.preventDefault();
    
//     const formData = new FormData();
//     formData.append('projectTitle', projectTitle);
//     formData.append('beforeImage', beforeImage);
//     formData.append('afterImage', afterImage);
//     formData.append('description', description);

//     try {
//       const response = await axios.post('/api/admin/register', formData, {
//         headers: {
//           'Content-Type': 'multipart/form-data'
//         }
//       });
//       alert(response.data);
//       console.log(response.data);

//       setProjectTitle('');
//       setBeforeImage(null);
//       setAfterImage(null);
//       setDescription('');
//       // Reset the file input fields
//       document.getElementById('beforeImage').value = '';
//       document.getElementById('afterImage').value = '';

//     } catch (error) {

//       console.error("There was an error submitting the form!", error);
//       alert(`Error: ${error.response ? error.response.data : error.message}`);
      
//     }
//   };

//   return (
//     <div>AddActivites


// <AdminNav/>

// <form class="form" onSubmit={handleSubmit}>
//           <p class="title">Register </p>
//           {/* <p class="message">Signup now and get full access to our app. </p> */}
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

//     </div>
//   )
// }

// export default AddActivities


import { useState } from "react";
import axios from "axios";
import AdminNav from "./AdminNav";
import './AddActivitiesStyle.css';

function AddActivities() {
    const [projectTitle, setProjectTitle] = useState('');
    const [beforeImage, setBeforeImage] = useState(null);
    const [afterImage, setAfterImage] = useState(null);
    const [description, setDescription] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();

        // Create FormData object to hold the form fields and files
        const formData = new FormData();
        formData.append('projectTitle', projectTitle); // Must match @RequestParam name
        formData.append('description', description);   // Must match @RequestParam name
        formData.append('beforeImage', beforeImage);   // Must match @RequestParam name
        formData.append('afterImage', afterImage);     // Must match @RequestParam name

        try {
            // Send POST request to Spring Boot backend
            const response = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/image/fileSystem`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'  // Correct Content-Type for file upload
                }
            });

            alert(response.data);  // Show success message
            console.log(response.data);

            // Reset form fields after successful submission
            setProjectTitle('');
            setBeforeImage(null);
            setAfterImage(null);
            setDescription('');
            document.getElementById('beforeImage').value = '';
            document.getElementById('afterImage').value = '';

        } catch (error) {
            console.error("There was an error submitting the form!", error);
            alert(`Error: ${error.response ? error.response.data : error.message}`);
        }
    };

    return (
        <div>
            <AdminNav />
            <div className="form-container">
            <form className="form" onSubmit={handleSubmit}>
                <p className="title">Add Project Activity</p>

                <div className="flex">
                    <label>
                        <input className="input" type="text"  value={projectTitle} onChange={(e) => setProjectTitle(e.target.value)} required />
                        <span>Project Title</span>
                    </label>
                </div>

                <div className="container">
                    <label htmlFor="beforeImage">Choose Before Image:</label>
                    <input accept=".jpg, .jpeg, .png" className="inpdddut" name="beforeImage" id="beforeImage" type="file" onChange={(e) => setBeforeImage(e.target.files[0])} required />
                    
                    <label htmlFor="afterImage">Choose After Image:</label>
                    <input accept=".jpg, .jpeg, .png" className="inpdddut" name="afterImage" id="afterImage" type="file" onChange={(e) => setAfterImage(e.target.files[0])} required />
                </div>

                <label>
                    <input className="input" type="text"  value={description} onChange={(e) => setDescription(e.target.value)} required />
                    <span>Description</span>
                </label>

                <button className="submit" type="submit">Submit</button>
                <button className="submit" type="reset">Reset</button>
            </form>
            </div>
        </div>
    );
}

export default AddActivities;

