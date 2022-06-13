import {View, Text, Image, ScrollView} from 'react-native';
import React from 'react';
import styles from './Style';
import Icon from 'react-native-vector-icons/AntDesign';
import Header from '../../Components/Header/Header';

const Sobre = () => {
  return (
    <View style={styles.container}>
      <ScrollView>
        <Header />
        <View
          style={{
            alignItems: 'center',
            borderBottomWidth: 2,
            borderBottomColor: '#fff',
            marginBottom: 20,
          }}>
          <Image
            source={{uri: 'https://picsum.photos/400/200'}}
            style={styles.imageBig}
          />
          <ScrollView style={{height: 250}}>
            <Text style={styles.txtSobre}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged.
            </Text>
            <Text style={styles.txtSobre}>
              It was popularised in the 1960s with the release of Letraset
              sheets containing Lorem Ipsum passages, and more recently with
              desktop publishing software like Aldus PageMaker including
              versions of Lorem Ipsum.
            </Text>
          </ScrollView>
        </View>
        <View>
          <View style={{flexDirection: 'row'}}>
            <Icon name="creditcard" size={20} color="#FFF" />
            <Text style={styles.txtNormal}>Formas de pagamento</Text>
          </View>
          <View style={{flexDirection: 'row', marginVertical: 10}}>
            <Image
              source={require('../../Images/Icons/visa.png')}
              style={styles.image}
            />
            <Image
              source={require('../../Images/Icons/maestro.png')}
              style={styles.image}
            />
            <Image
              source={require('../../Images/Icons/cirrus.png')}
              style={styles.image}
            />
            <Image
              source={require('../../Images/Icons/dinheiro.png')}
              style={styles.image}
            />
          </View>
        </View>
        <View>
          <View style={{flexDirection: 'row'}}>
            <Icon name="star" size={20} color="#FFF" />
            <Text style={styles.txtNormal}>Redes Sociais</Text>
          </View>
          <View style={{flexDirection: 'row', marginVertical: 10}}>
            <Icon name="instagram" size={30} color="#FFF" style={styles.icon} />
            <Icon
              name="facebook-square"
              size={30}
              color="#FFF"
              style={styles.icon}
            />
            <Icon name="youtube" size={30} color="#FFF" style={styles.icon} />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Sobre;
