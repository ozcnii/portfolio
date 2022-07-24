export type IProjectImage = string;

export interface IProject {
  title: string;
  shortDescription: string;
  previewImage: string;
  slug: string;
  description: string;
  images: IProjectImage[];
}
