import Nullstack, { NullstackClientContext } from "nullstack";
import { Language } from "_@types";
import { Section } from "_common/components/Section";
import { translations } from "_utils/translations";

const { name, title, subtitle } = translations.skills;
interface SkillSectionProps {
    title: string
    class?: string
    tools: { name: string, src: string, about: string }[]
}

class SkillSection extends Nullstack<SkillSectionProps> {
    tooltips: Record<string, boolean> = {}

    render({ title, class: className, tools }: NullstackClientContext<SkillSectionProps>) {
        return (
            <div
                class={`w-full p-5 rounded-md fade-in glass-effect ${className || ''}`}
                data-state="playing"
            >
                <h3 class="text-xl font-semibold text-font-pr">
                    {title}
                </h3>

                <p class="w-full mt-2 font-space text-md md:text-lg break-words whitespace-pre-line">
                    I love problem-solving and building complex systems.
                    I strive to create scalable, reliable, and secure solutions.
                </p>

                <div class="mt-4 flex flex-wrap gap-1">
                    {tools.map(({ name, src, about }) => (
                        <div onpointerover={() => this.tooltips[name] = true}
                            onpointerout={() => this.tooltips[name] = false}>
                            <a
                                href={about}
                                target="_blank"
                                class="p-1 py-2 flex rounded-md relative justify-center"
                            >
                                <img
                                    alt={name}
                                    class="w-6 h-6 object-contain bg-transparent"
                                    data-pd-tooltip="true"
                                    src={src}

                                />

                                <div role="tooltip" style={this.tooltips[name] && "bottom: 40px; opacity: 1;"} class="absolute z-10 inline-block px-3 py-2 text-sm font-medium text-white duration-300 rounded-lg shadow-sm bottom-0 opacity-0 tooltip bg-gray-700 w-fit min-w-max pointer-events-none">
                                    {name}
                                    <div class="tooltip-arrow" data-popper-arrow></div>
                                </div>
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        )
    }
}

export const Skills = ({ language }: { language: Language }) => {
    return (
        <Section id="skills" title={name[language]} transparent>
            <h2 class="text-2xl md:text-4xl max-w-xl mb-4">
                {title[language][0]}
                <b style="color: var(--accent)">
                    {title[language][1]}
                </b>
            </h2>

            <span class="!mt-4 font-space md:text-lg text-md max-w-4xl">{subtitle[language]}</span>

            <div class="h-auto justify-center md:columns-2 gap-6 mt-8">
                <SkillSection title="Front-end" tools={[
                    { name: 'TypeScript', src: '/img/languages/ts.png', about: 'https://www.typescriptlang.org/' },
                    { name: 'Javascript', src: '/img/languages/js.png', about: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript' },
                    { name: 'Nullstack', src: '/img/languages/nullstack.png', about: 'https://nullstack.app/' },
                    { name: 'React', src: '/img/languages/react.png', about: 'https://react.dev/' },
                    { name: 'Pixi', src: 'https://files.pixijs.download/branding/pixijs-logo-mark-dark.png', about: 'https://pixijs.com/' },
                    { name: 'Tailwind', src: 'https://natsha.me/_vercel/image?url=%2Fimgs%2Fskills%2Ftailwind.png&w=1536&q=100', about: 'https://tailwindcss.com/' },
                    { name: 'Sass', src: 'https://sass-lang.com/assets/img/styleguide/seal-color.png', about: 'https://sass-lang.com/' },
                    { name: 'Styled Components', src: 'https://avatars.githubusercontent.com/u/20658825?s=200&v=4', about: 'https://styled-components.com/' },
                ]} />

                <SkillSection title="Back-end" class="mt-8" tools={[
                    { name: 'Lambda', src: 'https://upload.wikimedia.org/wikipedia/commons/5/5c/Amazon_Lambda_architecture_logo.svg', about: 'https://aws.amazon.com/pm/lambda/' },
                    { name: 'NodeJS', src: 'https://natsha.me/_vercel/image?url=%2Fimgs%2Fskills%2Fnode.webp&w=1536&q=100', about: 'https://nodejs.org/' },
                    { name: 'Golang', src: '/img/languages/go.png', about: 'https://go.dev/' },
                    { name: 'Python', src: 'https://i.pinimg.com/originals/82/a2/18/82a2188c985ce75402ae44fc43fe7e5e.png', about: 'https://www.python.org/' },
                    { name: 'Postgres', src: 'https://cdn.prod.website-files.com/62d69ddf7813e9ad935e731f/631eef02101344fe95dd8880_Postgres%403x.png', about: 'https://www.postgresql.org/' },
                    { name: 'Mongo', src: '/img/languages/mongo.png', about: 'https://www.mongodb.com/' },
                    { name: 'Stripe', src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQGluJhW7I1NYU7jF77E-9K9I46_ib_DUNHw&s', about: 'https://stripe.com/' },
                ]} />

                <SkillSection title="Infrastructure, DevOps & Tools" class="mt-8 md:mt-16 inline-block" tools={[
                    { name: 'Linux', src: 'https://natsha.me/_vercel/image?url=%2Fimgs%2Fskills%2Flinux.png&w=1536&q=100', about: 'https://www.gnu.org/' },
                    { name: 'Pulumi', src: 'https://www.pulumi.com/logos/brand/avatar-on-white.svg', about: 'https://www.pulumi.com/' },
                    { name: 'AWS', src: '/img/languages/aws.png', about: 'https://aws.amazon.com/' },
                    { name: 'Google Cloud', src: 'https://natsha.me/_vercel/image?url=%2Fimgs%2Fskills%2Fgcp.png&w=1536&q=100', about: 'https://cloud.google.com/' },
                    { name: 'Cloudflare', src: 'https://natsha.me/_vercel/image?url=%2Fimgs%2Fskills%2Fcloudflare.png&w=1536&q=100', about: 'https://cloudflare.com/' },
                    { name: 'Figma', src: 'https://natsha.me/_vercel/image?url=%2Fimgs%2Fskills%2Ffigma-logo.svg&w=1536&q=100', about: 'https://figma.com/' },
                    { name: 'Bash', src: '/img/languages/bash.png', about: 'https://www.gnu.org/software/bash/' },
                    { name: 'Git', src: 'https://seeklogo.com/images/G/git-logo-A1D01DDA30-seeklogo.com.png', about: 'https://git-scm.com/' },
                    { name: 'Docker', src: 'https://static-00.iconduck.com/assets.00/docker-icon-1024x739-rivf80b4.png', about: 'https://www.docker.com/' },
                    { name: 'Playwright', src: 'https://natsha.me/_vercel/image?url=%2Fimgs%2Fskills%2Ficon.png&w=1536&q=100', about: 'https://playwright.dev/' },
                ]} />

                <SkillSection title="Mobile" class="mt-8" tools={[
                    { name: 'Flutter', src: 'https://static-00.iconduck.com/assets.00/flutter-icon-256x256-ngd48v7a.png', about: 'https://flutter.dev/' },
                    { name: 'PWA', src: 'https://apps.odoo.com/web/image/loempia.module/166624/icon_image?unique=7a85c5c', about: 'https://web.dev/explore/progressive-web-apps' },
                    { name: 'React Native - Expo', src: 'https://play-lh.googleusercontent.com/algsmuhitlyCU_Yy3IU7-7KYIhCBwx5UJG4Bln-hygBjjlUVCiGo1y8W5JNqYm9WW3s', about: 'https://expo.dev/' },
                ]} />
            </div>
        </Section>
    )
}