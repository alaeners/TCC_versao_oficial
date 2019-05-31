import { QuestionOption } from './QuestionOption';

export interface Question {
    desc: string;
    option: Array<QuestionOption>;
}