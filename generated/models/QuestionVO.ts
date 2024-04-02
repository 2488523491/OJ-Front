import type { JudgeConfig } from "./JudgeConfig";
import type { UserVO } from "./UserVO";

export type QuestionVO = {
  acceptedNum?: number;
  content?: string;
  createTime?: string;
  favourNum?: number;
  id?: number;
  isDelete?: number;
  judgeConfig?: JudgeConfig;
  submitNum?: number;
  tags?: Array<string>;
  thumbNum?: number;
  title?: string;
  updateTime?: string;
  userId?: number;
  userVO?: UserVO;
};
