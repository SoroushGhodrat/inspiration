import { Link } from 'react-router-dom';
import { FormInput, Palette, Cog, ExternalLink } from 'lucide-react';

export default function Home() {
  return (
    <div className="sm:m-10 sm:ml-4">
      <div className="mx-auto max-w-7xl">
        <h1 className="mb-12 text-center text-4xl font-bold text-gray-900">
          Inspiration for your next project
        </h1>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
          <ComponentTile
            title="Multi Step Form"
            icon={<FormInput className="h-24 w-24 text-blue-500" />}
            to="/form"
          />
          <ComponentTile
            title="Text & Background Combination"
            icon={<Palette className="h-24 w-24 text-green-500" />}
            to="/color"
          />
          <ComponentTile
            title="JSON Fake Data Generator"
            icon={<Cog className="h-24 w-24 text-yellow-500" />}
            to="https://data-generator-rose.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
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
  target?: string;
  rel?: string;
}

function ComponentTile({ title, icon, to, target, rel }: ComponentTileProps) {
  return (
    <Link to={to} target={target} rel={rel} className="block">
      <div className="overflow-hidden rounded-lg bg-background-light shadow-lg transition-shadow duration-300 ease-in-out hover:shadow-xl dark:bg-background-dark">
        <div className="p-8">
          <div className="mb-4 flex justify-center">{icon}</div>
          <h2 className="text-center text-2xl font-semibold text-gray-900">
            {title}
          </h2>
        </div>
      </div>
    </Link>
  );
}
