import Animated, {
	useSharedValue,
	withTiming,
	useAnimatedStyle,
	Easing,
} from 'react-native-reanimated';
import { View, Button } from 'react-native';
import React from 'react';

export default function AnimatedStyleUpdateExample(props) {
	const randomWidth = useSharedValue(10);

	const config = {
		duration: 500,
		easing: Easing.bezier(0.5, 0.01, 0, 1),
	};

	const style = useAnimatedStyle(() => {
		freezed; // <-- here's the enemy
		return {
			width: withTiming(randomWidth.value, config),
		};
	});

	return (
		<View>
			<Animated.View
				style={[
					{ width: 100, height: 80, backgroundColor: 'black', margin: 30 },
					style,
				]}
			/>
			<Button
				title="toggle"
				onPress={() => {
					randomWidth.value = Math.random() * 350;
				}}
			/>
		</View>
	);
}

const freezed = Object.freeze({});