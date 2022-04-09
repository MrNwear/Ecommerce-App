import { StyleSheet } from "react-native";

const ButtonColor = "black";
const TextColor = "white";
const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: ButtonColor,
    shadowColor: ButtonColor,
    borderColor: ButtonColor,
    borderRadius: 5,
    borderWidth: 1,
    padding: 7, width: '100%',
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    color: TextColor,
    fontWeight: "bold",
  },
});
export default styles;
