import React, { Component } from 'react'
import { 
    View, 
    Image, 
    Text, 
    StyleSheet, 
    Dimensions, 
    TouchableOpacity 
} from 'react-native'

const styles = {
    commonHeader : {
        paddingTop: 20, 
        height: 62, 
        alignItems : "center", 
        justifyContent : "center", 
        backgroundColor : "#fff", 
        borderBottomWidth: 0.5, 
        borderBottomColor : "#ccc"
    }
}

/**
 * Bu komponent bütün ekranların en tepesindeki instagram logosunun olduğu header alanıdır.
 * Genel dizayn tasarlanırken ana amaç ortak olan kısımları komponent haline getirmektir 
 * böylece hem daha az kod yazılmış olur hem de müdahale etmek gerektiği zaman tek bir
 * noktada müdahale edilebilir.
 */
export default class CommonHeader extends Component {

    render() {
        return <View style={styles.commonHeader}>
            <Image source={require("../images/Instagram_logo.svg.png")} style={{width: 120, height : 36}} />
        </View>
    }
}