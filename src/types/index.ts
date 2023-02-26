type TimelineCardProps = {
  dateStart: {
    day?: number;
    month?: number;
    year: number;
  };
  dateEnd: {
    day?: number;
    month?: number;
    year: number;
  };
  description: string;
};

type NavbarLinkProps = {
  title: string
  url: string
};

type BreakPointKeys = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

export type {
  TimelineCardProps,
  NavbarLinkProps,
  BreakPointKeys,
};