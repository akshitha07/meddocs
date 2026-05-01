import { Journal, Ebook, HeroSlide, FeaturedArticle } from './types';

export const EBOOKS: Ebook[] = [
  { id: 1, title: 'Alzheimer\'s Disease and Treatment', image: '/images/books/alzheimer\'s-disease-and-treatment.jpg' },
  { id: 2, title: 'Pharmaceutical Chemistry', image: '/images/books/an-ebook-on-pharmaceutical-chemistry.jpg' },
  { id: 3, title: 'Vascular Diseases', image: '/images/books/an-ebook-on-vascular-diseases.jpg' },
  { id: 4, title: 'Nanotechnology', image: '/images/books/importance-applications-of-nanotechnology.jpg' },
  { id: 5, title: 'Modern Chemistry', image: '/images/books/principles-of-modern-chemistry.jpg' },
  { id: 6, title: 'Biotechnology', image: '/images/books/recent-trends-in-biotechnology.jpg' },
  { id: 7, title: 'Microbiology', image: '/images/books/research-trends-of-microbiology.jpg' },
  { id: 8, title: 'Transfusion Medicine', image: '/images/books/transfusion-medicine.jpg' },
];

export const JOURNALS: Journal[] = [
  { 
    id: '1', 
    title: 'Annals of Biomedical Research', 
    category: 'Biomedical', 
    description: 'High-impact research covers all aspects of biomedical sciences and clinical research.',
    issn: '2576-5442'
  },
  { 
    id: '2', 
    title: 'International Journal of Surgery', 
    category: 'Surgery', 
    description: 'Focusing on innovative surgical techniques, perioperative care, and surgical education.',
    issn: '2637-7756'
  },
  { 
    id: '3', 
    title: 'Journal of Obesity & Metabolism', 
    category: 'Metabolic Health', 
    description: 'Exploring clinical and experimental studies related to obesity and metabolic disorders.',
    issn: '2576-5450'
  },
  { 
    id: '4', 
    title: 'Annals of Clinical Case Reports', 
    category: 'Clinical', 
    description: 'A platform for sharing unique clinical experiences and rare medical case studies.',
    issn: '2576-3242'
  },
  { 
    id: '5', 
    title: 'Journal of Pediatric Research', 
    category: 'Pediatrics', 
    description: 'Dedicated to the latest advancements in pediatric medicine and child health Care.',
    issn: '2637-3342'
  },
  { 
    id: '6', 
    title: 'World Journal of Oncology', 
    category: 'Oncology', 
    description: 'Comprehensive research on cancer biology, diagnosis, and novel treatment strategies.',
    issn: '2576-5442'
  }
];

export const HERO_SLIDES: HeroSlide[] = [
  {
    image: "/images/md-jornals.png",
    title: "",
    subtitle: ""
  },
  {
    image: "/images/bannerImag.png",
    title: "",
    subtitle: ""
  },
  {
    image: "/images/heroImg1.png",
    title: "",
    subtitle: ""
  }
];

export const FEATURED_ARTICLES: FeaturedArticle[] = [
  {
    title: "Effects of SGLT2 Inhibitor on Neurohormonal Activity and Electrolyte Management in an Elderly Patient with Type 2 Diabetes Mellitus",
    author: "Hajime Kataoka",
    journal: "ANNALS OF CARDIOLOGY AND VASCULAR MEDICINE",
    issn: "2639-4383"
  },
  {
    title: "A Review of the Gastrointestinal Effects Associated with COVID-19 Infections",
    author: "Bailey Reid; Allyson L Spence*; Cassandra Stroup",
    journal: "ANNALS OF GASTROENTEROLOGY AND THE DIGESTIVE SYSTEM",
    issn: "2637-4501"
  },
  {
    title: "Nanoparticles Mitigate Retinal Pigment Epithelium (RPE) Death-Using APRE19 Cell Model",
    author: "Eric Dahl*; Nikolaos E Efstathiou; Amit K Roy",
    journal: "JOURNAL OF NANOMEDICINE",
    issn: "2578-8760"
  }
];
