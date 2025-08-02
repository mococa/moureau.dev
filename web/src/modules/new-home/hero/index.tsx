import Nullstack, { NullstackClientContext } from "nullstack";

import { Navbar } from "_common/components/Navbar";
import { SocialLinks } from "_common/components/Social";

import { translations } from "_utils/translations";
import { Language } from "_@types";
import { GridBackground } from "_common/components/GridBackground";

const { introduction, title, subtitle, sections } = translations.hero;

export const Hero = ({ language }: { language: Language }) => {
    return (
        <header>
            <GridBackground />

            <Navbar language={language} />

            <section class="flex justify-center font-main">
                <div class="section h-full md-laptop:mt-[5vh] md-laptop:mb-[10vh] md-tablet:mt-[10vh] md-tablet:mx-[1.5rem] lg-tablet:mx-[3rem]">
                    <div class="grid relative md-laptop:mt-[5vh] md-tablet:mt-[10vh] mt-6 md:mt-12 md:mb-12 w-full gap-8 sm:gap-12 md:gap-0 md:grid-cols-[24rem_1fr]">
                        <div>
                            <img
                                alt="Luiz Felipe's photo"
                                src="/img/me3.jpg"
                                class="hidden sm:block h-[28.5rem] md:h-[30rem] rounded-md shadow-inner object-cover w-full"
                                style="object-position: 0 -50px;"
                            />
                        </div>

                        <div class="md:ml-12 w-full flex flex-col text-slate-300">
                            <p
                                class="text-md md:text-md lg:text-xl text-font-2nd text-center md:text-start enter-animation"
                                data-state="play"
                                style="--motion-dur: 0.8s;"
                            >
                                {introduction[language]}
                            </p>

                            <h1
                                class="mt-2 left-16 top-[18%] text-3xl md:text-5xl lg:text-6xl 2xl:text-7xl text-center md:text-start enter-animation text-white"
                                data-state="play"
                                style="--motion-dur: 0.9s; line-height: 125%;"
                            >
                                {title[language][0]}
                                <span class="aspire"> {title[language][1]} </span>
                                <span class="emoji-shake">{title[language][2]}</span>
                            </h1>

                            <p class="text-slate-200 md:text-2xl md:text-left text-center text-lg w-100 md:w-2/3 mt-2">{subtitle[language]}</p>

                            <div class="flex flex-col text-slate-200 items-center mt-12 sm:items-start sm:mt-0">
                                <b class="mt-8 mb-2">{sections.follow_me[language]}</b>
                                <SocialLinks />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </header>
    )
}
