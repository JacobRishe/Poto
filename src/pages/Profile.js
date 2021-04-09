import React from 'react';
import CreatePoll from '../components/CreatePoll';


export default function Profile(props) {
  return (
    <div>
      <CreatePoll history={ props.history } userId={ props.userId } />
    </div>
  )
}
