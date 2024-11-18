import React, { useState, useEffect } from 'react';

export const CountdownTimer = ({ match, nextMatch }) => {
  const [timeLeft, setTimeLeft] = useState(null);
  const [isMatchStarted, setIsMatchStarted] = useState(false);
  const [matchDurationLeft, setMatchDurationLeft] = useState(null);

  useEffect(() => {
    const calculateTimeLeft = () => {
      const [day, month, year] = match.date.split('/');
      const [hours, minutes] = match.time.split(':');
      const matchDate = new Date(year, month - 1, day, hours, minutes);
      const now = new Date();

      // Calcola il tempo di fine partita (durata di 1 ora)
      const matchEndTime = new Date(matchDate);
      matchEndTime.setHours(matchEndTime.getHours() + 1);

      if (now >= matchEndTime) {
        // Se la partita è terminata, passa al countdown della prossima partita
        return null;
      }

      if (now >= matchDate && now < matchEndTime) {
        setIsMatchStarted(true);

        // Calcola il countdown per la durata della partita
        const durationDifference = matchEndTime - now;
        setMatchDurationLeft({
          minutes: Math.floor((durationDifference / 1000 / 60) % 60),
          seconds: Math.floor((durationDifference / 1000) % 60),
        });

        return null;
      }

      const difference = matchDate - now;

      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    };

    const timer = setInterval(() => {
      const remainingTime = calculateTimeLeft();

      if (!isMatchStarted) {
        setTimeLeft(remainingTime);
      } else {
        const now = new Date();
        const [day, month, year] = match.date.split('/');
        const [hours, minutes] = match.time.split(':');
        const matchDate = new Date(year, month - 1, day, hours, minutes);
        const matchEndTime = new Date(matchDate);
        matchEndTime.setHours(matchEndTime.getHours() + 1);

        const durationDifference = matchEndTime - now;
        if (durationDifference > 0) {
          setMatchDurationLeft({
            minutes: Math.floor((durationDifference / 1000 / 60) % 60),
            seconds: Math.floor((durationDifference / 1000) % 60),
          });
        } else {
          // Se la partita è finita, resetta lo stato per la prossima partita
          setIsMatchStarted(false);
          setTimeLeft(calculateTimeLeft(nextMatch));
        }
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [match, nextMatch, isMatchStarted]);

  if (!timeLeft && !isMatchStarted && !matchDurationLeft) {
    return (
      <div className="bg-white bg-opacity-90 p-4 rounded-lg text-black max-w-sm mx-auto">
        <h3 className="text-xl font-bold mb-2">Prossima Partita</h3>
        <div className="text-center">
          <p className="text-lg font-semibold mb-2">
            {match.day} {match.date} - {match.time}
          </p>
          <p className="text-lg sm:text-xl mb-2">
            <span className="font-bold">{match.home}</span>
            <span className="text-primary mx-2">vs</span>
            <span className="font-bold">{match.away}</span>
          </p>
          <p className="text-sm text-gray-600">{match.venue}</p>
        </div>
      </div>
    );
  }

  if (isMatchStarted) {
    return (
      <div className="bg-primary bg-opacity-90 text-white p-4 rounded-lg max-w-sm mx-auto">
        <h3 className="text-xl font-bold mb-2">La partita è iniziata!</h3>
        {matchDurationLeft && (
          <div className="grid grid-cols-2 gap-4 text-center mb-4">
            <div>
              <span className="text-2xl font-bold text-white">{matchDurationLeft.minutes}</span>
              <p className="text-sm">Minuti</p>
            </div>
            <div>
              <span className="text-2xl font-bold text-white">{matchDurationLeft.seconds}</span>
              <p className="text-sm">Secondi</p>
            </div>
          </div>
        )}
        <div className="text-center">
          <p className="text-lg font-semibold mb-2">
            {match.day} {match.date} - {match.time}
          </p>
          <p className="text-lg sm:text-xl mb-2">
            <span className="font-bold">{match.home}</span>
            <span className="mx-2">vs</span>
            <span className="font-bold">{match.away}</span>
          </p>
          <p className="text-sm">{match.venue}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white bg-opacity-90 p-4 rounded-lg text-black max-w-sm mx-auto">
      <h3 className="text-xl font-bold mb-4">Countdown Prossima Partita</h3>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center mb-4">
        <div>
          <span className="text-2xl font-bold text-primary">{timeLeft.days}</span>
          <p className="text-sm">Giorni</p>
        </div>
        <div>
          <span className="text-2xl font-bold text-primary">{timeLeft.hours}</span>
          <p className="text-sm">Ore</p>
        </div>
        <div>
          <span className="text-2xl font-bold text-primary">{timeLeft.minutes}</span>
          <p className="text-sm">Minuti</p>
        </div>
        <div>
          <span className="text-2xl font-bold text-primary">{timeLeft.seconds}</span>
          <p className="text-sm">Secondi</p>
        </div>
      </div>
      <div className="text-center">
        <p className="text-lg font-semibold mb-2">
          {match.day} {match.date} - {match.time}
        </p>
        <p className="text-lg sm:text-xl mb-2">
          <span className="font-bold">{match.home}</span>
          <span className="text-primary mx-2">vs</span>
          <span className="font-bold">{match.away}</span>
        </p>
        <p className="text-sm text-gray-600">{match.venue}</p>
      </div>
    </div>
  );
};
