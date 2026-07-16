export interface NavLink {
  label: string;
  href: string;
  children?: NavLink[];
}

export interface CTA {
  label: string;
  href: string;
  variant?: "primary" | "secondary" | "inverse";
  external?: boolean;
}

export interface SEODefaults {
  titleTemplate: string;
  defaultTitle: string;
  defaultDescription: string;
  defaultImage: string;
  siteName: string;
}
