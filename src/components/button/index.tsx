import {
  TouchableOpacity,
  TouchableOpacityProps,
  View,
  Text,
} from "react-native";

import { styles } from "./styles";

type Props = TouchableOpacityProps & {
  title: string;
  style?: any;
  textStyle?: any;
};

export default function Button({ title, style, textStyle, ...rest }: Props) {
  return (
    <View>
      <TouchableOpacity
        activeOpacity={0.8}
        style={[styles.button, style]}
        {...rest}
      >
        <Text style={[styles.title, textStyle]}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
}
