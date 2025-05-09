import React from 'react';
import classes from './MeetupList.module.css';
import MeetUpItem from './MeetUpItem';

export default function MeetUpList(props) {
  return (
    <ul className={classes.list}>
      {Array.isArray(props.meetups) && props.meetups.length > 0 ? (
        props.meetups.map((meetup) => (
          <MeetUpItem
            key={meetup.id}
            id={meetup.id}
            image={meetup.image}
            title={meetup.title}
            address={meetup.address}
            description={meetup.description}
          />
        ))
      ) : (
        <p>No meetups found.</p>
      )}
    </ul>
  );
}
