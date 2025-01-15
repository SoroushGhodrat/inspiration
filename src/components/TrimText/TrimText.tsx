import { ChevronsDownUp, ChevronsUpDown } from 'lucide-react';
import React, { useEffect, useState } from 'react';

const text: string = `Linux is a family of open-source Unix-like operating systems 
based on the Linux kernel, an operating system kernel first released on September 
17, 1991, by Linus Torvalds. Linux is typically packaged in a Linux distribution. 
Distributions include the Linux kernel and supporting system software and libraries, 
many of which are provided by the GNU Project. Popular Linux distributions include 
Debian, Fedora, and Ubuntu. Commercial distributions include Red Hat Enterprise Linux 
and SUSE Linux Enterprise Server. Linux was originally developed for personal computers 
based on the Intel x86 architecture, but has since been ported to more platforms 
than any other operating system. It is the leading operating system on servers, 
mainframe computers, and supercomputers. As of November 2017, all of the world's 
500 most powerful supercomputers run Linux.`;

const TrimText = () => {
  const [showFullText, setShowFullText] = useState(false);
  const [rangeValue, setRangeValue] = useState(0);
  const [maxLength, setMaxLength] = useState(100);

  useEffect(() => {
    if (rangeValue) {
      setMaxLength(rangeValue);
    }
  }, [rangeValue]);

  const trimText = (text: string, maxLength: number) => {
    return text.length > maxLength
      ? text.substring(0, maxLength) + '...'
      : text;
  };

  const handleRangeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRangeValue(Number(event.target.value));
  };

  const toggleText = () => {
    setShowFullText(!showFullText);
  };

  const handleReset = () => {
    setMaxLength(100);
  };

  const ShowLess: React.FC = () => {
    return (
      <span className="flex content-center items-center justify-items-center">
        show less
        <ChevronsDownUp className="h-4 w-4 self-center text-blue-500 hover:text-blue-600" />
      </span>
    );
  };

  const ShowMore: React.FC = () => {
    return (
      <span className="flex content-center items-center justify-items-center">
        show more
        <ChevronsUpDown className="h-4 w-4 self-center text-blue-500 hover:text-blue-600" />
      </span>
    );
  };

  return (
    <div className="grid grid-cols-12 items-center justify-center">
      <div className="col-span-12 p-5 text-center font-bold lg:col-span-8 lg:col-start-3">
        <p>The text length is {text.length}</p>
        <label
          htmlFor="maxLength"
          className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
        >
          Add a text input to control the text length
        </label>
        <input
          type="text"
          id="maxLength"
          value={maxLength}
          onChange={handleRangeChange}
          className="block w-full rounded-lg border border-gray-300 p-2 text-sm text-blue-900 focus:border-red-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
          placeholder="Enter max length"
        />
        <button
          onClick={handleReset}
          className="mt-2 rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
        >
          Reset
        </button>
      </div>

      <div className="col-span-12 m-5 rounded-lg border border-lime-800 p-5 lg:col-span-8 lg:col-start-3 lg:p-8">
        <h1 className="pb-5 text-2xl">Linux OS</h1>
        <div className="transition-max-height overflow-hidden duration-700 ease-in-out">
          <p className="dark:text-white">
            {showFullText ? text : trimText(text, maxLength)}
          </p>
        </div>

        <div
          onClick={toggleText}
          className="grid cursor-pointer grid-cols-2 items-center text-blue-500 hover:text-blue-600"
        >
          {showFullText ? <ShowLess /> : <ShowMore />}
        </div>
      </div>
    </div>
  );
};

export default TrimText;
