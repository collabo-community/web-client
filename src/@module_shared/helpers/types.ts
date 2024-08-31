// types.ts
interface Page {
    name: string;
    route: string;
  }
  
export interface AppInfo {
    id: number;
    name: string;
    pages: {
      [key: number]: Page;
    };
  }
  