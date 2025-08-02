import Nullstack, { NullstackClientContext } from "nullstack";
import { Hero } from "./hero";
import { AboutMe } from "./about-me";
import { Skills } from "./skills";
import { Footer } from "_common/components/Footer";
import { SocialLinks } from "_common/components/Social";
import { Contact } from "./contact";
import { LatestPosts } from "./latest-posts";

export class Home extends Nullstack {
    render({ language, settings }: NullstackClientContext) {
        return (
            <main>
                <Hero language={language} />
                <AboutMe language={language} />
                <Skills language={language} />
                <Contact language={language} />
                <LatestPosts language={language} posts={settings.blog_posts} />

                <Footer />
            </main>
        )
    }
}