export interface IConcert {
  id?: number;
  age?: string;
  type?: string;
  no?: number;
  title: string;
  date: string;
  place: string;
  img_url: string;
  desc?: string;
  youtube_url?: string[];
  link_url?: string;
  blurData_url?: string;
  program?: {
    part1?: string[];
    part2?: string[];
    part3?: string[];
    part4?: string[];
    part5?: string[];
  };
  performers?: {
    conductor?: string;
    viceconductor?: string;
    soloists?: {
      [key: string]: string | string[];
    };
    choir?: string | string[];
    orchestra?: string | string[];
    piano?: string | string[];
  };
  organizer?: string | string[];
  sponsor?: string | string[];
  ticketing?: string[];
}
