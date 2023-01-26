import React, { useState } from "react";

const StudyMaterialCreationForm = () => {
  // state variable to hundle state chnages
  const [studyMaterialData, setStudyMaterialData] = useState({
    title: "",
    description: "",
    content: "",
    category: "",
    author: "",
  });

  // handling onChange event
  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setStudyMaterialData({ ...studyMaterialData, [name]: value });
  };

  return (
    <div>
      <h4 className="form-header">Add a Book or an Aritcle :</h4>
      <div className="container">
        <form>
          <h5> Enter The Title:</h5>

          <input
            type="text"
            name="title"
            onChange={handleChange}
            value={studyMaterialData.title}
            placeholder="Enter the titl here"
            required
          />

          <h5>Short Description:</h5>
          <textarea
            type="text"
            name="description"
            onChange={handleChange}
            value={studyMaterialData.description}
            placeholder="Type Short overview of the article"
            required
          />

          <h5>Enter Topic / Category:</h5>
          <input
            type="text"
            name="category"
            onChange={handleChange}
            value={studyMaterialData.category}
            placeholder="Enter category of the article"
            required
          />

          <h5>Article Author :</h5>
          <input
            type="text"
            name="author"
            onChange={handleChange}
            value={studyMaterialData.author}
            placeholder="Enter Author's name"
            required
          />

          <h5>Article's content :</h5>
          <input
            type="file"
            name="content"
            onChange={handleChange}
            value={studyMaterialData.content}
            placeholder="Enter your content here"
            required
          />
          <br />

          <button className="submit-button" type="submit">
            Add
          </button>
        </form>
      </div>
    </div>
  );
};

export default StudyMaterialCreationForm;
