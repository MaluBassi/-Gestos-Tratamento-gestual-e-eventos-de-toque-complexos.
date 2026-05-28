import React, {useState} from 'react';
import {View, FlatList, Text, StyleSheet} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import TarefaItem from './components/TarefaItem';

export default function App() {
  const [tarefas, setTarefas] = useState ([
    {id: '1', nome: 'Comprar ingredientes para o jantar'},
    {id: '2', nome: 'Finalizar curso de Gestos'},
    {id: '3', nome: 'Lavar o carro'},
  ]);

  const excluirTarefa = (id: string) => {
    setTarefas (tarefas.filter (t => t.id !== id));
  };

  return (
    <SafeAreaView style={styles.safe}>
      <View style={styles.header}>
        <Text style={styles.title}>Minhas Tarefas</Text>
        <Text style={styles.subtitle}>Arraste para o lado para excluir ➡️</Text>
      </View>

      <FlatList data={tarefas} keyExtractor={item => item.id} renderItem={({item}) => (
        <TarefaItem titulo={item.nome} onDelete={() => excluirTarefa (item.id)} />
      )} 
      ListEmptyComponent={<Text style={styles.empty}>Tudo limpo por aqui! 🌟</Text>}
      />
      </SafeAreaView>
  );
}

const styles = StyleSheet.create ({
  safe: { flex: 1, backgroundColor: '#f4f4f9'},
  header: {padding: 20,
    backgroundColor: 'white', borderBottomWidth:1,
    borderColor: '#ddd'},
  title: { fontSize: 28, fontWeight: 'bold', color: '#lalala'},
  subtitle: { fontSize: 14, color: '#888', marginTop: 4},
  empty: { textAlign: 'center', marginTop: 50, fontSize: 16, color: '#aaa'},
});