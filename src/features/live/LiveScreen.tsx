// import { View, Text , Image} from 'react-native'
// import React from 'react'
// import { emptyStyles } from '@unistyles/emptyStyles'

// const LiveScreen = () => {

//   return (
//     <View style={emptyStyles.container(false)}>
//       <Image source={require('@assets/images/coming_soon3.png')}
//       style={emptyStyles.emptyImage}
//       />
//     </View>
//   )
// }

// export default LiveScreen;




import { View, Image } from 'react-native';
import React from 'react';
import { emptyStyles } from '@unistyles/emptyStyles';
import { defaultTheme } from '@unistyles/unistyles';

const { colors } = defaultTheme;

const LiveScreen = () => {
  const isLive = true;

  return (
    <View
      style={[
        emptyStyles.container,
        { backgroundColor: isLive ? '#000' : colors.background },
      ]}
    >
      <Image
        source={require('@assets/images/coming_soon2.jpg')}
        style={emptyStyles.emptyImage}
      />
    </View>
  );
};

export default LiveScreen;
