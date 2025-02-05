interface dummyNftType {
  id:number, 
  metadata:{
    name: string;
    symbol: string;
    owner:string,
  },  
  nftMint:string,
  upvotes:number, 
  downvotes:number,
  creator:string;
  spread: number;
  imageUrl: string;
  buy: number;
  sell: number;
  listed: number;
  listedpercent: number;
  mcap: string;
  vol24h: string;
};


type dummyVisitedNftType =  {
  name: string;
  img: string;
  mcap: string;
  priceUp: string;
  priceDown: string;
};


type dummyHotNftType = {
  name: string;
  img: string;
  mcap: string;
  priceUp: string;
  priceDown: string;
};

type dummyTrendingNftType ={
  name: string;
  owner: string;
  img: string;
  mcap: string;
  listed: string;
};


type dummyRecentNftType = {
  name: string;
  owner: string;
  img: string;
  mcap: string; 
};

type dummyNftToPostType = {
  name: string;
  symbol:string,
  mintAddress:string,
  creator?:{
    address:string,
    verified:boolean,
    share:number,
  };
  owner?: string;
  uri: string; 
};


type dummyUserProfilesProps = {
  [key:string]:{
    id?:number
    username?:string,
    banner?:string,
    createdAt:string | null | undefined,
    profileImage:string | null | undefined,
    totalPosts:number, 
    walletAddress:string,
    lastActive:string,
    totalSales:number
  trendingNftDetails:{
    nftName:string,
    img:string,
    listners:string,
    mcap:string,
    supply:string,
    mints:string
  },
  addressDetails?:{
    name:string,
    value:string | number
  }[],
  allNFts?:{
    name: string,
    img: string,
    supply: string,
    mints: string,
    mintPercent: string,
    mcap: string,
    mcapUp: string,
    mcapDown: string,
    listeners: string,
    listenersUp: string,
    listenersDown: string,
    priceUp: string,
    priceDown: string,
  }[],
  buyNFts?:{
    name: string,
    img: string,
    supply: string,
    mints: string,
    mintPercent: string,
    mcap: string,
    mcapUp: string,
    mcapDown: string,
    listeners: string,
    listenersUp: string,
    listenersDown: string,
    priceUp: string,
    priceDown: string,
  }[]
}
}

interface userProfilesProps { 
  id?:number | null | undefined
  username?:string | null | undefined,
  banner?:string | null | undefined,
  createdAt?:string | null | undefined,
  profileImage?:string | null | undefined,
  totalPosts?:number | undefined, 
  walletAddress?:string | undefined,
  lastActive?:string |  undefined,
  totalSales?:number | undefined
  trendingNftDetails?:{
    nftName:string,
    img:string,
    listners:string,
    mcap:string,
    supply:string,
    mints:string
  } | undefined,
  addressDetails?:{
    name:string,
    value:string | number
  }[],
  allNFts?:{
    name: string,
    img: string,
    supply: string,
    mints: string,
    mintPercent: string,
    mcap: string,
    mcapUp: string,
    mcapDown: string,
    listeners: string,
    listenersUp: string,
    listenersDown: string,
    priceUp: string,
    priceDown: string,
  }[],
  buyNFts?:{
    name: string,
    img: string,
    supply: string,
    mints: string,
    mintPercent: string,
    mcap: string,
    mcapUp: string,
    mcapDown: string,
    listeners: string,
    listenersUp: string,
    listenersDown: string,
    priceUp: string,
    priceDown: string,
  }[]
} 


type  dummyNftDataProps = {
  [key: string]:
  { nftName: string,
  banner: string,
  nftImage: string,
  currentOwner: string,
  creator: string,
  joined: string,
  nftDetails: {
    buy: string,
    sell: string,
    listners: string,
    mcap: string,
    supply: string,
    mints: string
  },
  addressDetails: {
    name: string,
    value: string
  }[],
  comments: {
    name: string,
    img: string,
    comment: string,
    date: string,
    likes: string,
    dislikes: string,
    replies: string
  }[]
}
}

type NftDataProp = {
  id:number,
  User?: {
    createdAt: string; // ISO date string
    id: number;
    profileImage:string,
    lastActive: string; // ISO date string
    totalPosts: number;
    totalSales: number;
    username: string | null;
    walletAddress: string;
  };
  comments: {
    content: string;
    createdAt: string; // ISO date string
    id: number;
    postId: number;
    userId: number;
  }[];
  createdAt:string,
  creator:string,
  description:string,
  downvotes:number,
  imageUrl:string,
  isForSale:boolean,
  metadata: {
    name: string;
    symbol: string;
    collection: string | null;
  };
  nftMint: string;
  price: number | null;
  status: string; // e.g., "active"
  title: string;
  tokenAccount: string;
  updatedAt: string; // ISO date string
  upvotes: number;
  votes: {
    createdAt: string; // ISO date string
    id: number;
    postId: number;
    type: string; // e.g., "upvote" or "downvote"
  }[];
}

export type { dummyNftType,dummyVisitedNftType,dummyHotNftType,dummyTrendingNftType,dummyRecentNftType,dummyUserProfilesProps,userProfilesProps, dummyNftDataProps, dummyNftToPostType,NftDataProp } 