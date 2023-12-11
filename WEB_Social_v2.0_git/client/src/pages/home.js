import React, { useEffect, useState } from "react";
import { useGetUserID } from "../hooks/useGetUserID";
import axios from "axios";

export const Home = () => {
  const [appointments, setAppointments] = useState([]);
  const [savedAppointments, setsavedAppointments] = useState([]);

  const userID = useGetUserID();

  useEffect(() => {
    const fetchAppointments = async () => {
      try {
        const response = await axios.get("http://localhost:3001/appointments");
        setAppointments(response.data);
      } catch (err) {
        console.log(err);
      }
    };

    const fetchsavedAppointments = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3001/appointments/savedAppointments/ids/${userID}`
        );
        setsavedAppointments(response.data.savedAppointments);
      } catch (err) {
        console.log(err);
      }
    };

    fetchAppointments();
    fetchsavedAppointments();
  }, []);

  const saveAppointment = async (appointmentID) => {
    try {
      const response = await axios.put("http://localhost:3001/appointments", {
        appointmentID,
        userID,
      });
      setsavedAppointments(response.data.savedAppointments);
    } catch (err) {
      console.log(err);
    }
  };

  const isAppointmentSaved = (id) => savedAppointments.includes(id);

  return (
    <div>
      <h1>Waiting You to Join Us!</h1>
      <ul>
        {appointments.map((appointment) => (
          <li key={appointment._id}>
            <div>
              <h2>{appointment.name}</h2>
              <button
                onClick={() => saveAppointment(appointment._id)}
                disabled={isAppointmentSaved(appointment._id)}
              >
                {isAppointmentSaved(appointment._id) ? "Joined" : "Join"}
              </button>
            </div>
            <div className="instructions">
              <p>{appointment.instructions}</p>
            </div>
            <img src={appointment.imageUrl} alt={appointment.name} />
            <p>Members: {appointment.members}</p>
            <p>Location: {appointment.instructions}</p>

            <p>People We Need: {appointment.appointmentTime}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};
