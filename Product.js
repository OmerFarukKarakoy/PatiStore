import React from 'react';
import {View, Text, Image, Price} from 'react-native';
import styles from './Product.style';

const Product = ({product}) => {
    return(
        <View style={styles.container}>
            <Image style={styles.image} source={{uri:product.imageUrl}} />
            <View style={styles.inner_container}>
                <Text style={styles.title}>{product.title}</Text>
                <Text style={styles.price}>{product.price}</Text>
                {!product.inStock && <Text style={styles.outOfStock}>STOKTA YOK</Text>}
            </View>
        </View>
    );
};

export default Product;
