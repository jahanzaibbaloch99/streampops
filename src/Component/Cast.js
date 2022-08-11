import React, {useState} from 'react';
import {View, Text, TouchableOpacity, Image, FlatList} from 'react-native';
import images from '../assets/images';

const Cast = props => {
  const [tabView, setTabView] = useState('Cast');
  const data = [
    {
      img: images.actor1,
      realName: 'Danield Rad..',
      characterName: 'Harry Potter',
    },
    {
      img: images.actor2,
      realName: 'Rupert Grint',
      characterName: 'Ron Weasley',
    },
    {
      img: images.actor3,
      realName: 'Emma Watson',
      characterName: 'Hermione Gra...',
    },
    {
      img: images.actor4,
      realName: 'Robbie Coltr..',
      characterName: 'Rubeus Hagrid',
    },
    {img: images.actor5, realName: 'Tom Felton', characterName: 'Draco Malfoy'},
    {
      img: images.actor6,
      realName: 'Maggie Smith',
      characterName: 'Minerva McGo..',
    },
    {
      img: images.actor7,
      realName: 'Alan Rickman',
      characterName: 'Severus Snape',
    },
    {
      img: images.actor8,
      realName: 'Richard Harr..',
      characterName: 'Albus Dumble..',
    },
    {
      img: images.actor9,
      realName: 'Ralph Fiennes',
      characterName: 'Lord Voldemort',
    },
  ];
  return (
    <View style={{flex: 1, backgroundColor: '#000'}}>
      <View>
        <View style={{justifyContent:'center', alignItems:'center'}}>
          <FlatList
            numColumns={3}
            data={data}
            renderItem={data => {
              const {item} = data;
              return (
                <View >
                  <View
                    style={{
                      backgroundColor:'#fff',
                      borderRadius: 5,
                      justifyContent: 'center',
                      alignItems: 'center',
                      marginHorizontal: 10,
                      marginVertical:10,
                    }}>
                    <View style={{width: 115, height: 115}}>
                      <Image
                      resizeMode='stretch'
                        style={{width: undefined, height: undefined, flex: 1}}
                        source={item.img}
                      />
                    </View>
                    <View style={{alignItems:'center', marginVertical:4}}>
                      <Text style={{color: '#1B1B1B', fontSize: 15}}>
                        {item.realName}
                      </Text>
                      <Text style={{color: '#666666', fontSize: 14}}>
                        {item.characterName}
                      </Text>
                    </View>
                  </View>
                </View>
              );
            }}
          />
        </View>
      </View>
    </View>
  );
};

export default Cast;
