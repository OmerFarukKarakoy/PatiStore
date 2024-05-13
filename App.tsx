import React from 'react';
import { SafeAreaView, Text, StyleSheet, FlatList, Image, Dimensions, TextInput, ImageBackground } from 'react-native';
import product_data from './product_data.json';
import Product from './components/Product.js'
function App() {
    const renderProduct = ({ item }: { item: any }) => <Product product={item} />;
    const [text, onChangeText] = React.useState('Ara...') ;
    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.headerText}>PATIKASTORE</Text>
            
            <TextInput
                style={styles.input}
                onChangeText={onChangeText}
                value={text}
            />
            <FlatList
               keyExtractor={(item) => item.u_id.toString()}
                data={product_data}
                renderItem={renderProduct}
                numColumns={2}

            />


        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',

    },

    headerText: {
        fontWeight: 'bold',
        fontSize: 50,
        color: 'purple',
        backgroundColor: 'eceff1',
        margin:7,
        padding:7,
    },
    input: {
        height: 45,
        backgroundColor: '#eceff1',
        marginBottom: 10,
        paddingHorizontal: 10,
        borderRadius:10,
        padding:10,
        margin:10,
    },
    search_input: {
        backgroundColor: "#eceff1",
        borderRadius: 10,
        padding: 10,
        fontSize: 18,
        margin:10,
      },

})
export default App;
