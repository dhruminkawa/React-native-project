import { View, Text } from 'react-native'
import React, { FC } from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons'
import MaterialIcons from '@react-native-vector-icons/material-icons';

interface IconProps {
    color?:string;
    size:number;
    name:string;
    iconFamily: 'Ionicons' | 'MaterialIcons';
}

const Icon: FC<IconProps> = ({color,size,name,iconFamily}) =>{
    return (
         <>
          {iconFamily === 'Ionicons' && (
            <Ionicons name={name} size={size} color={color} />
          )}
          {iconFamily === 'MaterialIcons' && (
            <MaterialIcons name={name} size={size} color={color} />
          )}
         </>
   
  )
}

export default Icon



// import React, { FC } from 'react';
// import Ionicons from '@react-native-vector-icons/ionicons';
// import MaterialIcons from '@react-native-vector-icons/material-icons';

// interface IconProps {
//   color?: string;
//   size: number;
//   name: string;
//   iconFamily: 'Ionicons' | 'MaterialIcons';
// }

// const Icon: FC<IconProps> = ({ color, size, name, iconFamily }) => {
//   if (iconFamily === 'Ionicons') {
//     return <Ionicons name={name} size={size} color={color} />;
//   }

//   if (iconFamily === 'MaterialIcons') {
//     return <MaterialIcons name={name} size={size} color={color} />;
//   }

//   return null;
// };

// export default Icon;
