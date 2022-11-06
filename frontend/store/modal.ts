import { atom } from 'recoil';

export interface ModalType {
  // recoil의 경고 모달 상태 타입
  status: 'success' | 'warning';
  text: string;
  open: boolean;
}

// 경고 모달, 텍스트와 열려있는지 여부
export const modalState = atom<ModalType>({
  key: 'modalState',
  default: { status: 'success', text: '', open: false },
});
