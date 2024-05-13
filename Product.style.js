import {Dimensions,StyleSheet} from 'react-native';

export default StyleSheet.create({
    container:{
        backgroundColor:'#eceff1',
        margin: 5,
        borderRadius:10,
    },
    image:{height: Dimensions.get('window').height/3,
            width: Dimensions.get('window').width/2-40,
            borderTopLeftRadius:10,
            borderTopRightRadius:10,
            borderRadius:5,
            margin:13,
            padding:13,
    },
    title:{
        fontSize:20,
        fontFamily:"Nunito",
        fontWeight:"bold",
        color:"black",
        width:180,
    },
    inner_container:{
        padding:5,
        backgroundColor:'#eceff1',
    },
    price:{
        fontStyle:'normal',
        margin:3,
        padding:1,
    },
    outOfStock: {
        color: 'red',
        fontSize: 14,
        fontWeight: 'bold',
    },

});