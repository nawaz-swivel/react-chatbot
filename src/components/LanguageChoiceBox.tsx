import React from "react";

export default function LanguageChoiceBox(props: Props) {
  const { triggerNextStep, nextId, state, setState } = props;

  return (
    <>
      <span>
        <button
          onClick={() => {
            triggerNextStep({
              value: "Java",
              trigger: nextId,
            });
            setState("Java");
          }}
        >
          Java
        </button>
        <button
          onClick={() => {
            triggerNextStep({
              value: "React",
              trigger: nextId,
            });
            setState("React");
          }}
        >
          React
        </button>
      </span>
    </>
  );
}

interface Props {
  triggerNextStep: (value: { value?: string; trigger: string }) => void;
  nextId: string;
  state: string;
  setState: React.Dispatch<React.SetStateAction<string>>;
}
