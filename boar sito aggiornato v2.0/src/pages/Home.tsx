import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Users2, Trophy } from 'lucide-react';
import { MatchResult } from '../components/MatchResult';
import { CountdownTimer } from '../components/CountdownTimer';
import { useMatchStore } from '../services/matchService';

const Home = () => {
  const { upcomingMatches, pastMatches, moveCompletedMatches } = useMatchStore();

  useEffect(() => {
    const timer = setInterval(moveCompletedMatches, 1000);
    return () => clearInterval(timer);
  }, [moveCompletedMatches]);

  const nextMatch = upcomingMatches[0];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <div
        className="h-[60vh] bg-cover bg-center relative"
        style={{
          backgroundImage:
            'url("https://images.unsplash.com/photo-1459865264687-595d652de67e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80")',
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-4">
              <span className="text-primary">BOAR</span>
              <span className="text-black">FC</span>
            </h1>
            <p className="text-xl text-white mb-8">
              Serie C2 / Girone C Liguria
            </p>
            {nextMatch && (
              <div className="max-w-md mx-auto">
                <CountdownTimer match={nextMatch} />
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Quick Links */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Link
            to="/calendar"
            className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition"
          >
            <Calendar className="h-12 w-12 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2">Calendario</h3>
            <p className="text-gray-600">
              Visualizza tutte le partite della stagione
            </p>
          </Link>

          <Link
            to="/team"
            className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition"
          >
            <Users2 className="h-12 w-12 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2">Squadra</h3>
            <p className="text-gray-600">Conosci i nostri giocatori</p>
          </Link>

          <Link
            to="/news"
            className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition"
          >
            <Trophy className="h-12 w-12 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2">News</h3>
            <p className="text-gray-600">Ultime notizie e aggiornamenti</p>
          </Link>
        </div>
      </div>

      {/* Past Matches Section */}
      <div className="bg-gray-100 py-12">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-primary">
            Risultati Precedenti
          </h2>
          <div className="space-y-6">
            {pastMatches.map((match, index) => (
              <MatchResult key={index} {...match} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;