import brandingRaw from '../../branding.json';

export interface BrandingTheme {
  brandName: string;
  tagline: string;
  colorScheme: string;
  colors: {
    primary: string;
    secondary: string;
    accent: string;
    background: string;
    textPrimary: string;
    link: string;
    primaryHover: string;
    onPrimary: string;
    dark: {
      background: string;
      surface: string;
      text: string;
      mutedText: string;
    };
  };
  typography: {
    fontFamilies: {
      primary: string;
      heading: string;
    };
    fontStacks: {
      heading: string[];
      body: string[];
      accent: string[];
    };
    fontSizes: {
      hero: string;
      h1: string;
      h2: string;
      body: string;
    };
  };
  spacing: {
    baseUnit: number;
    borderRadius: string;
    section: string;
  };
  components: {
    buttonPrimary: {
      background: string;
      textColor: string;
      borderRadius: string;
    };
    buttonSecondary: {
      background: string;
      textColor: string;
      borderRadius: string;
    };
    input: {
      background: string;
      textColor: string;
      borderColor: string;
      borderRadius: string;
    };
    nav: {
      behavior: string;
      cta: string;
    };
  };
  sections: Record<string, string>;
  motion: {
    easing: string;
    scrub: number;
    smoothScroll: boolean;
  };
  assets: {
    burgerFrames: string;
    pizzaFrames: string;
  };
  metadata: {
    title: string;
    description: string;
    themeColor: string;
  };
}

export const branding: BrandingTheme = {
  brandName: brandingRaw.data.branding.brandName,
  tagline: brandingRaw.data.branding.tagline,
  colorScheme: brandingRaw.data.branding.colorScheme,
  colors: brandingRaw.data.branding.colors,
  typography: brandingRaw.data.branding.typography,
  spacing: brandingRaw.data.branding.spacing,
  components: brandingRaw.data.branding.components,
  sections: brandingRaw.data.branding.sections,
  motion: brandingRaw.data.branding.motion,
  assets: brandingRaw.data.branding.assets,
  metadata: {
    title: brandingRaw.data.metadata.title,
    description: brandingRaw.data.metadata.description,
    themeColor: brandingRaw.data.metadata['theme-color'],
  },
};

export function getCssVariables(): Record<string, string> {
  return {
    '--color-primary': branding.colors.primary,
    '--color-primary-hover': branding.colors.primaryHover,
    '--color-on-primary': branding.colors.onPrimary,
    '--color-secondary': branding.colors.secondary,
    '--color-accent': branding.colors.accent,
    '--color-light-bg': branding.colors.background,
    '--color-light-text': branding.colors.textPrimary,
    '--color-link': branding.colors.link,
    '--color-dark-bg': branding.colors.dark.background,
    '--color-dark-surface': branding.colors.dark.surface,
    '--color-dark-text': branding.colors.dark.text,
    '--color-dark-muted': branding.colors.dark.mutedText,
    '--font-heading': branding.typography.fontStacks.heading.join(', '),
    '--font-body': branding.typography.fontStacks.body.join(', '),
    '--font-accent': branding.typography.fontStacks.accent.join(', '),
    '--font-size-hero': branding.typography.fontSizes.hero,
    '--font-size-h1': branding.typography.fontSizes.h1,
    '--font-size-h2': branding.typography.fontSizes.h2,
    '--font-size-body': branding.typography.fontSizes.body,
    '--border-radius-button': branding.components.buttonPrimary.borderRadius,
    '--border-radius-input': branding.components.input.borderRadius,
    '--spacing-section': branding.spacing.section,
  };
}
