import {atom}  from 'recoil'
import { recoilPersist } from 'recoil-persist';
const { persistAtom } = recoilPersist();

 
export const popupState = atom({
  key:"popup",
  default:false
})

export const authPopUpState = atom({
  key:"authPopUp",
  default:false
})

export const authLoaderState = atom({
  key:"authLoader",
  default:false
})
export const fileState = atom<File | null | undefined>({
  key:"file",
  default: null
})
export const verifiedState = atom({
  key: 'verified',
  default: false,
  effects_UNSTABLE: [persistAtom], // Add persistence here
});
export const editProfileState = atom({
  key: 'editProfile',
  default: false, 
});