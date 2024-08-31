
interface Page {
  name: string;
}

export interface AppInfo {
  name: string;
  pages: {
    [key: number]: Page;
  };
}
