import react from "react";
import styles from "./Form.module.css";
import Paragraph from "../Paragraph/Paragraph";
import Label from "../Label/Label";
import Input from "../Input/Input";
import Button from "../Button/Button";
import { useFormContext } from "../../pages";

export default function Form() {
  const { playerName, handleSubmit, handleChange } = useFormContext();

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <Paragraph>New player</Paragraph>
      <Label htmlFor="playerName">
        <Input
          name="playerName"
          id="playerName"
          value={playerName}
          onChange={handleChange}
        ></Input>
      </Label>
      <Button type="submit">Add student</Button>
    </form>
  );
}
