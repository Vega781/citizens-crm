import { Users, Phone, GraduationCap, Heart, Briefcase, Home, MessageCircle } from 'lucide-react';
import { CitizenContacts } from '../ui/CitizenContacts';
import { CitizenPersonal } from '../ui/CitizenPersonal';
import { CitizenEducation } from '../ui/CitizenEducation';
import { CitizenFamily } from '../ui/CitizenFamily';
import { CitizenWork } from '../ui/CitizenWork';
import { CitizenDocuments } from '../ui/CitizenDocuments';
import { CitizenAppeals } from '../ui/CitizenAppeals';

export const tabs = [
    { id: 'personal', name: 'Личные данные', icon: Users },
    { id: 'contact', name: 'Контакты', icon: Phone },
    { id: 'education', name: 'Образование', icon: GraduationCap },
    { id: 'family', name: 'Семья', icon: Heart },
    { id: 'work', name: 'Работа', icon: Briefcase },
    { id: 'documents', name: 'Документы', icon: Home },
    { id: 'appeals', name: 'Обращения', icon: MessageCircle }
];

export const tabComponents = {
    personal: CitizenPersonal,
    contact: CitizenContacts,
    education: CitizenEducation,
    family: CitizenFamily,
    work: CitizenWork,
    documents: CitizenDocuments,
    appeals: CitizenAppeals
}