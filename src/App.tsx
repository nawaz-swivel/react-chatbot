import "./App.css";
import ChatBot from "react-simple-chatbot";
import InterviewPreparator from "./chatbot-steps/steps";
import React from "react";
import axios from "axios";

async function sendEmail(language: string, mail: string) {
  const response = await axios.post(
    "https://api.emailjs.com/api/v1.0/email/send",
    {
      service_id: "service_vlp9zrf",
      template_id: "template_s036wca",
      user_id: "rXKrraRPFrbQjwwlw",
      template_params: {
        to_mail: mail,
        from_name: "Interview Preparator",
        message:
          language == "Java"
            ? "Here is your Java interview questions link, https://www.simplilearn.com/tutorials/java-tutorial/java-interview-questions"
            : "Here is your React interview questions link, https://www.edureka.co/blog/interview-questions/react-interview-questions/",
      },
    },
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  if (response.status == 200) {
    window.alert("your mail is sent");
  } else {
    window.alert("error while sending email");
  }
}

const App: React.FC = () => {
  const { steps, language, mail } = InterviewPreparator();

  React.useEffect(() => {
    if (language !== "" && mail !== "") {
      sendEmail(language, mail);
    }
  }, [mail]);

  return (
    <>
      <ChatBot steps={steps} />
    </>
  );
};

export default App;
