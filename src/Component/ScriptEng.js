import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

const ScriptEng = () => {
  return (
    <View style={{flex: 1, backgroundColor: '#1B1B1B'}}>
      <View
        style={{
          backgroundColor: '#1B1B1B',
          flexDirection: 'row',
          justifyContent: 'center',
          paddingVertical: 15,
        }}>
        <TouchableOpacity style={{marginRight: 16}}>
          <Text style={{color: '#fff'}}>Eng</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            borderLeftWidth: 1,
            borderColor: 'white',
            marginRight: 16,
            paddingLeft: 16,
          }}>
          <Text style={{color: '#fff'}}>Spa</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            borderLeftWidth: 1,
            borderColor: 'white',
            marginRight: 16,
            paddingLeft: 16,
          }}>
          <Text style={{color: '#fff'}}>Fre</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            borderLeftWidth: 1,
            borderColor: 'white',
            marginRight: 16,
            paddingLeft: 16,
          }}>
          <Text style={{color: '#fff'}}>Chi</Text>
        </TouchableOpacity>
      </View>
      <View>
        <View
          style={{
            backgroundColor: '#FDFDFD',
            paddingVertical: 8,
            paddingRight:20,
            paddingLeft:8,
            marginHorizontal: 8,
            borderRadius: 4,
          }}>
          <Text style={{lineHeight:22}}>
            Oliver: Quidditch is easy enough to understand. Each time has seven
            players, 3 chasers, 2 beaters, 1 keeper and a seeker. That's you.
            There are three kinds of balls.This one's called the Quaffle. Now,
            the chasers handle the Quaffle and try to put it through one of
            those three hoops. The keeper, that's me, defends the hoops. With me
            so far?
          </Text>
          <View style={{marginVertical:16}}>
          <Text style={{lineHeight:22}}>Harry: I think so. What are those?</Text>
          </View>
          <Text style={{lineHeight:22}}>
            Oliver: You better take this. Careful now, it's comin' back. Eh, not
            bad, Potter, you'd make a fair beater... Uh-oh.
          </Text>
          <View style={{marginVertical:16}}>
          <Text style={{lineHeight:22}}>Harry: What is that?</Text>
          </View>
          <Text style={{lineHeight:22}}>
            Oliver: Bludger. Nasty little buggers. But you are the seeker, and
            the only thing I want you to worry about is this... the Golden
            Snitch.
          </Text>
          <View style={{marginVertical:16}}>
          <Text style={{lineHeight:22}}>Harry: I like this ball. </Text>
          </View>
          <Text style={{lineHeight:22}}>
            Oliver: Ah, you like it now. Just wait. It's wicked fast and damn
            near impossible to see.
          </Text>
          <View style={{marginVertical:16}}>
          <Text style={{lineHeight:22}}>Harry: What do I do with it?</Text>
          </View>
          <Text style={{lineHeight:22}}>
            Oliver: You catch it... before the other team's seeker. You catch
            this, the game is over. You catch this, Potter, and we win.
          </Text>
        </View>
      </View>
    </View>
  );
};

export default ScriptEng;
