export interface Blog {
  slug: string;
  content: string;
  title: string;
  description?: string;
  date: string;
  author?: string;
  tags?: string[];
  cover?: string;
  coverAlt?: string;
  coverCaption?: string;
}
