import React from 'react';
import '../../../styles/TokyoAcademy.css';
import { Grid } from '@mui/material';

export default function TokyoAcademy() {
  // Schedules based on the provided table
  const schedules = {
    'February': {
      'Academy': [
        { date: 'Date  ', time: 'Time  ', location: 'Location' },
        { date: '3-Feb-2024  ', time: '11:00-13:00 ', location: 'Grandberry' },
        { date: '4-Feb-2024  ', time: '10:00-12:00', location: 'Kayaba koen' },
        { date: '11-Feb-2024  ', time: '10:00-12:00', location: 'Kayaba koen' },
        { date: '17-Feb-2024  ', time: '11:00-13:00', location: 'Grandberry' },
        { date: '24-Feb-2024  ', time: '11:00-13:00', location: 'Grandberry' },
       
      ],
    },
    'March': {
      'Academy': [
         { date: 'Date  ', time: 'Time  ', location: 'Location' },
        { date: '2-Mar-2024  ', time: '11:00-13:00 ', location: 'Grandberry' },
        { date: '16-Mar-2024  ', time: '11:00-13:00', location: 'Grandberry' },
        { date: '23-Mar-2024  ', time: '11:00-13:00', location: 'Grandberry' },
        { date: '30-Mar-2024  ', time: '11:00-13:00', location: 'Grandberry' },
        
       
      ],
    },
  };

  const renderSchedule = (teamName, teamSchedule) => (
    <>
      <div className='team_name' style={{ fontSize: '20px' }}><strong>{`AFA Yokohama ${teamName}`}</strong></div>
      {teamSchedule.map((session, index) => (
        <div className='table_row' key={`${teamName}-${index}`} style={{ display: 'flex' }}>
          <div className='table_cell' style={{ flex: '1' }}>{session.date}</div>
          <div className='table_cell' style={{ flex: '1' }}>{session.time}</div>
          <div className='table_cell' style={{ flex: '1' }}>{session.location}</div>
        </div>
      ))}
    </>
  );

  const renderMonthSection = (month) => (
    <div className='month_section'>
      <div className='table_header'>{month} 2024</div>
      {Object.entries(schedules[month]).map(([teamName, teamSchedule]) => (
        <React.Fragment key={teamName}>
          {renderSchedule(teamName, teamSchedule)}
        </React.Fragment>
      ))}
    </div>
  );

  return (
    <div className='table_container'>
      {['January', 'February', 'March'].map(month => renderMonthSection(month))}
    </div>
  );
}
