/* eslint-disable react/jsx-one-expression-per-line */
import React, { useEffect } from 'react';
import { Icon } from '@iconify/react';
import { AnimationOnScroll } from 'react-animation-on-scroll';

import Logo from '../public/images/logo.svg';
import Background from '../public/images/bg.svg';
import Background2 from '../public/images/bg2.svg';
import Waves from '../public/images/waves.svg';

import 'pattern.css';
import 'animate.css/animate.min.css';

function App() {
  useEffect(() => {
    // reduce the opacity of the background image when srolling
    const bg = document.querySelector<HTMLDivElement>('.bg')!;

    window.addEventListener('scroll', () => {
      const value = 1 + window.scrollY / -600;
      bg.style.opacity = `${value}`;
    });
  }, []);

  return (
    <main className="text-neutral-700 overflow-x-hidden w-full flex flex-col items-center bg-background isolate">
      <img
        alt=""
        src={Background}
        className="fixed w-full bg h-screen object-cover z-[-1] opacity-"
      />
      <nav className="w-full flex flex-col items-center gap-8 pt-16 px-28">
        <h1 className="font-normal tracking-[0.2em] text-3xl uppercase animate__animated animate__fadeInUp">
          <img src={Logo} alt="" />
        </h1>
        <ul className="uppercase font-medium flex tracking-wider gap-12 mt-[4px] animate__animated animate__fadeInDown">
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
          <div className="flex items-center flex-col gap-8">
            <div className="flex flex-col items-center tracking-widest">
              <p className="mt-24 mb-4 text-xl animate__animated animate__fadeInLeft">
                My name is{' '}
                <span className="font-medium text-primary">Melvin Chia</span>. I
                build websites that are
              </p>
              <h2 className="text-[3.8rem] tracking-[0.16em] uppercase text-center leading-normal animate__animated animate__fadeInRight">
                minimalistic yet beautiful
              </h2>
              <p className="uppercase text-2xl pb-24 mt-12 tracking-widest font-medium animate__animated animate__fadeInLeft">
                gorgeous <span className="text-primary">-</span> unconventional{' '}
                <span className="text-primary">-</span> concise
              </p>
            </div>
            <div className="shadow-[0px_2px_0px_0px_rgb(255,100,98)] animate__animated animate__fadeInUp">
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
      <div className="w-full flex">
        <AnimationOnScroll
          animateOnce
          animateIn="animate__fadeInRight"
          className=" flex flex-1 items-center justify-start ml-20 uppercase font-semibold text-lg py-2 tracking-wider border-t-2 border-primary text-primary"
        >
          <p>created in 2022</p>
        </AnimationOnScroll>
        <AnimationOnScroll
          animateOnce
          animateIn="animate__fadeInLeft"
          className=" flex flex-1 items-center justify-end mr-20 uppercase font-semibold text-lg py-2 tracking-wider border-t-2 border-neutral-700"
        >
          <p>10th generation</p>
        </AnimationOnScroll>
      </div>
      <section className="w-full p-20 mt-16 pb-0 flex flex-col items-center">
        <AnimationOnScroll animateIn="animate__fadeInUp">
          <p className="text-6xl font-semibold leading-snug text-center">
            &quot;Design is not just what it looks like and feels like.{' '}
            <span className="text-primary"> Design is how it works</span>.&quot;
          </p>
        </AnimationOnScroll>
      </section>
      <section className="flex w-full px-32 pt-24 gap-32">
        <AnimationOnScroll animateIn="animate__fadeInLeft" className="w-2/5">
          <span className="uppercase font-medium mb-2 block text-2xl tracking-widest text-primary">
            WHO AM I?
          </span>
          <h2 className="text-[4rem] tracking-wide leading-[1.1] font-medium relative isolate">
            The Interpreter
            <br />
            of Practical Minimalism
            <div className="w-36 h-36 pattern-dots-lg text-primary absolute -bottom-8 z-[-1] -left-8" />
          </h2>
        </AnimationOnScroll>
        <AnimationOnScroll
          animateIn="animate__fadeInRight"
          className="w-3/5 h-full flex flex-col items-center justify-end"
        >
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
        </AnimationOnScroll>
      </section>
      <AnimationOnScroll
        className="px-32 pt-32 w-full grid grid-cols-3 h-72 relative"
        animateIn="animate__fadeInUp"
      >
        <div className="border-2 border-r-0 border-primary w-full h-full flex flex-col items-center justify-center gap-2">
          <p className="font-semibold text-6xl tracking-wide">4+</p>
          <p className="uppercase tracking-wide text-lg font-medium">
            Years of Experience
          </p>
        </div>
        <div className=" text-background bg-primary w-full h-full flex flex-col items-center justify-center gap-2">
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
      </AnimationOnScroll>
      <section
        style={{
          backgroundImage: `url(${Background2})`,
        }}
        className="w-full pt-36 flex flex-col items-center bg-fixed bg-background/70 bg-blend-overlay"
      >
        <span className="uppercase font-medium mb-2 block text-2xl tracking-widest text-primary">
          Notable Projects
        </span>
        <h2 className="text-[4rem] tracking-wide leading-[1.1] font-medium">
          Editor&apos;s Choices
        </h2>
        <div className="flex flex-col gap-32 mt-24 w-full px-36">
          <div className="flex items-center h-72 w-full gap-12">
            <div className="w-2/5 relative aspect-[16/10]">
              <div className="w-full h-full absolute -bottom-4 -left-4 pattern-diagonal-lines-sm text-primary" />
              <div className="w-full h-full relative">
                <div
                  className="w-full h-full bg-contain bg-no-repeat"
                  style={{
                    backgroundImage:
                      'url("https://github.com/melvinchia3636/CBImage/blob/main/gitinfogithubapiexplorer.png?raw=true")',
                  }}
                />
              </div>
            </div>
            <div className="w-3/5">
              <div
                style={{
                  clipPath:
                    'polygon(90.5% 0, 100% 30%, 100% 100%, 0 100%, 0 0)',
                }}
                className="uppercase tracking-wider bg-primary text-background px-4 py-2 mb-4 w-min font-semibold"
              >
                API
              </div>
              <h3 className="text-5xl font-medium tracking-wider leading-[1.1]">
                Pushing GitHub API to it&apos;s limit
              </h3>
            </div>
          </div>
          <div className="flex items-center h-72 w-full gap-12">
            <div className="w-3/5">
              <div
                style={{
                  clipPath:
                    'polygon(90.5% 0, 100% 30%, 100% 100%, 0 100%, 0 0)',
                }}
                className="uppercase tracking-wider bg-primary text-background px-4 py-2 mb-4 w-min font-semibold"
              >
                Minigame
              </div>
              <h3 className="text-5xl font-medium tracking-wider leading-[1.1]">
                Classic game with fancy animations
              </h3>
            </div>
            <div className="w-2/5 relative aspect-[16/10]">
              <div className="w-full h-full absolute -bottom-4 -left-4 pattern-diagonal-lines-sm text-primary" />
              <div className="w-full h-full bg-primary relative">
                <div
                  className="w-full h-full bg-contain bg-no-repeat"
                  style={{
                    backgroundImage:
                      'url("https://github.com/melvinchia3636/CBImage/blob/main/2048.png?raw=true")',
                  }}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="shadow-[0px_2px_0px_0px_rgb(255,100,98)] my-32">
          <div
            className="w-64 h-16 bg-primary flex items-center justify-center"
            style={{
              clipPath: 'polygon(92% 0, 100% 30%, 100% 100%, 0 100%, 0 0)',
            }}
          >
            <button
              type="button"
              className="uppercase font-medium text-primary bg-background w-[calc(16rem-4px)] h-[calc(4rem-4px)] tracking-[0.2rem]"
              style={{
                clipPath: 'polygon(92.5% 0, 100% 30%, 100% 100%, 0 100%, 0 0)',
              }}
            >
              See All Projects
            </button>
          </div>
        </div>
        <img
          src={Waves}
          alt="layer"
          className="w-full h-[23rem] object-cover object-bottom"
        />
      </section>

      <section className="w-full px-32 py-32 bg-primary" />
    </main>
  );
}

export default App;
