import {
  View,
  SafeAreaView,
  ScrollView,
  Image,
  Text,
  FlatList,
  Modal,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/AntDesign';
import Header from '../../Components/Header/Header';
import Card from '../../Components/Card/Card';
import styles from './style';
import ItemFeminino from '../../Assets/Item';
import ItemMasculino from '../../Assets/Item2';

const Home = ({navigation}) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [marca, setMarca] = useState();
  const [descricao, setDescricao] = useState();
  const [preco, setPreco] = useState();
  const [foto, setFoto] = useState('');

  var cards = ItemFeminino;
  var cardsMasc = ItemMasculino;

  const renderItem = ({item}) => {
    return (
      <Card
        marca={item.marca}
        descricao={item.descricao}
        preco={item.preco}
        foto={item.foto}
        onPress={() => {
          setDescricao(item.descricao);
          setMarca(item.marca);
          setPreco(item.preco);
          setFoto(item.foto);
          navigation.navigate('Produto', {
            descricao: item.descricao,
            marca: item.marca,
            preco: item.preco,
            foto: item.foto,
          });
          //   setModalVisible(true);
        }}
      />
    );
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <Header />
      <ScrollView>
        <TouchableOpacity style={{alignItems: 'center'}}>
          <Image
            source={require('../../Images/promocao.png')}
            style={styles.image}
          />
        </TouchableOpacity>
        <View style={{marginTop: 20}}>
          <Text style={styles.txtSub}>Moda Feminina</Text>
          <FlatList
            showsHorizontalScrollIndicator={false}
            style={styles.list}
            horizontal={true}
            data={cards}
            renderItem={renderItem}
          />
          <Text style={styles.txtSub}>Moda Maculina</Text>
          <FlatList
            showsHorizontalScrollIndicator={false}
            style={styles.list}
            horizontal={true}
            data={cardsMasc}
            renderItem={renderItem}
          />
        </View>
      </ScrollView>
      {/* *************** COMEÇO DO MODAL *************** */}
      {/* <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <TouchableOpacity
              style={styles.close}
              onPress={() => {
                setModalVisible(!modalVisible);
              }}>
              <Icon name="close" size={20} color="#FFF" />
            </TouchableOpacity>
            <Image source={{uri: foto}} style={styles.modalImage} />
            <Text style={styles.modalMarca}>{marca}</Text>
            <Text style={styles.modalText}>{descricao}</Text>
            <Text style={styles.modalPreco}>R$ {preco}</Text>
          </View>
        </View>
      </Modal> */}
      {/* *************** FIM DO MODAL *************** */}
    </SafeAreaView>
  );
};

export default Home;
