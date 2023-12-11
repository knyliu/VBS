import React, { useState } from "react";
import axios from "axios"; // for HTTP requests

import { useGetUserID } from "../hooks/useGetUserID"; // Get Current UserID

import { useNavigate } from "react-router-dom"; // To redirect
import { useCookies } from "react-cookie";

export const CreateAppointment = () => {
  const userID = useGetUserID();
  const [cookies, _] = useCookies(["access_token"]); // get access_token
  const [appointment, setAppointment] = useState({ // how it looks like
    name: "",
    description: "",
    members: [],
    instructions: "",
    imageUrl: "",
    appointmentTime: 0,
    userOwner: userID,
  });

  const navigate = useNavigate();

  const handleChange = (event) => { // Update the changes from the form
    const { name, value } = event.target;
    setAppointment({ ...appointment, [name]: value });
  };

  const handleMemberChange = (event, index) => {
    const { value } = event.target;
    const members = [...appointment.members];
    members[index] = value;
    setAppointment({ ...appointment, members });
  };

  const handleAddMember = () => { // add a new element
    const members = [...appointment.members, ""];
    setAppointment({ ...appointment, members });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await axios.post(
        "http://localhost:3001/appointments",
        { ...appointment },
        {
          headers: { authorization: cookies.access_token },
        }
      );

      alert("Appointment Created");
      navigate("/");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="create-appointment">
      <h2>Inviting People to Join You!</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          value={appointment.name}
          onChange={handleChange}
        />

        <label htmlFor="description">Description</label>
        <textarea
          id="description"
          name="description"
          value={appointment.description}
          onChange={handleChange}
        ></textarea>

        <label htmlFor="members">Members</label>
        {appointment.members.map((member, index) => (
          <input
            key={index}
            type="text"
            name="members"
            value={member}
            onChange={(event) => handleMemberChange(event, index)}
          />
        ))}
        <button type="button" onClick={handleAddMember}>
          Add Member
        </button>

        <label htmlFor="instructions">Location</label>
        <textarea
          id="instructions"
          name="instructions"
          value={appointment.instructions}
          onChange={handleChange}
        ></textarea>

        <label htmlFor="imageUrl">Image URL</label>
        <input
          type="text"
          id="imageUrl"
          name="imageUrl"
          value={appointment.imageUrl}
          onChange={handleChange}
        />
        
        <label htmlFor="appointmentTime">People We need</label>
        <input
          type="number"
          id="appointmentTime"
          name="appointmentTime"
          value={appointment.appointmentTime}
          onChange={handleChange}
        />
        <button type="submit">Create Appointment</button>
      </form>
    </div>
  );
};
