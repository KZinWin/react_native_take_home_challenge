import { Image, View } from "react-native";
import { white } from "../essential/components/Common";
import Styles from "../essential/components/Styles";

const LogoTitle = () => {
    return (
        <View style={{ flex: 1, alignItems: 'center', textAlign: 'center' }}>
            <Image source={require('../essential/asset/pokemon.png')} style={Styles.headerLogo} />
        </View>
    )

}

export default LogoTitle;