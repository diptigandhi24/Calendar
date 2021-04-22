import ButtonGroup from "@material-ui/core/ButtonGroup";
import Button from "@material-ui/core/Button";
import { Week } from "../types";
interface DisplayMonthProps {
  month: string;
  handleNavigator: (navigator: Week) => void;
}
export default function DisplayMonth({
  month,
  handleNavigator,
}: DisplayMonthProps) {
  return (
    <ButtonGroup disableElevation variant="contained" color="primary">
      <Button onClick={() => handleNavigator(Week.PREV_WEEK)}>&lt;</Button>
      <Button onClick={() => handleNavigator(Week.NEXT_WEEK)}>&gt;</Button>
      <p>{month}</p>
    </ButtonGroup>
  );
}
