/* eslint-disable react/jsx-one-expression-per-line */
import { Icon } from '@iconify/react';
import React from 'react';
import Logo from '../public/images/logo.svg';

function App() {
  return (
    <main className="text-stone-700 pb-32 flex flex-col items-center bg-background">
      <nav className="w-full flex flex-col items-center gap-8 pt-16 px-28 bg-background">
        <h1 className="font-normal tracking-[0.2em] text-3xl uppercase">
          <img src={Logo} alt="" />
        </h1>
        <ul className="uppercase font-medium flex tracking-wider gap-12 mt-[4px]">
          <li>
            <span className="text-primary">01.</span> home
          </li>
          <li>
            <span className="text-primary">02.</span> portfolio
          </li>
          <li>
            <span className="text-primary">03.</span> blog
          </li>
          <li>
            <span className="text-primary">04.</span> get in touch
          </li>
        </ul>
        <div className="fixed right-0 top-0 translate-x-1/2 -translate-y-1/2">
          <div className="rotate-45 w-36 h-36 bg-primary" />
          <a
            href="https://github.com/melvinchia3636"
            target="_blank"
            rel="noreferrer"
            className="absolute top-1/2 translate-y-[50%] translate-x-full"
          >
            <Icon
              icon="simple-icons:github"
              className="w-7 h-7 text-background"
            />
          </a>
        </div>
      </nav>
      <section className="w-full flex-1 flex flex-col items-center pb-24 relative">
        <div className="w-full px-20 flex flex-col items-center gap-32">
          <div className="flex items-center flex-col gap-12">
            <div className="flex flex-col items-center tracking-widest">
              <p className="mt-24 mb-4 text-xl">
                My name is{' '}
                <span className="font-medium text-primary">Melvin Chia</span>. I
                build websites that are
              </p>
              <h2 className="text-[3.5rem] tracking-[0.16em] uppercase text-center leading-normal">
                minimalistic yet beautiful
              </h2>
              <p className="uppercase text-xl pb-24 mt-12 tracking-widest font-medium">
                gorgeous <span className="text-primary">-</span> unconventional{' '}
                <span className="text-primary">-</span> concise
              </p>
            </div>
            <div className="shadow-[0px_2px_0px_0px_rgb(255,100,98)]">
              <div
                className="w-56 h-16 bg-primary flex items-center justify-center"
                style={{
                  clipPath: 'polygon(90% 0, 100% 30%, 100% 100%, 0 100%, 0 0)',
                }}
              >
                <button
                  type="button"
                  className="uppercase font-medium text-primary bg-background w-[calc(14rem-4px)] h-[calc(4rem-4px)] tracking-[0.2rem]"
                  style={{
                    clipPath:
                      'polygon(90.5% 0, 100% 30%, 100% 100%, 0 100%, 0 0)',
                  }}
                >
                  See My Works
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="flex w-full px-32 pt-32 gap-32">
        <div className="w-2/5">
          <span className="uppercase font-medium mb-2 block text-2xl tracking-widest text-primary">
            WHO AM I?
          </span>
          <h2 className="text-[4rem] tracking-wide leading-[1.1] font-semibold">
            The iterpreter
            <br />
            of practical minimalism
          </h2>
        </div>
        <div className="w-3/5 h-full flex flex-col items-center justify-end">
          <p className="text-3xl font-medium tracking-wide">
            The Internet is a wonderful place to be. However, it also a place
            filled with a lot of unpleasant looking websites.
          </p>
          <p className="mt-8 text-lg tracking-wide">
            I&apos;ve drunk countless cup of coffee learning how to design
            stylish websites. Now, I am redesigning and reconstructing various
            popular websites to make them more elegant and user-friendly.
          </p>
          <div className="flex w-full mt-8 justify-between">
            <div className="flex flex-col">
              <span className="text-primary uppercase pb-1 font-medium tracking-wide">
                born in
              </span>
              <span className="text-[2.1rem] font-medium">Malaysia</span>
            </div>
            <div className="flex flex-col">
              <span className="text-primary uppercase pb-1 font-medium tracking-wide">
                experiences
              </span>
              <span className="text-[2.1rem] font-medium">4 years</span>
            </div>
            <div className="flex flex-col">
              <span className="text-primary uppercase pb-1 font-medium tracking-wide">
                languages
              </span>
              <span className="text-[2.1rem] font-medium">
                English, Chinese
              </span>
            </div>
          </div>
        </div>
      </section>
      <section className="px-32 pt-32 w-full grid grid-cols-3 h-72">
        <div className="bg-primary w-full h-full flex flex-col items-center justify-center gap-2">
          <p className="font-semibold text-background text-6xl tracking-wide">
            4+
          </p>
          <p className="text-background uppercase tracking-wide text-lg font-medium">
            Years of Experience
          </p>
        </div>
        <div className="border-2 border-r-0 border-primary w-full h-full flex flex-col items-center justify-center gap-2">
          <p className="font-semibold text-6xl tracking-wide">20+</p>
          <p className="uppercase tracking-wide text-lg font-medium">
            Projects Completed
          </p>
        </div>
        <div className="border-2 border-primary w-full h-full flex flex-col items-center justify-center gap-2">
          <p className="font-semibold text-6xl tracking-wide">5+</p>
          <p className="uppercase tracking-wide text-lg font-medium">
            satisfied customers
          </p>
        </div>
      </section>
      <section className="w-full px-36 pt-36 flex flex-col items-center">
        <span className="uppercase font-medium mb-2 block text-2xl tracking-widest text-primary">
          Noteworthy Projects
        </span>
        <h2 className="text-[4rem] tracking-wide leading-[1.1] font-semibold">
          Cool stuff I&apos;ve done
        </h2>
      </section>
    </main>
  );
}

export default App;
