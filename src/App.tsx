import React from 'react';
import HeroImage from './hero.jpg';

function App() {
  return (
    <main className="text-stone-800 mb-32 flex flex-col items-cente">
      <nav className="w-full flex flex-col items-center gap-8 py-16 px-28 bg-stone-100">
        <h1 className="font-normal tracking-[0.2em] text-2xl uppercase">
          &lt;Codeblog/&gt;
        </h1>
        <ul className="uppercase text-xs flex tracking-wider gap-12 mt-[4px]">
          <li>home</li>
          <li>about me</li>
          <li>portfolio</li>
          <li>blog</li>
          <li>get in touch</li>
        </ul>
      </nav>
      <section className="w-full flex flex-col items-center bg-stone-100 text-stone-800 pb-32">
        <div className="w-full px-20 flex flex-col items-center gap-32">
          <div
            className="w-full h-[30rem] text-stone-100"
            style={{
              backgroundImage: `url(${HeroImage})`,
              clipPath:
                'polygon(5% 0%, 80% 0%, 100% 0, 100% 90%, 95% 100%, 0 100%, 0 100%, 0% 10%)',
            }}
          >
            <div className="w-full h-full flex items-center justify-center backdrop-grayscale bg-black/50">
              <h1 className="uppercase text-4xl font-light tracking-[0.2rem]">
                Make Minimalism Great Again
              </h1>
            </div>
          </div>
          <div className="flex items-center flex-col gap-12">
            <h2 className="font-light text-3xl uppercase text-center leading-normal w-3/4">
              I&apos;m a web developer that is passionate about building
              minimalistic yet beautiful websites.
            </h2>
            <div className="shadow-[0px_2px_0px_0px_rgb(41,37,36)]">
              <div
                className="w-56 h-16 bg-stone-800 flex items-center justify-center"
                style={{
                  clipPath: 'polygon(90% 0, 100% 30%, 100% 100%, 0 100%, 0 0)',
                }}
              >
                <button
                  type="button"
                  className="uppercase bg-stone-100 pt-1 text-sm w-[calc(14rem-4px)] h-[calc(4rem-4px)] border-stone-800 tracking-[0.2rem]"
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
      <section className="flex items-center px-24 pt-32">
        <div className="w-1/2">
          <span className="uppercase font-bold text-sm">Introductions</span>
          <div className="w-6 h-[4px] bg-stone-800 mt-4 mb-5" />
          <h2 className="text-3xl">Things does not have to be complicated</h2>
          <p className="font-light mt-8 text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Massa
            vitae tortor condimentum lacinia quis vel eros donec ac. Justo nec
            ultrices dui sapien eget mi proin sed. Pretium lectus quam id leo in
            vitae turpis.
          </p>
        </div>
      </section>
      <section className="flex items-center justify-end px-24 pt-32">
        <div className="w-1/2 flex flex-col items-end">
          <span className="uppercase font-bold text-sm">about me</span>
          <div className="w-6 h-[4px] bg-stone-800 mt-4 mb-5" />
          <h2 className="text-3xl">Don&apos;t judge a book by its cover</h2>
          <p className="font-light mt-8 text-lg text-right">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Massa
            vitae tortor condimentum lacinia quis vel eros donec ac. Justo nec
            ultrices dui sapien eget mi proin sed. Pretium lectus quam id leo in
            vitae turpis.
          </p>
        </div>
      </section>
    </main>
  );
}

export default App;
