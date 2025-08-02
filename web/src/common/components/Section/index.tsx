import { NullstackNode } from "nullstack"
import { SectionTitle } from "../SectionTitle"

interface Props {
    id: string
    transparent?: boolean
    children: NullstackNode
    title: string
    center?: boolean
    class?: string
}

export const Section = ({ id, transparent, title, center, children, class: klass }: Props) => (
    <section id={id} class={[
        center ? 'items-center' : '',
        transparent ? "flex justify-center font-main pt-20 pb-20 p-4 md:p-20 md:pb-24" : "relative flex flex-col justify-center items-center font-main bg-zinc-900 mt-16 p-16 md:p-20 md:pb-24 border-y border-y-slate-600",
        klass,
    ]}>
        <div class="section h-full md-laptop:mt-[5vh] md-laptop:mb-[10vh] md-tablet:mt-[10vh] md-tablet:mx-[1.5rem] lg-tablet:mx-[3rem]">
            <SectionTitle title={title} href={`#${id}`} />

            {children}
        </div>
    </section>
)