import react from "react";
import { FlatList , StyleSheet, View} from "react-native";

export default function Cesta(itens){
    <FlatList>
        data={itens.lista}
        renderItem={item}
        keyExtractor={({nome})=>nome}
            ListHeadercomponent={()=>{
                return <>
                
                       </>
            }}
    </FlatList>
}

const estilos = StyleSheet.create({
    titulo:{
    color:"#464646",
    frontWeight:"bold",
    marginTop:32,
    marginBottom:8,
    fontSize:20;
    LineHeight:32,
},
cesta:{
    paddingVertical:8,
    paddingHorizontal:16,
}
})