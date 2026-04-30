
export interface Journal {
  id: string;
  title: string;
  category: string;
  description: string;
  issn: string;
}

export interface Ebook {
  id: number;
  title: string;
  image: string;
}

export interface HeroSlide {
  image: string;
  title: string;
  subtitle: string;
}

export interface FeaturedArticle {
  title: string;
  author: string;
  journal: string;
  issn: string;
}
