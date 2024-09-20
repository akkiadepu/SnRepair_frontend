
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './AdminDashboardStyle.css';
import AdminNav from './AdminNav';

function AdminDashboard() {
  const [activities, setActivities] = useState([]);
  const [editActivityId, setEditActivityId] = useState(null); // State to track the activity being edited
  const [selectedActivity, setSelectedActivity] = useState(null); // State for storing changes

  useEffect(() => {
    fetchActivities();
  }, []);

  const fetchActivities = () => {
    axios.get(`${process.env.REACT_APP_BACKEND_URL}/image/project-activities`)
      .then(response => {
        setActivities(response.data);
      })
      .catch(error => {
        console.error('Error fetching project activities:', error);
      });
  };

  const fetchImage = async (fileName) => {
    try {
      const response = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/image/fileSystem/${fileName}`, {
        responseType: 'blob',
      });
      const imageURL = URL.createObjectURL(response.data);
      return imageURL;
    } catch (error) {
      console.error('Error fetching image:', error);
      return 'path/to/fallback/image.jpg';
    }
  };

  const handleDelete = (id) => {
    axios.delete(`${process.env.REACT_APP_BACKEND_URL}/image/${id}`)
      .then(() => {
        fetchActivities();
      })
      .catch(error => {
        console.error('Error deleting activity:', error);
      });
  };

  const handleUpdateClick = (activity) => {
    setEditActivityId(activity.id); // Set the activity being edited
    setSelectedActivity({ ...activity }); // Copy activity data for editing
  };

  const handleSave = (id) => {
    const formData = new FormData();
    formData.append('projectTitle', selectedActivity.projectTitle);
    formData.append('description', selectedActivity.description);

    if (selectedActivity.beforeImage) {
      formData.append('beforeImage', selectedActivity.beforeImage);
    }
    if (selectedActivity.afterImage) {
      formData.append('afterImage', selectedActivity.afterImage);
    }

    axios.put(`${process.env.REACT_APP_BACKEND_URL}/image/${id}`, formData)
      .then(() => {
        fetchActivities();
        setEditActivityId(null); // Exit edit mode
      })
      .catch(error => {
        console.error('Error updating activity:', error);
      });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setSelectedActivity({ ...selectedActivity, [name]: value });
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    setSelectedActivity({ ...selectedActivity, [name]: files[0] });
  };

  return (
    <div>
      <AdminNav />
      <div className="container1">
        <table>
          <thead>
            <tr>
              <th>Project Title</th>
              <th>Description</th>
              <th>Before Image</th>
              <th>After Image</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {activities.map((activity, index) => (
              <tr key={index}>
                {editActivityId === activity.id ? (
                  <>
                    <td>
                      <div class="inputGroup">
                        <input
                          type="text"
                          name="projectTitle"
                          value={selectedActivity.projectTitle}
                          onChange={handleInputChange}
                          required
                          autocomplete="off"
                        />
                       
                      </div>
                    </td>
                    <td>
                      <div class="inputGroup">
                        <input
                          type="text"
                          name="description"
                          value={selectedActivity.description}
                          onChange={handleInputChange}
                          required
                          autocomplete="off"
                        />
                       
                      </div>
                    </td>
                    <td>
                      <div class="inputGroup">
                        <AsyncImage fileName={activity.beforeImageName} fetchImage={fetchImage}  className="Adminimage"/>
                        <input
                          type="file"
                          name="beforeImage"
                          onChange={handleFileChange}
                          required
                        />
                        {/* <label htmlFor="beforeImage">Before Image</label> */}
                      </div>
                    </td>
                    <td>
                      <div class="inputGroup">
                        <AsyncImage fileName={activity.afterImageName} fetchImage={fetchImage} className="Adminimage"/>
                        <input
                          type="file"
                          name="afterImage"
                          onChange={handleFileChange}
                          required
                        />
                        {/* <label htmlFor="afterImage">After Image</label> */}
                      </div>
                    </td>
                    <td>
                      <button className="button-Admin" onClick={() => handleSave(activity.id)}>
                        <span className="shadow"></span>
                        <span className="edge"></span>
                        <span className="front">Save</span>
                      </button>
                      <button className="button-Admin" onClick={() => setEditActivityId(null)}>
                        <span className="shadow"></span>
                        <span className="edge"></span>
                        <span className="front">Cancel</span>
                      </button>
                    </td>
                  </>
                ) : (
                  <>
                    <td>{activity.projectTitle}</td>
                    <td>{activity.description}</td>
                    <td>
                      <AsyncImage fileName={activity.beforeImageName} fetchImage={fetchImage} className="Adminimage"/>
                    </td>
                    <td>
                      <AsyncImage fileName={activity.afterImageName} fetchImage={fetchImage} className="Adminimage"/>
                    </td>
                    <td>
                      <button className="button-Admin" onClick={() => handleUpdateClick(activity)}>
                        <span className="shadow"></span>
                        <span className="edge"></span>
                        <span className="front">Update</span>
                      </button>
                      <button className="button-Admin" onClick={() => handleDelete(activity.id)}>
                        <span className="shadow"></span>
                        <span className="edge"></span>
                        <span className="front">Delete</span>
                      </button>
                    </td>
                  </>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

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




