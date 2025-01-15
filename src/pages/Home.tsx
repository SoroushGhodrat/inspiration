import { Link } from 'react-router-dom';
import {
  FormInput,
  Palette,
  Cog,
  ExternalLink,
  CloudAlert,
  ScissorsLineDashed,
} from 'lucide-react';

import styles from './home.module.css';

export default function Home() {
  return (
    <div className="sm:m-10 sm:ml-4">
      <div className="mx-auto max-w-7xl">
        <h1 className="mb-12 text-center text-4xl font-bold uppercase text-gray-900">
          Inspiration for your next project
        </h1>
        <div className={`grid grid-cols-1 gap-8 sm:grid-cols-2`}>
          <ComponentTile
            title="Multi Step Form"
            icon={<FormInput className="h-24 w-24 text-blue-500" />}
            to="/form"
            className={styles.education}
          />
          <ComponentTile
            title="Text & Background Combination"
            icon={<Palette className="h-24 w-24" color="#8B6FC0" />}
            to="/color"
          />
          <ComponentTile
            title={
              <>
                JSON Fake Data Generator
                <ExternalLink className="ml-2 inline-block text-blue-500" />
              </>
            }
            icon={<Cog className="h-24 w-24 text-yellow-500" />}
            to="https://data-generator-rose.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
          />
          <ComponentTile
            title="Page Not Found"
            icon={<CloudAlert className="h-24 w-24" color="#DD4124" />}
            to="/not-found"
          />
          <ComponentTile
            title="text trim"
            icon={<ScissorsLineDashed className="h-24 w-24 text-lime-700" />}
            to="/text-trim"
          />
        </div>
      </div>
    </div>
  );
}

interface ComponentTileProps {
  title: string | React.ReactNode;
  icon: React.ReactNode;
  to: string;
  target?: string;
  rel?: string;
  className?: string;
}

function ComponentTile({ title, icon, to, target, rel }: ComponentTileProps) {
  return (
    <div
      className={`rounded-lg bg-background-light shadow-lg transition-shadow duration-300 ease-in-out hover:bg-indigo-50 hover:shadow-xl dark:bg-background-dark ${styles.education}`}
      // className={`overflow-hidden rounded-lg  dark:bg-background-dark ${styles.card}`}
    >
      <Link to={to} target={target} rel={rel} className="block">
        <div className="p-8">
          <div className="mb-4 flex justify-center">{icon}</div>
          <h2 className="text-center text-2xl font-semibold capitalize text-gray-900">
            {title}
          </h2>
        </div>
      </Link>
    </div>
  );
}
