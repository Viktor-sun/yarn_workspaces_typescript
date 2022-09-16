import { memo } from "react";

interface IProps {
  name: string;
}

const Button = ({ name }: IProps) => (
  <button type="button" style={{ color: "green" }}>
    {name}
  </button>
);

export { Button };
