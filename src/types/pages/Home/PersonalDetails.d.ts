interface PersonalDetails {
    name: string;
    email: string;
    phone: string;
    linkedin: string;
    address: string;
  }
  
interface PersonalDetailsSectionProps {
    details: PersonalDetails;
    onChange: (field: keyof PersonalDetails, value: string) => void;
}