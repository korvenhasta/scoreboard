import react from "react";
import styles from "./Form.module.css";
import Paragraph from "../Paragraph/Paragraph";
import Label from "../Label/Label";
import Input from "../Input/Input";
import Button from "../Button/Button";

export default function Form(props) {
  return (
    <form className={styles.form} onSubmit={props.handleSubmit}>
      <Paragraph>New player</Paragraph>
      <Label htmlFor="playerName">
        <Input
          name="playerName"
          id="playerName"
          value={props.playerName}
          onChange={props.handleChange}
        ></Input>
      </Label>
      <Button type="submit">Add student</Button>
    </form>
  );
}
