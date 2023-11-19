type ReactNode = import("react").ReactNode

interface DraggableSectionProps {
    index: number;
    section: {
      id: string;
      title: string;
      data?: Record<string, string>;
    };
    children: ReactNode;
  }