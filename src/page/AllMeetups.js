import React from 'react';
import { useState, useEffect } from 'react';
import MeetUpList from '../components/meetups/MeetUpList';

export default function AllMeetups() {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedMeetups, setLoadedMeetups] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    fetch(
      'https://api-meetups-default-rtdb.asia-southeast1.firebasedatabase.app/meetups.json'
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const meetups = [];

        for (const key in data) {
          const meetup = {
            id: key,
            ...data[key],
          };
          meetups.push(meetup);
        }

        setIsLoading(false);
        setLoadedMeetups(meetups);
      });
  }, []);

  if (isLoading) {
    return (
      <section>
        <h1>Loading...</h1>
      </section>
    );
  }

  return (
    <section>
      <ul>
        <h1>All Meetups</h1>
        <MeetUpList meetups={loadedMeetups} />
      </ul>
    </section>
  );
}
