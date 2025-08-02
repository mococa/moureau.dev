import { Language, Models } from "_@types";
import { Link } from "_common/components/Link";
import { Section } from "_common/components/Section";
import { SectionTitle } from "_common/components/SectionTitle";
import { ShownDate } from "_common/components/ShownDate";
import { translations } from "_utils/translations";

const { title, button } = translations.latest_articles;

export const LatestPosts = ({ language, posts }: { language: Language, posts: Models.BlogPost[] }) => {
    return (
        <Section id="latest-posts" title="Blog" transparent>
            <div class="grid w-full gap-8 sm:gap-12 md:gap-0 md:grid-cols-[1fr_1fr]">
                <div class="mt-4 flex flex-col gap-8">
                    <h3 class="text-xl md:text-2xl lg:text-3xl 2xl:text-4xl">{title[language]}</h3>

                    <Link href="/blog">{button[language]}</Link>
                </div>

                <div class="mt-8 inline-block break-before-column w-full">
                    <ul class="flex flex-col">
                        {([{ language: 'fr', id: '1', created_at: '02-12-2001', title: 'Yolo?' }])
                            .filter(
                                ({ language: post_language }) => post_language === language,
                            )
                            .slice(0, 3)
                            .map(post => (
                                <li>
                                    <a class="recent-post" href={`/blog/post/${post.id}`}>
                                        <ShownDate
                                            date={new Date(post.created_at)}
                                            label="Articles"
                                            language={language}
                                        />

                                        <h3>{post.title}</h3>
                                    </a>
                                </li>
                            ))}
                    </ul>
                </div>
            </div>
        </Section>
    )
}