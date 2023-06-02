export namespace Models {
  export interface Skill {
    name: string;
    src: string;
    href: string;
    padding?: number;
  }

  export interface BlogPost {
    id: number;
    title: string;
    body: string;
    description: string;
    created_at: string;
    updated_at: string;
    author: string;
    language: Language;
    image: string;
  }
}

export type Language = 'en' | 'pt' | 'fr' | 'es';
