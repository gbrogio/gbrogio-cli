"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getQuestionsInfo = void 0;
function getQuestionsInfo(questions) {
    return questions.map(function (question) {
        var message = question.message;
        return {
            name: question.name,
            question: message.substring(0, message.length - 1),
        };
    });
}
exports.getQuestionsInfo = getQuestionsInfo;
//# sourceMappingURL=get-questions-info.js.map