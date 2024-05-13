import React from 'react';
import {View, Text, Image, Price} from 'react-native';
import styles from './Product.style';

const NewsCard = ({news}) => {
    return(
        <View style={styles.container}>
            <Image style={styles.image} source={{uri:news.imageUrl}} />
            <View style={styles.inner_container}>
                <Text style={styles.title}>{news.title}</Text>
                <Text style={styles.price}>{news.price}</Text>
                {!news.inStock && <Text style={styles.outOfStock}>STOKTA YOK</Text>}
            </View>
        </View>
    );
};

export default NewsCard;