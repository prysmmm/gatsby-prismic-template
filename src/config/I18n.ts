import { ReactNode } from 'react';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import { fr } from '@/translations';

export type IsoCountryCodes = `BE` | `FR`;
export type IsoLanguageCodes = `fr-BE` | `nl-BE` | `fr-FR`;
export type Languages = `fr` | `nl`;

export interface Country {
  iso: IsoCountryCodes;
  flag: ReactNode;
  label: ReactNode;
  path: string;
  lang: Languages;
  isDisabled?: boolean;
}

export const Countries: Record<IsoLanguageCodes, Country> = {
  'fr-BE': {
    iso: `BE`,
    flag: `🇧🇪`,
    label: `Belgique`,
    path: `fr-be`,
    lang: `fr`,
  },
  'nl-BE': {
    iso: `BE`,
    flag: `🇧🇪`,
    label: `Belgïe`,
    path: `nl-be`,
    lang: `nl`,
    isDisabled: true,
  },
  'fr-FR': {
    iso: `FR`,
    flag: `🇫🇷`,
    label: `France`,
    path: `fr-fr`,
    lang: `fr`,
  },
};

export const initI18n = {
  async init() {
    const i18nService = i18n.use(initReactI18next);

    await i18nService.init({
      lng: `fr`,
      fallbackLng: `fr`,
      supportedLngs: [`fr`],
      resources: {
        fr: {
          translation: fr,
        },
      },
    });
  },
};
