export type PopUpItemsProps = {
  name: string;
  description?: string;
  href?: string;
  onClick?: (e: any) => void;
};

export enum ModalType {
  PopUpItemsProps,
}
