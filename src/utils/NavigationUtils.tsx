// import {
//     createNavigationContainerRef,
//     CommonActions,
//     StackActions,
// } from '@react-navigation/native';

// export const navigationRef = createNavigationContainerRef();

// export async function navigate(routeName: string, params?: object) {
//     navigationRef.isReady();
//     if (navigationRef.isReady()) {
//         navigationRef.dispatch(CommonActions.navigate(routeName, params));
//     }
// }

// export async function replace(routeName: string, params?: object) {
//     navigationRef.isReady();
//     if (navigationRef.isReady()) {
//         navigationRef.dispatch(StackActions.replace(routeName, params));
//     }
// }

// export async function resetAndNavigate(routeName: string) {
//     navigationRef.isReady();
//     if (navigationRef.isReady()) {
//         navigationRef.dispatch(
//             CommonActions.reset({
//                 index: 0,
//                 routes: [{ name: routeName }],
//             }),
//         );
//     }
// }

// export async function goBack() {
//     navigationRef.isReady();
//     if (navigationRef.isReady()) {
//         navigationRef.dispatch(CommonActions.goBack());
//     }
// }

// export async function push(routeName: string, params?: object) {
//     navigationRef.isReady();
//     if (navigationRef.isReady()) {
//         navigationRef.dispatch(StackActions.push(routeName, params));
//     }
// }

// export async function prepareNavigation() {
//     navigationRef.isReady();
// }

import {
  createNavigationContainerRef,
  CommonActions,
  StackActions,
} from '@react-navigation/native';

export const navigationRef = createNavigationContainerRef();

export function navigate(routeName: string, params?: object) {
  navigationRef.dispatch(CommonActions.navigate(routeName, params));
}

export function replace(routeName: string, params?: object) {
  navigationRef.dispatch(StackActions.replace(routeName, params));
}

export function resetAndNavigate(routeName: string) {
  navigationRef.dispatch(
    CommonActions.reset({
      index: 0,
      routes: [{ name: routeName }],
    })
  );
}

export function goBack() {
  navigationRef.dispatch(CommonActions.goBack());
}

export function push(routeName: string, params?: object) {
  navigationRef.dispatch(StackActions.push(routeName, params));
}
