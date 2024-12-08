import { Link } from 'react-router-dom';
import { FormInput, Palette } from 'lucide-react';

export default function Home() {
  return (
    <div className="sm:m-10 sm:ml-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-gray-900 mb-12">
          Inspiration for your next project
        </h1>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
          <ComponentTile
            title="Form"
            icon={<FormInput className="w-24 h-24 text-blue-500" />}
            to="/form"
          />
          <ComponentTile
            title="Text & Background Combination"
            icon={<Palette className="w-24 h-24 text-green-500" />}
            to="/color"
          />
        </div>
      </div>
    </div>
  );
}

interface ComponentTileProps {
  title: string;
  icon: React.ReactNode;
  to: string;
}

function ComponentTile({ title, icon, to }: ComponentTileProps) {
  return (
    <Link to={to} className="block">
      <div className="bg-background-light dark:bg-background-dark overflow-hidden shadow-lg rounded-lg hover:shadow-xl transition-shadow duration-300 ease-in-out">
        <div className="p-8">
          <div className="flex justify-center mb-4">{icon}</div>
          <h2 className="text-2xl font-semibold text-center text-gray-900">
            {title}
          </h2>
        </div>
      </div>
    </Link>
  );
}
