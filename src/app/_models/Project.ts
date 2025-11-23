import { Tag } from "./Tag";

export interface Project{
    Id: number;
    name: string;
    summary: string;
    description: string;
    projectLinks: link[];
    projectReport: string;
    pictures: string[];
    tags:Tag[];
}
export interface link{
    name: string;
    url: string;
}
