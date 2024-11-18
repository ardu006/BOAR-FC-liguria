import React from 'react';

export const MatchResult = ({ date, time, home, away, venue, result, day }) => (
  <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition border-l-4 border-primary">
    <div className="flex flex-col md:flex-row justify-between items-center">
      <div className="text-center md:text-left mb-4 md:mb-0">
        <p className="text-gray-600">{day}</p>
        <p className="text-lg font-semibold text-primary">{date}</p>
        <p className="text-primary-dark">{time}</p>
      </div>
      
      <div className="flex-grow text-center">
        <div className="flex flex-col md:flex-row items-center justify-center space-y-2 md:space-y-0 md:space-x-4">
          <span className="text-xl font-semibold">{home}</span>
          <span className="text-primary text-2xl">vs</span>
          <span className="text-xl font-semibold">{away}</span>
        </div>
        {result && (
          <span className="block text-2xl font-bold text-primary-dark mt-2">{result}</span>
        )}
      </div>
      
      <div className="text-center md:text-right mt-4 md:mt-0">
        <p className="text-gray-600">Sede</p>
        <p className="font-medium text-primary-dark">{venue}</p>
      </div>
    </div>
  </div>
);