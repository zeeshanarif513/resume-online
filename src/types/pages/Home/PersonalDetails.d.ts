export interface PersonalDetailsDto {
    name: string;
    email: string;
    phone: string;
    linkedin: string;
    address: string;
  }
  export interface PersonalDetailsSectionProps {
    initialDetails?: PersonalDetails;
    onSave: (PersonalDetails) => void;
}