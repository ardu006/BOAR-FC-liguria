import React, { useEffect } from 'react';
import { useMatchStore } from '../services/matchService';

const Calendar = () => {
  const { upcomingMatches, moveCompletedMatches } = useMatchStore();

  useEffect(() => {
    const timer = setInterval(moveCompletedMatches, 1000);
    return () => clearInterval(timer);
  }, [moveCompletedMatches]);

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-primary">Calendario Partite</h1>
      
      <div className="space-y-6">
        {upcomingMatches.map((match, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition border-l-4 border-primary">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="text-center md:text-left mb-4 md:mb-0">
                <p className="text-gray-600">{match.day}</p>
                <p className="text-lg font-semibold text-primary">{match.date}</p>
                <p className="text-primary-dark">{match.time}</p>
              </div>
              
              <div className="flex-grow text-center">
                <div className="flex flex-col md:flex-row items-center justify-center space-y-2 md:space-y-0 md:space-x-4">
                  <span className="text-xl font-semibold">{match.home}</span>
                  <span className="text-primary text-2xl">vs</span>
                  <span className="text-xl font-semibold">{match.away}</span>
                </div>
              </div>
              
              <div className="text-center md:text-right mt-4 md:mt-0">
                <p className="text-gray-600">Sede</p>
                <p className="font-medium text-primary-dark">{match.venue}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Calendar;