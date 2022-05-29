import React, { useState } from "react";

function PostListingForm({ user }) {
  const [formData, setFormData] = useState({
    location: "",
    image_url: "",
    what_it_is: "",
    category: "",
    description: "",
    user_id: user.id,
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const configObjPOST = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(formData),
  };

  const handleAddListing = (e) => {
    e.preventDefault();
    fetch("/listings", configObjPOST)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setFormData({
          location: "",
          image_url: "",
          what_it_is: "",
          category: "",
          description: "",
        });
        alert("Post Successful!");
      });
  };

  return (
    <div>
      PostListingForm
      <form onSubmit={(e) => handleAddListing(e)}>
        <input
          name="location"
          placeholder="Location..."
          value={formData.location}
          onChange={(e) => handleChange(e)}
        ></input>
        <input
          name="image_url"
          placeholder="Image Url..."
          value={formData.image_url}
          onChange={(e) => handleChange(e)}
        ></input>
        <input
          name="what_it_is"
          placeholder="What it is..."
          value={formData.what_it_is}
          onChange={(e) => handleChange(e)}
        ></input>
        <input
          name="category"
          placeholder="Category..."
          value={formData.category}
          onChange={(e) => handleChange(e)}
        ></input>
        <input
          name="description"
          placeholder="Description..."
          value={formData.description}
          onChange={(e) => handleChange(e)}
        ></input>
        <button type="submit">Post Listing</button>
      </form>
    </div>
  );
}

export default PostListingForm;
