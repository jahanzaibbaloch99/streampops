import React from 'react';
import {View, Text, Image, TouchableOpacity, ScrollView} from 'react-native';
import images from '../assets/images';

const CastBlog = () => {
  return (
    <View style={{flex: 1, backgroundColor: '#131313'}}>
      <ScrollView>
        <View
          style={{
            backgroundColor: '#fff',
            borderRadius: 5,
            paddingVertical: 8,
            marginHorizontal: 8,
            marginBottom: 28,
            marginVertical: 16,
          }}>
          <View style={{flex: 1}}>
            <View style={{flexDirection: 'row', marginHorizontal: 8}}>
              <View style={{width: 136, height: 179}}>
                <Image
                  source={images.emmaProfile2}
                  style={{
                    width: undefined,
                    height: undefined,
                    flex: 1,
                    borderRadius: 5,
                  }}
                />
              </View>
              <View
                style={{
                  flex: 1,
                  backgroundColor: '#EDEDED',
                  borderRadius: 4,
                  paddingLeft: 8,
                  paddingVertical: 17,
                  marginHorizontal: 8,
                }}>
                <View style={{marginBottom: 8}}>
                  <Text style={{fontSize: 17, color: '#1B1B1B'}}>
                    Emma Watson
                  </Text>
                </View>
                <View style={{marginBottom: 8}}>
                  <Text style={{fontSize: 15, color: '#1B1B1B'}}>
                    Birth date: april 15, 1990 (32 years)
                  </Text>
                </View>
                <View style={{marginBottom: 8}}>
                  <Text style={{fontSize: 15, color: '#1B1B1B'}}>
                    Nationality: British
                  </Text>
                </View>
                <View style={{paddingRight: 8}}>
                  <Text style={{fontSize: 15, color: '#1B1B1B'}}>
                    Occupation: Actress, Model and activist
                  </Text>
                </View>
              </View>
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginRight: 8,
                marginVertical: 8,
              }}>
              <View style={{alignItems: 'center'}}>
                <View style={{marginHorizontal: 8}}>
                  <Text style={{color: '#1B1B1B', fontSize: 15, lineHeight:25}}>
                    Emma Charlotte Duerre Watson (Paris, 15 de abril de 1990) ??
                    uma atriz, modelo e ativista brit??nica nascida na Fran??a,
                    conhecida mundialmente por ter atuado na s??rie de filmes
                    Harry Potter, que serviram como adapta????o para o cinema da
                    s??rie de livros hom??nima da escritora J. K. Rowling. Watson
                    foi escolhida para interpretar Hermione aos dez anos de
                    idade, sem nunca antes ter atuado profissionalmente, tendo
                    atuado apenas em pe??as de teatro da sua escola. Por seu
                    trabalho em Harry Potter, ela recebeu diversos pr??mios e
                    ganhou mais de 26 milh??es de libras esterlinas. Em busca de
                    outros projetos para se firmar como atriz, Watson fez seu
                    primeiro trabalho fora da s??rie Harry Potter no telefilme
                    Ballet Shoes (2007), que obteve uma audi??ncia de 5,2 milh??es
                    de espectadores durante sua exibi????o original no canal BBC
                    One.
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default CastBlog;
