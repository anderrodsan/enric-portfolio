export type Project = {
  id: number;
  title: string;
  description: string;
  image: string;
  type: string | "phone" | "browser" | "mac";
  color:
    | string
    | "bg-light-blue"
    | "bg-light-orange"
    | "bg-light-green | bg-light-pink";
};
