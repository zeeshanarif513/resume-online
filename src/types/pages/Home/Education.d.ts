interface EducationDetails {
    degree: string;
    completionDate: string;
}

interface EducationSectionProps {
    education: EducationDetails[];
    onAddEducation: () => void;
    onChange: (index: number, field: keyof EducationDetails, value: string) => void;
}