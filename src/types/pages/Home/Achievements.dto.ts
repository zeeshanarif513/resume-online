export interface Achievement {
    title: string;
    description: string
  }



  export interface AchievementsProps {
    onAddAchievement: (achievement: Achievement) => void;
  }
  