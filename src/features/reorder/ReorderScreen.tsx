// import { View, Text , Image} from 'react-native'
// import React from 'react'
// import { emptyStyles } from '@unistyles/emptyStyles'

// const ReorderScreen = () => {

//   return (
//     <View style={emptyStyles.container(false)}>
//       <Image source={require('@assets/images/coming_soon3.png')}
//       style={emptyStyles.emptyImage}
//       />
//     </View>
//   )
// }

// export default ReorderScreen;



import { View, Image } from 'react-native';
import React from 'react';
import { emptyStyles } from '@unistyles/emptyStyles';
import { defaultTheme } from '@unistyles/unistyles';

const { colors } = defaultTheme;

const ReorderScreen = () => {
  const isLive = false;

  return (
    <View
      style={[
        emptyStyles.container,
        { backgroundColor: isLive ? '#000' : colors.background },
      ]}
    >
      <Image
        source={require('@assets/images/coming_soon3.png')}
        style={emptyStyles.emptyImage}
      />
    </View>
  );
};

export default ReorderScreen;
