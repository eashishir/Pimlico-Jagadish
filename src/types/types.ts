export interface Record {
  image: string,
  uid: string,
  title?: string,
  isCollectionTakeout?: boolean,
  isDelivery?: boolean,
  isDineInPreorder?: boolean,
  whatYouGet?: React.ReactNode | string,
  conditions?: React.ReactNode | string,
  getCodeButton?: boolean,
  orderNowButton?: boolean,
}

export type Records = Record[]
