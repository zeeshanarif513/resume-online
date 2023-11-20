export interface Work {
    jobTitle: string;
    companyName: string;
    startDate: string;
    endDate: string;
  }



  export interface WorkHistoryProps {
    onAddWork: (work: Work) => void;
  }
  