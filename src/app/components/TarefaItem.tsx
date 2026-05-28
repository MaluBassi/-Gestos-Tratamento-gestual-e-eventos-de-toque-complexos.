import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import ReanimatedSwipeable from 'react-native-gesture-handler/Swipeable';
import {Ionicons} from '@expo/vector-icons';

interface Props {
    titulo: string;
    onDelete: () => void;
}

export default function TarefaItem({titulo, onDelete}: Props) {
    const RenderRightActions = () => {
        return (
            <TouchableOpacity style={styles.deleteButton} onPress={onDelete}>
                <Ionicons name="trash-outline" size={24} color="white" />
                <Text style={styles.deleteText}>Excluir</Text>
            </TouchableOpacity>
        );
    };

    return (
        <ReanimatedSwipeable renderRightActions={RenderRightActions} friction={2} enableTrackpadTwoFingerGesture>
            <View style={styles.container}>
                <Text style={styles.itemText}>{titulo}</Text>
                <Ionicons name="reorder-two-outline" size={20} color="#ccc" />
            </View>
        </ReanimatedSwipeable>
    );
}

const styles = StyleSheet.create ({
    container: {
        backgroundColor: 'white',
        padding: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderBottomColor: '#eee',
    },
    itemText: {
        fontSize: 16,
        color: '#333',
    },
    deleteButton: {
        backgroundColor: '#ff3b30',
        justifyContent: 'center', 
        alignItems: 'center',
        width: 100, 
        flexDirection: 'row',
    },
    deleteText: { 
        color: 'white',
        fontWeight: 'bold',
        marginLeft: 5
    }
});

