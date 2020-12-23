import * as React from 'react';
import Code from '../components/code';

const cmd = 'npm install -g once-sh';
const copyCode = (): void => {
  let element: HTMLInputElement | null = document.createElement('input');
  element.setAttribute('type', 'text');
  element.setAttribute('value', cmd);
  document.body.append(element);

  element.select();
  document.execCommand('copy');

  // Let GC clean things up
  element.remove();
  element.type = '';
  element.value = '';
  element = null;
};

const Home = (): JSX.Element => (
  <div className="min-h-screen bg-gray-100 py-6 px-5 flex flex-col justify-center sm:py-12">
    <div className="relative py-3 sm:max-w-xl md:min-w-1/2 sm:mx-auto">
      <div className="relative px-2 pb-5 pt-0 bg-black shadow-lg rounded-xl md:rounded-2xl sm:px-5 text-white">
        <h1 className="text-8xl font-bold text-center">once</h1>
        <Code className="my-3 relative inset-x-1/2 transform -translate-x-1/2 cursor-pointer" onClick={copyCode}>
          <p className="inline align-middle">{cmd}</p>
          <i className="far fa-copy text-xl inline align-middle float-right"></i>
        </Code>
      </div>
    </div>
  </div>
);

export default Home;
