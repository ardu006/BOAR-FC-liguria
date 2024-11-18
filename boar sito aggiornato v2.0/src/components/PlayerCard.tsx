import React from 'react';
import { User } from 'lucide-react';

interface PlayerCardProps {
  name: string;
  birthDate: string;
  role: string;
}

const calculateAge = (birthDate: string): number => {
  const [day, month, year] = birthDate.split('/');
  const birth = new Date(parseInt(year), parseInt(month) - 1, parseInt(day));
  const today = new Date();
  let age = today.getFullYear() - birth.getFullYear();
  const m = today.getMonth() - birth.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birth.getDate())) {
    age--;
  }
  return age;
};

export const PlayerCard: React.FC<PlayerCardProps> = ({ name, birthDate, role }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition">
      <div className="p-6">
        <div className="flex items-center justify-center mb-4">
          <User className="h-24 w-24 text-primary" />
        </div>
        <div className="text-center">
          <h3 className="text-xl font-semibold mb-2">{name}</h3>
          <p className="text-primary font-medium mb-2">{role}</p>
          <div className="text-sm text-gray-600">
            <p>Data di nascita: {birthDate}</p>
            <p>Età: {calculateAge(birthDate)} anni</p>
          </div>
        </div>
      </div>
    </div>
  );
};