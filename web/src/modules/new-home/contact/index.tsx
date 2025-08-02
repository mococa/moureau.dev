import Nullstack, { NullstackClientContext, NullstackServerContext } from "nullstack"
import { FormInput } from "_common/components/FormInput"
import { Link } from "_common/components/Link"
import { translations } from "_utils/translations";
import { SectionTitle } from "_common/components/SectionTitle";
import { Language } from "_@types";
import { Section } from "_common/components/Section";

const { name, title, subtitle, button, labels } = translations.get_in_touch;

interface MessageForm {
    body: string;
    email: string;
    name: string;
}

export class Contact extends Nullstack<{ language: Language }> {
    name: string
    email: string
    body: string

    /* ---------- Server functions ---------- */
    static async NotifyContact({
        services,
        message,
    }: Partial<NullstackServerContext<{ message: MessageForm }>>) {
        await services.contact.sendMessage({ ...message });
    }

    /* ---------- Handlers ---------- */
    async handleSubmit() {
        await Contact.NotifyContact({
            message: {
                body: this.body,
                email: this.email,
                name: this.name,
            },
        });

        alert('Message sent! I will get back to you shortly ✅');
    }

    render({ language }: NullstackClientContext) {
        return (
            <Section id="contact" title={name[language]}>
                <div class="md:columns-2">
                    <div class="mt-4 flex flex-col gap-8">
                        <h3 class="text-3xl md:text-4xl lg:max-w-md lg:text-5xl 2xl:text-6xl">{title[language]}</h3>

                        <b class="text-white">
                            {subtitle[language]} <span>→</span>
                        </b>

                    </div>

                    <div class="mt-8 inline-block break-before-column w-full">
                        <form class="flex flex-col gap-10" onsubmit={this.handleSubmit}>
                            <FormInput name="name" label={labels.name[language]}>
                                <input
                                    name="name"
                                    class="font-space"
                                    data-value={this.name || ''}
                                    bind={this.name}
                                    required
                                />
                            </FormInput>

                            <FormInput name="email" label={labels.email[language]}>
                                <input
                                    class="font-space"
                                    name="email"
                                    type="email"
                                    data-value={this.email || ''}
                                    bind={this.email}
                                    required
                                />
                            </FormInput>

                            <FormInput name="body" label={labels.description[language]}>
                                <textarea
                                    class="font-space"
                                    name="body"
                                    data-value={this.body || ''}
                                    bind={this.body}
                                    rows={5}
                                    required
                                />
                            </FormInput>

                            <Link>{button[language]}</Link>
                        </form>
                    </div>
                </div>
            </Section>
        )
    }
}