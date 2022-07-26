import React from 'react';
import { View, StyleSheet, Alert } from 'react-native';
import { Chip } from 'react-native-paper';

const ChipExample = () => {
return (
	<View>
	<View style={styles.chip}>
		<Chip
		icon="information"
		mode="flat"
		onPress={() => Alert.alert('Information chip pressed')}>
		Information
		</Chip>
	</View>
	<View style={styles.chip}>
		<Chip icon="forward" mode="outlined">
		Forward{' '}
		</Chip>
	</View>
	<View style={styles.chip}>
		<Chip icon="heart" mode="outlined" selectedColor="red">
		Favourites
		</Chip>
	</View>
	<View style={styles.chip}>
		<Chip disabled>Simple(disabled)</Chip>
	</View>
	</View>
);
};

export default ChipExample;

const styles = StyleSheet.create({
chip: {
	width: 120,
	marginLeft: 20,
	marginTop: 20,
	marginBottom: 10,
},
});
