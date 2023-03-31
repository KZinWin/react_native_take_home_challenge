import { StyleSheet } from "react-native";
import { black, blue, theme_grey_color, white, yellow } from "./Common";

const Styles = StyleSheet.create({

    PrimaryBgColor: {
        backgroundColor: theme_grey_color
    },

    h1: {
        fontSize: 26,
        fontWeight: 'bold',
        color: black
    },

    form: {
        width: '100%',
        height: '60%',
        alignContent: 'center',
        justifyContent: 'center',
    },

    textInput: {
        borderWidth: 0,
        borderBottomWidth: 1,
        borderBottomColor: black,
        width: '80%',
        margin: 20,
        fontSize: 20
    },

    yellowBtn: {
        elevation: 6,
        backgroundColor: yellow,
        borderRadius: 30,
        padding: 12,
        width: '50%',
        alignSelf: "center",
        alignItems: 'center'
    },

    BlackBtn: {
        elevation: 6,
        backgroundColor: black,
        color: white,
        borderRadius: 30,
        padding: 12,
        width: '50%',
        alignSelf: "center",
        alignItems: 'center'
    },

    btnText: {
        color: black,
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: "center",
    },

    // login Card
    loginCard: {
        borderTopStartRadius: 20,
        borderTopEndRadius: 20,
        backgroundColor: white,
        shadowColor: black,
        shadowOffset: 2,
        flex: 1.5,
        padding: 20
    },

    headerLogo: {
        width: 50,
        height: 50,
        resizeMode: 'contain',
        alignSelf:'center',
        marginRight: 30
    },

    filterInput:{
        backgroundColor: white,
        elevation: 3,
        borderRadius: 20,
        marginVertical: 10,
        textAlign: "center"
    },
    filterContainer:{
        // marginTop: 30,
        marginBottom: 100,
        paddingHorizontal: 20
    },

    container: {
        backgroundColor:theme_grey_color,
    },
    
    card: {
        height:450,
        alignItems: 'center'
    },

    cardImage: {
        width:'100%',   
        height: '80%',     
        resizeMode: 'contain',
        marginTop: -80
    },
    detailContainer: {
        backgroundColor: white,
        borderRadius: 20,
        shadowColor: black,
        width: '80%',
        height: 300,
        alignItems: "center",
    },
    cardName:{
        fontSize: 25,
        fontWeight: "bold",
    },
    rarityText: {
        fontSize: 20,
        color: blue
    },
    cardRowText:{
        fontSize: 22 ,
        marginHorizontal: 10
    },

    CartItemContainer:{
        flex:1,
        flexDirection: 'row',
        padding: 10,
        height: 200
    },

    CartDetailImage: {
        flex:1,
        width: '100%',
        height: '100%',
        resizeMode: 'contain'
    },

    itemPrice: {
        fontSize: 17,
        marginBottom: 15
    },

    itemTotal: {
        marginTop: 10,
        fontSize: 20
    }

})

export default Styles;