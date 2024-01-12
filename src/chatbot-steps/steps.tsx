import React from "react";
import LanguageChoiceBox from "../components/LanguageChoiceBox";

const InterviewPreparator = () => {
  const [language, setLanguage] = React.useState<string>("");
  const [mail, setMail] = React.useState<string>("");

  let steps: Array<StepObject> = [
    {
      id: "0",
      message: "Welcome to Interview Preparator, Please select your language",
      trigger: "1",
    },
    {
      id: "1",
      component: (
        <LanguageChoiceBox nextId="2" state={language} setState={setLanguage} />
      ),
      waitAction: true,
    },
    {
      id: "2",
      message:
        "We will send your {previousValue} interview questions to mail, Please input your mail address",
      trigger: "3",
    },
    {
      id: "3",
      user: true,
      validator: (value) => {
        if (/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(value)) {
          setMail(value);
          return true;
        } else {
          return "Entered mail address is not valid!!!";
        }
      },
      trigger: "4",
    },
    {
      id: "4",
      message: "Ok Thanks.",
      end: true,
    },
  ];

  return { steps, language, mail };
};

export default InterviewPreparator;

export interface StepObject {
  id: string;
  message?: string;
  trigger?: string;
  end?: boolean;
  component?: React.JSX.Element;
  waitAction?: boolean;
  user?: boolean;
  validator?: Function;
}
