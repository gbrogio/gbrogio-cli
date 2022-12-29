import { Question } from '@services/commander';

export function getQuestionsInfo(questions: Question[]) {
  return questions.map((question) => {
    const message = question.message as string;
    return {
      name: question.name!,
      question: message.substring(0, message.length - 1),
    };
  });
}
