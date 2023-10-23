export enum SelectedPage {
    Home ="home",
    Benefits = "benefits",
    OurClasses = "ourclasses",
    ContactUs = "contactus"
}

export type NavbarProps = {
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
  isTopOfPage: boolean;
}

export type LinkProps = {
  page: string;
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void
}

export type HomeProps = {
  setSelectedPage: (value: SelectedPage) => void;
};

export type ActionButtonProps = {
  children: React.ReactNode,
  setSelectedPage: (value: SelectedPage) => void
}

export type BenefitsProps = {
  setSelectedPage: (value: SelectedPage) => void
}

export type HTextProps = {
  children: React.ReactNode
}

export type BenefitType = {
  icon: JSX.Element,
  title: string,
  description: string
}

export type BenefitComponentProps = {
  icon: JSX.Element,
  title: string,
  description: string,
  setSelectedPage: (value: SelectedPage) => void
}

export type ourClassesProps = {
  setSelectedPage: (value: SelectedPage) => void
}

export type ClassType = {
  name: string,
  description?: string,
  image: string
}

export type contactUsProps = {
  setSelectedPage: (value: SelectedPage) => void
}
