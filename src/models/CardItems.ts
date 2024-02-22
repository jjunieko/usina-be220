interface Item {
  title: string;
  icon?: string;
  imageSrc: string;
  imageAlt: string;
  subtitle: string;
  description?: string;
  isRegister: boolean;
}

interface Mode {
  title: string;
  icon?: string;
  imageSrc: string;
  imageAlt: string;
  subtitle: string;
  description?: string;
  isRegister: boolean;
}

interface Content {
  title: string;
  icon?: string;
  imageSrc: string;
  imageAlt: string;
  subtitle: string;
  description?: string;
  isRegister: boolean;
}

interface ItemsData {
  items: (Item | { mode: Mode[] } | { content: Content[] })[];
}
