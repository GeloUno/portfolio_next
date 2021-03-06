import { ETechnology } from "./ETechnology";

export interface IProject {
    title: string;
    description: string | Array<string>;
    technology: Array<ETechnology>;
    github: string;
    image?: string;
    web?: string;
}
