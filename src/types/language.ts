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

export interface NavContent {
    about: string;
    home: string;
    products: string;
    contact: string;
    quote: string;
    copyright?: string;
    whatsapp?: string;
    emailAddress?: string;
    phone?: string;
    company: string;
}

export interface AboutContent {
    story: string;
    sect1: string;
    sect2: string;
    sect3: string;
    sect4: string;
    sect5: string;
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
        home: HomeContent,
        nav: NavContent
    };
    fr: {
        contact: TranslationContent;
        about: AboutContent,
        home: HomeContent,
        nav: NavContent
    };
    ru: {
        contact: TranslationContent;
        about: AboutContent,
        home: HomeContent,
        nav: NavContent
    };
    ar: {
        contact: TranslationContent;
        about: AboutContent,
        home: HomeContent,
        nav: NavContent
    }
}