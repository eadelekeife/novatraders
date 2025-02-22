// src/types/language.ts
export type Language = 'en' | 'fr' | 'ru' | 'ar';

export interface TranslationContent {
    title: string;
    name: string;
    email: string;
    message: string;
    submit: string;
    description: string;
    emailAddress: string;
    phone: string;
    fullName: string;
    topic: string;
    location: string;
}

export interface AboutContent {
    story: string;
    values: string;
    gridTitle1: string;
    gridStory1: string;
    gridTitle2: string;
    gridStory2: string;
    gridTitle3: string;
    gridStory3: string;
}
export interface HomeContent {
    heroTitle: string;
    heroBody: string;
    heroButton: string;
    belowTitle: string;
    belowBody: string;
    belowTag: string;
    belowButton: string;
    blackTitle: string;
    blackStory: string;
    blackTag: string;
    bottomTitle: string;
    bottomStory: string;
    bottomTag: string;
}

export interface Translations {
    en: {
        contact: TranslationContent;
        about: AboutContent,
        home: HomeContent
    };
    fr: {
        contact: TranslationContent;
        about: AboutContent,
        home: HomeContent
    };
    ru: {
        contact: TranslationContent;
        about: AboutContent,
        home: HomeContent
    };
    ar: {
        contact: TranslationContent;
        about: AboutContent,
        home: HomeContent
    }
}