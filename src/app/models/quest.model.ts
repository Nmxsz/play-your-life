export interface Quest {
  id: number;
  title: string;
  description: string;
  experienceReward: number;
  items: Items[];
  completed: boolean;
}

export interface Items {
  name: string;
  description: string;
}
