import { create } from 'zustand';

export interface Match {
  date: string;
  time: string;
  home: string;
  away: string;
  venue: string;
  day: string;
  result?: string;
}

interface MatchState {
  upcomingMatches: Match[];
  pastMatches: Match[];
  moveCompletedMatches: () => void;
}

const initialUpcomingMatches: Match[] = [
  {
    date: '18/11/2024',
    time: '22:00',
    home: 'SHITTADELLA',
    away: 'BOAR FC',
    venue: 'LEDAKOS NERVI',
    day: 'Lunedì'
  },
  {
    date: '02/12/2024',
    time: '21:00',
    home: 'BOAR FC',
    away: 'BAR LUNA FC',
    venue: 'RECCO',
    day: 'Lunedì'
  },
  {
    date: '09/12/2024',
    time: '21:00',
    home: 'REAL ECUADOR CHIAVARI',
    away: 'BOAR FC',
    venue: 'CHIAVARI CAMPO DEI FRATI',
    day: 'Lunedì'
  },
  {
    date: '16/12/2024',
    time: '21:00',
    home: 'BOAR FC',
    away: 'PIRATI FC',
    venue: 'RECCO',
    day: 'Lunedì'
  },
  {
    date: '13/01/2025',
    time: '21:45',
    home: 'GLI ORANGE',
    away: 'BOAR FC',
    venue: 'TRE PINI BORGORATTI',
    day: 'Lunedì'
  },
  {
    date: '20/01/2025',
    time: '21:00',
    home: 'BOAR FC',
    away: 'HOT BOYS CHIAVARI',
    venue: 'RECCO',
    day: 'Lunedì'
  },
  {
    date: '27/01/2025',
    time: '21:00',
    home: 'LA PINTA DINAMO ALFI',
    away: 'BOAR FC',
    venue: 'SAN DESIDERIO C',
    day: 'Lunedì'
  },
  {
    date: '10/02/2025',
    time: '21:00',
    home: 'BOAR FC',
    away: 'ATLETICO ZENA',
    venue: 'RECCO',
    day: 'Lunedì'
  },
  {
    date: '17/02/2025',
    time: '21:00',
    home: 'ASD PREGIO',
    away: 'BOAR FC',
    venue: 'RECCO',
    day: 'Lunedì'
  },
  {
    date: '24/02/2025',
    time: '21:00',
    home: 'BOAR FC',
    away: 'SHITTADELLA',
    venue: 'RECCO',
    day: 'Lunedì'
  },
  {
    date: '10/03/2025',
    time: '20:45',
    home: 'BAR LUNA FC',
    away: 'BOAR FC',
    venue: 'TRE PINI BORGORATTI',
    day: 'Lunedì'
  },
  {
    date: '17/03/2025',
    time: '21:00',
    home: 'BOAR FC',
    away: 'REAL ECUADOR CHIAVARI',
    venue: 'RECCO',
    day: 'Lunedì'
  },
  {
    date: '24/03/2025',
    time: '21:45',
    home: 'PIRATI FC',
    away: 'BOAR FC',
    venue: 'TRE PINI BORGORATTI',
    day: 'Lunedì'
  },
  {
    date: '07/04/2025',
    time: '21:00',
    home: 'BOAR FC',
    away: 'GLI ORANGE',
    venue: 'RECCO',
    day: 'Lunedì'
  },
  {
    date: '14/04/2025',
    time: '21:00',
    home: 'HOT BOYS CHIAVARI',
    away: 'BOAR FC',
    venue: 'CHIAVARI CAMPO DEI FRATI',
    day: 'Lunedì'
  }
];

const initialPastMatches: Match[] = [
  {
    date: '21/10/2024',
    time: '21:00',
    home: 'BOAR FC',
    away: 'LA PINTA DINAMO ALFI',
    venue: 'RECCO',
    result: '2 - 5',
    day: 'Lunedì',
  },
  {
    date: '04/11/2024',
    time: '22:00',
    home: 'ATLETICO ZENA',
    away: 'BOAR FC',
    venue: 'LEDAKOS NERVI',
    result: '11 - 3',
    day: 'Lunedì',
  },
  {
    date: '11/11/2024',
    time: '21:00',
    home: 'BOAR FC',
    away: 'ASD PREGIO',
    venue: 'RECCO',
    result: '2 - 17',
    day: 'Lunedì',
  },
];

export const useMatchStore = create<MatchState>((set, get) => ({
  upcomingMatches: initialUpcomingMatches,
  pastMatches: initialPastMatches,
  moveCompletedMatches: () => {
    const now = new Date();
    const { upcomingMatches, pastMatches } = get();
    
    const { completed, upcoming } = upcomingMatches.reduce<{
      completed: Match[];
      upcoming: Match[];
    }>(
      (acc, match) => {
        const [day, month, year] = match.date.split('/');
        const [hours, minutes] = match.time.split(':');
        const matchDate = new Date(
          parseInt(year),
          parseInt(month) - 1,
          parseInt(day),
          parseInt(hours),
          parseInt(minutes)
        );
        const matchEndTime = new Date(matchDate);
        matchEndTime.setHours(matchEndTime.getHours() + 1);

        if (now >= matchEndTime) {
          acc.completed.push({ ...match, result: 'In attesa' });
        } else {
          acc.upcoming.push(match);
        }
        return acc;
      },
      { completed: [], upcoming: [] }
    );

    if (completed.length > 0) {
      set({
        upcomingMatches: upcoming,
        pastMatches: [...completed, ...pastMatches],
      });
    }
  },
}));