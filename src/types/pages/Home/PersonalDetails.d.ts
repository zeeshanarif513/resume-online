export interface PersonalDetailsDto {
    name: string;
    email: string;
    phone: string;
    linkedin: string;
    address: string;
  }
  export interface PersonalDetailsSectionProps {
    isEditMode: boolean;
    personalInfo?: PersonalDetails;
    onSave: (PersonalDetails) => void;
}