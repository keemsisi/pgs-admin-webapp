import {PreviewAnswers} from "./preview-answers";
import {PreviewOptions} from "./preview-options";
import {PreviewGroup} from "./preview-group";
export class PreviewQuestion {

  question :string ;
  questionId :string;
  formId :string;
  questionNumber :string;
  groupType :number;
  blockCount :number;
  answers : PreviewAnswers;
  options: PreviewOptions[];
  groups : PreviewGroup[];
  order : number;
}
