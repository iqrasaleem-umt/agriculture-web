declare module "react-slick" {
    import { Component } from "react";
  
    export interface Settings {
      dots?: boolean;
      infinite?: boolean;
      speed?: number;
      slidesToShow?: number;
      slidesToScroll?: number;
      autoplay?: boolean;
      autoplaySpeed?: number;
      cssEase?: string;
      responsive?: Array<{
        breakpoint: number;
        settings: Partial<Settings>;
      }>;
      [key: string]: any; // For extending options
    }
  
    export default class Slider extends Component<Settings> {}
  }
  