import React from 'react';
import { PlayerCard } from '../components/PlayerCard';

const players = [
  {
    name: 'NYGEL MAIORANO',
    birthDate: '15/11/2007',
    role: 'Portiere',
  },
  {
    name: 'DAVID BIXIO',
    birthDate: '26/01/2001',
    role: 'Difensore',
  },
  {
    name: 'MATTIA BOZZANO',
    birthDate: '15/02/1999',
    role: 'Difensore',
  },
  {
    name: 'DANIELE BUSCAGLIA',
    birthDate: '22/05/1997',
    role: 'Difensore',
  },
  {
    name: 'RICCARDO FERRIERO',
    birthDate: '19/11/2002',
    role: 'Difensore',
  },
  {
    name: 'DIEGO RICCI',
    birthDate: '25/03/1998',
    role: 'Difensore',
  },
  {
    name: 'SEBASTIANO ANGIOLANI',
    birthDate: '13/04/2001',
    role: 'Centrocampista',
  },
  {
    name: 'SIRIO DETTORI',
    birthDate: '04/05/2002',
    role: 'Centrocampista',
  },
  {
    name: 'WILMER ANDRES GARCIA SALAZAR',
    birthDate: '21/01/2000',
    role: 'Centrocampista',
  },
  {
    name: 'DELFO PARMA',
    birthDate: '12/11/2002',
    role: 'Centrocampista',
  },
  {
    name: 'KRISTIAN SULA',
    birthDate: '15/05/1998',
    role: 'Centrocampista',
  },
  {
    name: 'MARTINO PETER THOMAS',
    birthDate: '04/08/2002',
    role: 'Centrocampista',
  },
  {
    name: 'BRYAN DEPAU',
    birthDate: '05/01/1998',
    role: 'Attaccante',
  },
  {
    name: 'FRANCESCO INNOCENTI',
    birthDate: '19/03/2001',
    role: 'Attaccante',
  },
];

const staff = [
  {
    name: 'GIAN LUCA ANGIOLANI',
    birthDate: '13/08/1968',
    role: 'Allenatore',
  },
  {
    name: 'PAOLO BURLANDO',
    birthDate: '05/09/1964',
    role: 'Allenatore',
  },
];

const Team = () => {
  const groupedPlayers = players.reduce((acc, player) => {
    const role = player.role;
    if (!acc[role]) {
      acc[role] = [];
    }
    acc[role].push(player);
    return acc;
  }, {});

  // Mappatura per correggere i titoli
  const correctedRoles = {
    Portiere: 'Portieri',
    Difensore: 'Difensori',
    Centrocampista: 'Centrocampisti',
    Attaccante: 'Attaccanti',
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-primary">
        La Nostra Squadra
      </h1>

      {/* Players Section */}
      {Object.entries(groupedPlayers).map(([role, players]) => (
        <div key={role} className="mb-12">
          <h2 className="text-2xl font-semibold mb-6 text-gray-800">
            {correctedRoles[role] || role}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {players.map((player, index) => (
              <PlayerCard key={index} {...player} />
            ))}
          </div>
        </div>
      ))}

      {/* Staff Section */}
      <div>
        <h2 className="text-2xl font-semibold mb-6 text-gray-800">
          Staff Tecnico
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {staff.map((member, index) => (
            <PlayerCard key={index} {...member} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Team;
