import * as Nullstack from 'nullstack';

type CustomSettings = Nullstack.NullstackSettings & {
  handleChangeLocale: ({ locale }: { locale: string }) => void;
};

declare global {
  type NullstackClientContext<TProps = unknown> =
    Nullstack.NullstackClientContext<TProps> & {
      settings: CustomSettings;
    };
}
