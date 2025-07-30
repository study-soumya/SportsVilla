import React, { useEffect, useRef } from 'react';
import { TouchableOpacity, Text, Animated, View, StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { MAIN_GRADIENT_COLORS, MAIN_GRADIENT_START, MAIN_GRADIENT_END } from '../constants/gradient';

const AnimatedLinearGradient = Animated.createAnimatedComponent(LinearGradient);

export default function AnimatedGradientButton({
  selected,
  onPress,
  children,
  style,
  textStyle,
  icon,
}) {
  const anim = useRef(new Animated.Value(selected ? 1 : 0)).current;

  useEffect(() => {
    Animated.timing(anim, {
      toValue: selected ? 1 : 0,
      duration: 250,
      useNativeDriver: false,
    }).start();
  }, [selected]);

  // Interpolate background and text/icon color
  const bgColor = anim.interpolate({
    inputRange: [0, 1],
    outputRange: ['#d1001c', '#fff'],
  });

  const textColor = anim.interpolate({
    inputRange: [0, 1],
    outputRange: ['#fff', '#d1001c'],
  });

  return (
    <TouchableOpacity onPress={onPress} activeOpacity={0.85} style={style}>
      {selected ? (
        <Animated.View
          style={[
            styles.animatedBtn,
            { backgroundColor: bgColor, borderWidth: 1, borderColor: '#d1001c' },
          ]}
        >
          {icon &&
            React.cloneElement(icon, {
              color: textColor,
            })}
          <Animated.Text style={[styles.animatedText, textStyle, { color: textColor }]}>
            {children}
          </Animated.Text>
        </Animated.View>
      ) : (
        <AnimatedLinearGradient
          colors={MAIN_GRADIENT_COLORS}
          start={MAIN_GRADIENT_START}
          end={MAIN_GRADIENT_END}
          style={styles.animatedBtn}
        >
          {icon &&
            React.cloneElement(icon, {
              color: '#fff',
            })}
          <Text style={[styles.animatedText, textStyle, { color: '#fff' }]}>{children}</Text>
        </AnimatedLinearGradient>
      )}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  animatedBtn: {
    paddingHorizontal: 18,
    paddingVertical: 8,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  animatedText: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 15,
    letterSpacing: 0.5,
  },
});