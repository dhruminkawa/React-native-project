import {
  Modal,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { forwardRef, useImperativeHandle, useState } from 'react';
import { screenHeight } from '@unistyles/Constants';
import { BlurView } from '@react-native-community/blur';
import Icon from '@components/global/Icon';
 
type CustomModalRef = {
  openModal: (data: React.ReactNode) => void;
  closeModal: () => void;
};
 
const CustomModal = forwardRef<CustomModalRef, {}>((props, ref) => {
  const [visible, setVisible] = useState(false);
  const [content, setContent] = useState<React.ReactNode | null>(null);
 
  useImperativeHandle(ref, () => ({
    openModal: (data: React.ReactNode) => {
      setContent(data);
      setVisible(true);
    },
    closeModal: () => {
      setVisible(false);
    },
  }));
 
  return (
    <Modal
      transparent
      visible={visible}
      animationType="slide"           // gives nice bottom-up feel
      onRequestClose={() => setVisible(false)}
      statusBarTranslucent           // Android: lets blur go under status bar
      hardwareAccelerated            // can help performance on Android
    >
      {/* Blur backdrop — covers entire screen */}
      <BlurView
        style={styles.blurBackdrop}
        blurType={Platform.OS === 'ios' ? 'light' : 'dark'}   // dark often looks better on Android
        blurAmount={Platform.OS === 'ios' ? 10 : 25}          // Android clamps ~16–32
     
      />
 
      {/* Content wrapper — on top of blur */}
      <View style={styles.modalContent}>
        <View style={styles.sheetContainer}>
          {/* Floating close button above the sheet */}
          <TouchableOpacity
            style={styles.closeButton}
            onPress={() => setVisible(false)}
          >
            <Icon iconFamily="Ionicons" name="close" size={26} color="#fff" />
          </TouchableOpacity>
 
          {/* Your passed content (AddItem, RemoveItem, etc.) */}
          <View style={styles.innerContent}>
            {content ? (
              content
            ) : (
              <Text style={styles.placeholder}>No content provided</Text>
            )}
          </View>
        </View>
      </View>
    </Modal>
  );
});
 
export default CustomModal;
 
const styles = StyleSheet.create({
  blurBackdrop: {
    ...StyleSheet.absoluteFillObject,  
  },
  modalContent: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  sheetContainer: {
    width: '100%',
    backgroundColor: '#fff',
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    maxHeight: screenHeight * 0.75,
    minHeight: 200,
    overflow: 'hidden',
    alignItems: 'center',
    paddingTop: 40,                     
  },
  closeButton: {
    position: 'absolute',
    top: 12,
    alignSelf: 'center',
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 10,
  },
  innerContent: {
    width: '100%',
    flex: 1,
  },
  placeholder: {
    textAlign: 'center',
    color: '#888',
    fontSize: 16,
    padding: 40,
    fontFamily: 'Okra-Medium',
  },
});
 















// import { View, Text, Modal, TouchableOpacity, StyleSheet, Platform } from 'react-native'
// import React, { forwardRef, useImperativeHandle, useState } from 'react'
// import Icon from '@components/global/Icon';
// import { screenHeight } from '@unistyles/Constants';

// const CustomModal =  forwardRef((props, ref)) => {
//     const [visible,setVisible] = useState(false);
//     const [content,setContent] = useState(null);


//     useImperativeHandle(ref, ()=> ({
//         openModal: (data: any) => {
//             setContent(data);
//             setVisible(true);
//         },
//         closeModal: () => {
//             setVisible(false);
//         },
//     }));
//   return (

//     <Modal
//      transparent
//      visible={visible}
//      animationType="slide"
//      onRequestClose={() => setVisible(false)}>
//         <View style={styles.modalContainer}>
//             <View style={styles.contentContainer}>
//                 <TouchableOpacity
//                 style={StyleSheet.closeIcon}
//                 onPress={() => setVisible(false)}>
//                     <Icon iconFamily='Ionicons' name='close' size={24} color='#fff' />

//                 </TouchableOpacity>
//             {
//                 content ? (
//                     <View style={styles.modelContent}>
//                         {content}
//                     </View>
//                 ):(
//                     <Text style={styles.placeholderText}>
//                         No Content Provided
//                     </Text>
//                 )
//             }

//             </View>
//         </View>

//     </Modal>
//   )
// }

// export default CustomModal


// const styles = StyleSheet.create({
//     modelContent: {
//         borderTopLeftRadius:10,
//         borderTopRightRadius:10,
//         overflow:'hidden',
//         backgroundColor:'#fff',
//         maxHeight: screenHeight * 0.7,
//         minHeight:150,
//         width:'100%',
//     },
//     modalContainer: {
//         flex: 1,
//         backgroundColor: 'rgba(0,0,0,0.5)',
//         filter: Platform.OS === 'android' ? [{blur:4}] : undefined,
//         justifyContent:'flex-end'
//     },
//     contentContainer

// })