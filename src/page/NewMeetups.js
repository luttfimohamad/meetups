import React from 'react';
import NewMeetupForm from '../components/meetups/NewMeetupForm';

export default function NewMeetups() {
  function addMeetupHandler(meetupData) {
    fetch(
      'https://api-meetups-default-rtdb.asia-southeast1.firebasedatabase.app/meetups.json',
      {
        method: 'POST',
        body: JSON.stringify(meetupData),
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
  }
  return (
    <section>
      <h1>Add New Meetup</h1>
      <NewMeetupForm onAddMeetup={addMeetupHandler} />
    </section>
  );
}
