export type PageProps = {
  onNextClick?: () => void;
  buttonText?: string;
};

export type ReactQuestions={
  id:number
  question:string,
  options: string[],
  correctAnswer:number
}

export type Player={
  name:string,
  score:number
}