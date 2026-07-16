export interface NavLink {
  label: string;
  href: string;
}

export interface CTA {
  label: string;
  href: string;
  variant?: "primary" | "secondary";
  external?: boolean;
}

export interface SEODefaults {
  titleTemplate: string;
  defaultTitle: string;
  defaultDescription: string;
  defaultImage: string;
  siteName: string;
}
