export type Project = {
  id: number;
  title: string;
  description: string;
  image: string;
  type: string | "phone" | "browser" | "mac";
  color: string;
};

export type Experience = {
  id: string | number;
  title: string;
  type:
    | string
    | "Full-time"
    | "Part-time"
    | "Internship"
    | "Student Assistant"
    | "Freelance";
  company: string;
  logo: string;
  startDate: string;
  endDate: string;
};

export type Education = {
  id: string | number;
  title: string;
  university: string;
  type: string;
  startDate: string;
  endDate: string;
};

export type Tool = {
  id: string | number;
  type: string;
  tools: { name: string; size: number }[];
};
