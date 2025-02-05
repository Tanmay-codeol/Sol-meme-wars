import { dummyHotNftType, dummyNftDataProps, dummyNftToPostType, dummyNftType, dummyRecentNftType, dummyTrendingNftType, dummyUserProfilesProps, dummyVisitedNftType } from "../libs/types";

 
export const dummyNft:dummyNftType[] = [
  {
    id:1,
    metadata: {
      name: "Pepe Swag",
      symbol: "PSP",
      owner: "Alex Smith",
    },
    nftMint:"",
    creator: '',
    spread: 5.72,
    imageUrl: "https://prod-image-cdn.tensor.trade/images/90x90/freeze=true/https%3A%2F%2Fprod-tensor-creators-s3.s3.us-east-1.amazonaws.com%2Fimage-25bd6823-287f-41c3-b936-20242a3e149b",
    buy: 1.13,
    sell: 1.06,
    listed: 1348,
    listedpercent: 24,
    mcap: "6,164",
    vol24h: "3,566",
    upvotes: 0,
    downvotes: 0,
  },
  {
    id:2,
    metadata: {
      name: "Crypto Fox",
      symbol: "CRYPT",
      owner: "Ethan Hunt",
    },
    nftMint:"",
    creator: '',
    spread: 3.40,
    imageUrl: "https%3A%2F%2Fi.imgur.com%2FbMH6qNc.png",
    buy: 18.73,
    sell: 18.20,
    listed: 8,
    listedpercent: 24,
    mcap: "92,272",
    vol24h: "1,703",
    upvotes: 0,
    downvotes: 0,
  },
  {
    id:3,
    metadata: {
      name: "Pixel Dragon",
      symbol: "PXL",
      owner: "Liam Nelson",
    },
    nftMint:"",
    creator: '',
    spread: 4.89,
    imageUrl: "https%3A%2F%2Fprod-tensor-creators-s3.s3.us-east-1.amazonaws.com%2Fimage%2F950e7eef-4da1-47b7-9dd9-507375b9e741",
    buy: 10.45,
    sell: 9.95,
    listed: 900,
    listedpercent: 15,
    mcap: "45,345",
    vol24h: "6,789",
    upvotes: 0,
    downvotes: 0,
  },
  // {
  //   name: "Monkey Business",
  //   spread: 2.50,
  //   img: "https%3A%2F%2Fprod-tensor-creators-s3.s3.us-east-1.amazonaws.com%2Fimage-59c7bcf2-bcb3-4cd3-9301-68ee6a474926",
  //   buy: 23.55,
  //   sell: 23.00,
  //   listed: 102,
  //   listedpercent: 12,
  //   Mcap: "120,400",
  //   vol24h: "12,345"
  // },
  // {
  //   name: "Aurory",
  //   spread: 1.80,
  //   img: "https%3A%2F%2Fprod-tensor-creators-s3.s3.us-east-1.amazonaws.com%2Fimage-a00199bb-0c51-450a-8ef1-79564685aecf",
  //   buy: 14.25,
  //   sell: 14.00,
  //   listed: 540,
  //   listedpercent: 20,
  //   Mcap: "30,500",
  //   vol24h: "4,560"
  // },
  // {
  //   name: "Galactic Geckos",
  //   spread: 6.20,
  //   img: "https%3A%2F%2Fprod-tensor-creators-s3.s3.us-east-1.amazonaws.com%2Fimage%2F43fcd802-8437-4b07-9da5-26acfed1692a",
  //   buy: 3.60,
  //   sell: 3.40,
  //   listed: 300,
  //   listedpercent: 22,
  //   Mcap: "12,890",
  //   vol24h: "3,200"
  // },
  // {
  //   name: "DeGods",
  //   spread: 8.50,
  //   img: "https%3A%2F%2Fprod-tensor-creators-s3.s3.us-east-1.amazonaws.com%2Fimage-59b15ca3-d06a-454a-b3c3-d6448b9dcd0a",
  //   buy: 32.03,
  //   sell: 46.00,
  //   listed: 50,
  //   listedpercent: 10,
  //   Mcap: "500,000",
  //   vol24h: "20,000"
  // },
  // {
  //   name: "Thugbirdz",
  //   spread: 7.35,
  //   img: "https%3A%2F%2Fprod-tensor-creators-s3.s3.us-east-1.amazonaws.com%2Fimage-25bd6823-287f-41c3-b936-20242a3e149b",
  //   buy: 5.60,
  //   sell: 5.20,
  //   listed: 400,
  //   listedpercent: 18,
  //   Mcap: "22,400",
  //   vol24h: "2,500"
  // }
];
   

export const dummyVisitedNft :dummyVisitedNftType[] = [
  {
    name: "Frogana",
    img: "https://prod-image-cdn.tensor.trade/images/90x90/freeze=false/https%3A%2F%2Fbafkreibtf35tniaqma43kvn5upi2e4qlroid56jxfm3nqtwjldrzaxrgtu.ipfs.nftstorage.link%2F",
    mcap: "6",
    priceUp: "1.13",
    priceDown: "1.06"
  },
  {
    name: "SMB Gen2",
    img: "https://prod-image-cdn.tensor.trade/images/90x90/freeze=false/https%3A%2F%2Fprod-tensor-creators-s3.s3.us-east-1.amazonaws.com%2Fimage-59b15ca3-d06a-454a-b3c3-d6448b9dcd0a",
    mcap: "2.3",
    priceUp: "18.73",
    priceDown: "18.20"
  },
  {
    name: "Degen Ape",
    img: "https://prod-image-cdn.tensor.trade/images/90x90/freeze=false/https%3A%2F%2Fprod-tensor-creators-s3.s3.us-east-1.amazonaws.com%2Fimage%2Fdf1b3c23-730c-4b1b-9aef-e6ee430d3d96",
    mcap: "4.3",
    priceUp: "10.45",
    priceDown: "9.95"
  },
  {
    name: "Monkey ",
    img: "https://prod-image-cdn.tensor.trade/images/90x90/freeze=false/https%3A%2F%2Fprod-tensor-creators-s3.s3.us-east-1.amazonaws.com%2Fimage%2F85dfbabe-0ca2-4426-aa9c-565412f25ff6",
    mcap: "7",
    priceUp: "23.55",
    priceDown: "23.00"
  },
  {
    name: "Aurory",
    img: "https://prod-image-cdn.tensor.trade/images/90x90/freeze=false/https%3A%2F%2Fprod-tensor-creators-s3.s3.us-east-1.amazonaws.com%2Fimage%2F8dd340c5-ab25-4106-9d43-b4aec2ff9485",
    mcap: "3",
    priceUp: "14.25",
    priceDown: "14.00"
  },
]
 export const dummyHotNft:dummyHotNftType[] = [
  {
    name: "Gatos",
    img: "https://prod-image-cdn.tensor.trade/images/90x90/freeze=false/https%3A%2F%2Fprod-tensor-creators-s3.s3.us-east-1.amazonaws.com%2Fimage-092ed75e-f98b-4199-985e-eedc98adbba6",
    mcap: "1.1",
    priceUp: "3.13",
    priceDown: "1.06"
  },
  {
    name: "BonkeDAD",
    img: "https://prod-image-cdn.tensor.trade/images/90x90/freeze=false/https%3A%2F%2Fcreator-hub-prod.s3.us-east-2.amazonaws.com%2Fdoge__pfp_1681922704773.png",
    mcap: "9",
    priceUp: "7.73",
    priceDown: "18.20"
  },
  {
    name: "FardNFT",
    img: "https://prod-image-cdn.tensor.trade/images/90x90/freeze=false/https%3A%2F%2Fprod-tensor-creators-s3.s3.us-east-1.amazonaws.com%2Fimage%2Fc2653525-9bc8-4ab9-a46c-a621baf38b9f",
    mcap: "3",
    priceUp: "4.45",
    priceDown: "9.95"
  },
  {
    name: "Solana Frog ",
    img: "https://prod-image-cdn.tensor.trade/images/90x90/freeze=false/https%3A%2F%2Fprod-tensor-creators-s3.s3.us-east-1.amazonaws.com%2Fimage%2F717500b2-a224-45b3-a30b-64e5f458eea9",
    mcap: "9.6",
    priceUp: "23.55",
    priceDown: "23.00"
  },
  {
    name: "Hegends",
    img: "https://prod-image-cdn.tensor.trade/images/90x90/freeze=false/https%3A%2F%2Fprod-tensor-creators-s3.s3.us-east-1.amazonaws.com%2Fimage%2Febe4f6ba-de75-4039-a91b-7ac41ef7dfa2",
    mcap: "2",
    priceUp: "1.25",
    priceDown: "14.00"
  },
]
 

export const dummyTrendingNft:dummyTrendingNftType[] = [
  {
    name: "Portals",
    owner: "John Wick",
    img: "https://prod-image-cdn.tensor.trade/images/90x90/freeze=false/https%3A%2F%2Fprod-tensor-creators-s3.s3.us-east-1.amazonaws.com%2Fimage%2F8720ed55-99dd-4b9b-9592-d21913d76b70",
    mcap: "20",
    listed: "1.06",
  },
  {
    name: "Pixel Panda",
    owner: "Alice paul",
    img: "https://prod-image-cdn.tensor.trade/images/90x90/freeze=false/https%3A%2F%2Fmedia.cdn.magiceden.dev%2Flaunchpad%2Fafel%2F45f246ec-a78a-4599-a116-8edb15edac61",
    mcap: "15",
    listed: "2.34",
  },
  {
    name: "Cyber Cat",
    owner: "Elon Tusk",
    img: "https://prod-image-cdn.tensor.trade/images/90x90/freeze=false/https%3A%2F%2Fap-assets.pinit.io%2FARefBgVcdnEutkLfRGSmM4kGg4yRToza1g62LiW3eCnw%2Ffb6484b6-8363-4c8b-8bb8-e47a5be2a627%2F34",
    mcap: "50",
    listed: "3.75",
  },
  {
    name: "Glitch Ape",
    owner: "Neo Matrix",
    img: "https://prod-image-cdn.tensor.trade/images/90x90/freeze=false/https%3A%2F%2Fbafybeidtuyyi2clhwnbdargiop2dveibfsh3vl7vs5imuzj6yk7ax55f3u.ipfs.nftstorage.link%2F",
    mcap: "100",
    listed: "8.50",
  },
  {
    name: "Crypto Koi",
    owner: "Nakamoto",
    img: "https://prod-image-cdn.tensor.trade/images/90x90/freeze=false/https%3A%2F%2Fprod-tensor-creators-s3.s3.us-east-1.amazonaws.com%2Fimage%2F4e02d95b-4753-49f8-9630-4f8aa0230ba2",
    mcap: "75",
    listed: "6.42",
  },
  
];
 
export const dummyRecentNft: dummyRecentNftType[] = [
  {
    name: "Zero Monka",
    owner: "John Wick",
    img: "https://prod-image-cdn.tensor.trade/images/90x90/freeze=false/https%3A%2F%2Fprod-tensor-creators-s3.s3.us-east-1.amazonaws.com%2Fimage-9e5a58f4-cfdc-4f65-99d6-c5974bbc80c1",
    mcap: "3",
  },
  {
    name: "Boryoku Panda",
    owner: "Alice Cooper",
    img: "https://prod-image-cdn.tensor.trade/images/90x90/freeze=false/https%3A%2F%2Fboryokudragonz.io%2Fdragonz-ani.gif",
    mcap: "15",
  },
  {
    name: "namaste",
    owner: "Elon Tusk",
    img: "https://prod-image-cdn.tensor.trade/images/90x90/freeze=false/https%3A%2F%2Fprod-tensor-creators-s3.s3.us-east-1.amazonaws.com%2Fimage-670bcf8d-fc83-43e6-9b6e-ceaeaebe7a86",
    mcap: "5",
  },
  {
    name: "Meetbags",
    owner: "Neo Matrix",
    img: "https://prod-image-cdn.tensor.trade/images/90x90/freeze=false/https%3A%2F%2Fprod-tensor-creators-s3.s3.us-east-1.amazonaws.com%2Fimage%2Fb21f63b7-eddf-4910-b9fc-ce0b573a5af9",
    mcap: "4",
  },
  {
    name: "Crypto Koi",
    owner: "Nakamoto",
    img: "https://prod-image-cdn.tensor.trade/images/90x90/freeze=false/https%3A%2F%2Farweave.net%2Fur-eoO--XdlbEui8-O-8DehYNQsmrmfiq8n1XpWrtbI%3Fext%3Djpg",
    mcap: "8",
  },
  
];
 
 
export const dummyNftToPost: dummyNftToPostType[] = [
  {
    name: "Zero Monka", 
     symbol:"ZMDK",
     mintAddress:"",
    uri: "https://arweave.net/0Yj6QO-_5Zpdj7ZGgIhGgckUEdOsXXFhTC3tMN-45BY",

  },
  {
    name: "Boryoku Panda", 
     symbol:"BDAK",
     mintAddress:"",
    uri: "https://prod-image-cdn.tensor.trade/images/90x90/freeze=false/https%3A%2F%2Fboryokudragonz.io%2Fdragonz-ani.gif",
  
  },
  {
    name: "namaste",  
     symbol:"NMST",
     mintAddress:"",
    uri: "https://prod-image-cdn.tensor.trade/images/90x90/freeze=false/https%3A%2F%2Fprod-tensor-creators-s3.s3.us-east-1.amazonaws.com%2Fimage-670bcf8d-fc83-43e6-9b6e-ceaeaebe7a86",

  },
  {
    name: "Meetbags", 
     symbol:"MTBG",
     mintAddress:"",
    uri: "https://prod-image-cdn.tensor.trade/images/90x90/freeze=false/https%3A%2F%2Fprod-tensor-creators-s3.s3.us-east-1.amazonaws.com%2Fimage%2Fb21f63b7-eddf-4910-b9fc-ce0b573a5af9",

  },
  {
    name: "Crypto Koi", 
     symbol:"CKI",
     mintAddress:"",
    uri: "https://prod-image-cdn.tensor.trade/images/90x90/freeze=false/https%3A%2F%2Farweave.net%2Fur-eoO--XdlbEui8-O-8DehYNQsmrmfiq8n1XpWrtbI%3Fext%3Djpg",

  },
  
];
 

export const dummyUserProfiles:dummyUserProfilesProps = {
  //@ts-ignore
   "alex-smith" : {
    username:"alex smith",
    banner:"/profile baners/alex-baner.png",
    profileImage:"/profile images/alex.png",
    createdAt:"2023",
    trendingNftDetails:{
      nftName:"pepe swag",
      img:"https://prod-image-cdn.tensor.trade/images/90x90/freeze=true/https://prod-image-cdn.tensor.trade/images/90x90/freeze=true/https%3A%2F%2Fprod-tensor-creators-s3.s3.us-east-1.amazonaws.com%2Fimage-25bd6823-287f-41c3-b936-20242a3e149b",
      listners:"2,345",
      mcap:"34",
      supply:"67",
      mints:"50"
    },

    addressDetails:[
      {
        name:"wallet address",
        value:"7f884h8h9d8fhsjsh9s8dfhsf8",
      },
      {
        name:"donaiton address",
        value:"94ji8ojsds90sj0s09sf9s9jfsf990d9",
      },
      {
        name:"totla nft  minted",
        value:"123"
      }
    ],

    allNFts:[
      {
        name: 'fragma',
        img: "https://prod-image-cdn.tensor.trade/images/90x90/freeze=false/https%3A%2F%2Fprod-tensor-creators-s3.s3.us-east-1.amazonaws.com%2Fimage%2F8dd340c5-ab25-4106-9d43-b4aec2ff9485",
        supply: "21",
        mints: "24",
        mintPercent: "0.37",
        mcap: "122",
        mcapUp: "2.37",
        mcapDown: "0.15",
        listeners: "20",
        listenersUp: "10",
        listenersDown: "8",
        priceUp: "6.45",
        priceDown: "2.73",
      },
      {
        name: 'solarity',
        img: "https://prod-image-cdn.tensor.trade/images/90x90/freeze=false/https%3A%2F%2Fwe-assets.pinit.io%2F89VB5UmvopuCFmp5Mf8YPX28fGvvqn79afCgouQuPyhY%2Fdff523ae-3d88-4f8f-9c16-3864da4ccdeb%2F0",
        supply: "50",
        mints: "30",
        mintPercent: "0.60",
        mcap: "200",
        mcapUp: "5.12",
        mcapDown: "0.45",
        listeners: "40",
        listenersUp: "15",
        listenersDown: "5",
        priceUp: "8.90",
        priceDown: "3.40",
      },
      {
        name: 'nexgen',
        img: "https://prod-image-cdn.tensor.trade/images/90x90/freeze=false/https%3A%2F%2Farweave.net%2FwBOcIkry98b6GugC5FPh8HIvfy30sVoSbYYPlvWFaPQ",
        supply: "35",
        mints: "28",
        mintPercent: "0.50",
        mcap: "150",
        mcapUp: "3.20",
        mcapDown: "0.30",
        listeners: "30",
        listenersUp: "12",
        listenersDown: "6",
        priceUp: "7.10",
        priceDown: "3.25",
      },
      {
        name: 'orbital',
        img: "https://prod-image-cdn.tensor.trade/images/90x90/freeze=false/https%3A%2F%2Fprod-tensor-creators-s3.s3.us-east-1.amazonaws.com%2Fimage%2F79c0d27d-d7c3-4f1f-ad39-fd0bc4fb4e3b",
        supply: "25",
        mints: "22",
        mintPercent: "0.44",
        mcap: "130",
        mcapUp: "2.85",
        mcapDown: "0.20",
        listeners: "25",
        listenersUp: "8",
        listenersDown: "10",
        priceUp: "6.75",
        priceDown: "2.90",
      },
      {
        name: 'starlite',
        img: "https://prod-image-cdn.tensor.trade/images/90x90/freeze=false/https%3A%2F%2Fcreator-hub-prod.s3.us-east-2.amazonaws.com%2Fdegenfatcats_pfp_1657860808010.png",
        supply: "18",
        mints: "20",
        mintPercent: "0.33",
        mcap: "110",
        mcapUp: "2.15",
        mcapDown: "0.10",
        listeners: "18",
        listenersUp: "6",
        listenersDown: "7",
        priceUp: "5.80",
        priceDown: "2.45",
      }, 
    ],
    
    buyNFts:[
      {
        name: 'luminex',
        img: "https://prod-image-cdn.tensor.trade/images/90x90/freeze=false/https%3A%2F%2Fprod-tensor-creators-s3.s3.us-east-1.amazonaws.com%2Fimage%2F61be19eb-a4f4-45b6-abdb-9a2ae3ee1d51",
        supply: "40",
        mints: "36",
        mintPercent: "0.45",
        mcap: "175",
        mcapUp: "3.75",
        mcapDown: "0.25",
        listeners: "32",
        listenersUp: "12",
        listenersDown: "4",
        priceUp: "7.85",
        priceDown: "3.60",
      },
      {
        name: 'astrofy',
        img: "https://prod-image-cdn.tensor.trade/images/90x90/freeze=false/https%3A%2F%2Fprod-tensor-creators-s3.s3.us-east-1.amazonaws.com%2Fimage-5f911c4b-2343-4d4b-a596-ead201473f03",
        supply: "60",
        mints: "45",
        mintPercent: "0.75",
        mcap: "250",
        mcapUp: "6.50",
        mcapDown: "0.70",
        listeners: "50",
        listenersUp: "20",
        listenersDown: "8",
        priceUp: "9.95",
        priceDown: "4.50",
      },
      {
        name: 'nebula',
        img: "https://prod-image-cdn.tensor.trade/images/90x90/freeze=false/https%3A%2F%2Fprod-tensor-creators-s3.s3.us-east-1.amazonaws.com%2Fimage%2Fcc708b58-db30-42f0-aade-e385accbc4c8",
        supply: "22",
        mints: "18",
        mintPercent: "0.32",
        mcap: "100",
        mcapUp: "1.90",
        mcapDown: "0.10",
        listeners: "15",
        listenersUp: "5",
        listenersDown: "3",
        priceUp: "4.80",
        priceDown: "2.10",
      },
      {
        name: 'cosmogen',
        img: "https://prod-image-cdn.tensor.trade/images/90x90/freeze=false/https%3A%2F%2Fimg-cdn.magiceden.dev%2Frs%3Afill%3A400%3A400%3A0%3A0%2Fplain%2Fhttps%3A%2F%2Fdl.airtable.com%2F.attachmentThumbnails%2Fbafb174c6d4fb01610fd1c9bf2998d9d%2F29772c78",
        supply: "30",
        mints: "27",
        mintPercent: "0.48",
        mcap: "140",
        mcapUp: "3.10",
        mcapDown: "0.15",
        listeners: "22",
        listenersUp: "9",
        listenersDown: "6",
        priceUp: "6.25",
        priceDown: "2.75",
      },
      {
        name: 'orion',
        img: "https://prod-image-cdn.tensor.trade/images/90x90/freeze=false/https%3A%2F%2Fredlight-bot.s3.amazonaws.com%2Frenewal.gif",
        supply: "28",
        mints: "26",
        mintPercent: "0.46",
        mcap: "135",
        mcapUp: "2.95",
        mcapDown: "0.12",
        listeners: "20",
        listenersUp: "10",
        listenersDown: "5",
        priceUp: "6.00",
        priceDown: "2.65",
      },
    ]  
  },
  //@ts-ignore
   "ethan-hunt" : {
    username: "Ethan Hunt",
    banner: "/profile baners/ethan-baner.png",
    profileImage: "/profile images/ethan.png",
    createdAt: "2021",
    trendingNftDetails: {
      nftName: "Crypto Fox",
      img: "https://prod-image-cdn.tensor.trade/images/90x90/freeze=true/https%3A%2F%2Fi.imgur.com%2FbMH6qNc.png",
      listners: "4,789",
      mcap: "56",
      supply: "150",
      mints: "120"
    },

    addressDetails: [
      {
        name: "wallet address",
        value: "3j98t8h9h2d9fsjdhs9ds8dhfhs",
      },
      {
        name: "donation address",
        value: "84kf7js9dsjs9djs87s9f9sh9s",
      },
      {
        name: "total nft minted",
        value: "240"
      }
    ],

    
    allNFts:[
      {
        name: 'fragma',
        img: "https://prod-image-cdn.tensor.trade/images/90x90/freeze=false/https%3A%2F%2Fprod-tensor-creators-s3.s3.us-east-1.amazonaws.com%2Fimage%2F8dd340c5-ab25-4106-9d43-b4aec2ff9485",
        supply: "21",
        mints: "24",
        mintPercent: "0.37",
        mcap: "122",
        mcapUp: "2.37",
        mcapDown: "0.15",
        listeners: "20",
        listenersUp: "10",
        listenersDown: "8",
        priceUp: "6.45",
        priceDown: "2.73",
      },
      {
        name: 'solarity',
        img: "https://prod-image-cdn.tensor.trade/images/90x90/freeze=false/https%3A%2F%2Fwe-assets.pinit.io%2F89VB5UmvopuCFmp5Mf8YPX28fGvvqn79afCgouQuPyhY%2Fdff523ae-3d88-4f8f-9c16-3864da4ccdeb%2F0",
        supply: "50",
        mints: "30",
        mintPercent: "0.60",
        mcap: "200",
        mcapUp: "5.12",
        mcapDown: "0.45",
        listeners: "40",
        listenersUp: "15",
        listenersDown: "5",
        priceUp: "8.90",
        priceDown: "3.40",
      },
      {
        name: 'nexgen',
        img: "https://prod-image-cdn.tensor.trade/images/90x90/freeze=false/https%3A%2F%2Farweave.net%2FwBOcIkry98b6GugC5FPh8HIvfy30sVoSbYYPlvWFaPQ",
        supply: "35",
        mints: "28",
        mintPercent: "0.50",
        mcap: "150",
        mcapUp: "3.20",
        mcapDown: "0.30",
        listeners: "30",
        listenersUp: "12",
        listenersDown: "6",
        priceUp: "7.10",
        priceDown: "3.25",
      },
      {
        name: 'orbital',
        img: "https://prod-image-cdn.tensor.trade/images/90x90/freeze=false/https%3A%2F%2Fprod-tensor-creators-s3.s3.us-east-1.amazonaws.com%2Fimage%2F79c0d27d-d7c3-4f1f-ad39-fd0bc4fb4e3b",
        supply: "25",
        mints: "22",
        mintPercent: "0.44",
        mcap: "130",
        mcapUp: "2.85",
        mcapDown: "0.20",
        listeners: "25",
        listenersUp: "8",
        listenersDown: "10",
        priceUp: "6.75",
        priceDown: "2.90",
      },
      {
        name: 'starlite',
        img: "https://prod-image-cdn.tensor.trade/images/90x90/freeze=false/https%3A%2F%2Fcreator-hub-prod.s3.us-east-2.amazonaws.com%2Fdegenfatcats_pfp_1657860808010.png",
        supply: "18",
        mints: "20",
        mintPercent: "0.33",
        mcap: "110",
        mcapUp: "2.15",
        mcapDown: "0.10",
        listeners: "18",
        listenersUp: "6",
        listenersDown: "7",
        priceUp: "5.80",
        priceDown: "2.45",
      }, 
    ],
    
    buyNFts:[
      {
        name: 'luminex',
        img: "https://prod-image-cdn.tensor.trade/images/90x90/freeze=false/https%3A%2F%2Fprod-tensor-creators-s3.s3.us-east-1.amazonaws.com%2Fimage%2F61be19eb-a4f4-45b6-abdb-9a2ae3ee1d51",
        supply: "40",
        mints: "36",
        mintPercent: "0.45",
        mcap: "175",
        mcapUp: "3.75",
        mcapDown: "0.25",
        listeners: "32",
        listenersUp: "12",
        listenersDown: "4",
        priceUp: "7.85",
        priceDown: "3.60",
      },
      {
        name: 'astrofy',
        img: "https://prod-image-cdn.tensor.trade/images/90x90/freeze=false/https%3A%2F%2Fprod-tensor-creators-s3.s3.us-east-1.amazonaws.com%2Fimage-5f911c4b-2343-4d4b-a596-ead201473f03",
        supply: "60",
        mints: "45",
        mintPercent: "0.75",
        mcap: "250",
        mcapUp: "6.50",
        mcapDown: "0.70",
        listeners: "50",
        listenersUp: "20",
        listenersDown: "8",
        priceUp: "9.95",
        priceDown: "4.50",
      },
      {
        name: 'nebula',
        img: "https://prod-image-cdn.tensor.trade/images/90x90/freeze=false/https%3A%2F%2Fprod-tensor-creators-s3.s3.us-east-1.amazonaws.com%2Fimage%2Fcc708b58-db30-42f0-aade-e385accbc4c8",
        supply: "22",
        mints: "18",
        mintPercent: "0.32",
        mcap: "100",
        mcapUp: "1.90",
        mcapDown: "0.10",
        listeners: "15",
        listenersUp: "5",
        listenersDown: "3",
        priceUp: "4.80",
        priceDown: "2.10",
      },
      {
        name: 'cosmogen',
        img: "https://prod-image-cdn.tensor.trade/images/90x90/freeze=false/https%3A%2F%2Fimg-cdn.magiceden.dev%2Frs%3Afill%3A400%3A400%3A0%3A0%2Fplain%2Fhttps%3A%2F%2Fdl.airtable.com%2F.attachmentThumbnails%2Fbafb174c6d4fb01610fd1c9bf2998d9d%2F29772c78",
        supply: "30",
        mints: "27",
        mintPercent: "0.48",
        mcap: "140",
        mcapUp: "3.10",
        mcapDown: "0.15",
        listeners: "22",
        listenersUp: "9",
        listenersDown: "6",
        priceUp: "6.25",
        priceDown: "2.75",
      },
      {
        name: 'orion',
        img: "https://prod-image-cdn.tensor.trade/images/90x90/freeze=false/https%3A%2F%2Fredlight-bot.s3.amazonaws.com%2Frenewal.gif",
        supply: "28",
        mints: "26",
        mintPercent: "0.46",
        mcap: "135",
        mcapUp: "2.95",
        mcapDown: "0.12",
        listeners: "20",
        listenersUp: "10",
        listenersDown: "5",
        priceUp: "6.00",
        priceDown: "2.65",
      },
    ] 
  }
 
}
 
export const dummyNftData:dummyNftDataProps = {
   "pepe-swag" : {
    nftName:"Pepe Swag",
    banner:"/images/banner-nft1.png",
    nftImage:"https://prod-image-cdn.tensor.trade/images/90x90/freeze=true/https%3A%2F%2Fprod-tensor-creators-s3.s3.us-east-1.amazonaws.com%2Fimage-25bd6823-287f-41c3-b936-20242a3e149b",
    currentOwner:"Alex Smith",
    creator:"Nick Jane",
    
    joined:"2023",
    nftDetails:{ 
      buy: "5.60",
      sell: "2.20",
      listners:"2,345",
      mcap:"34",
      supply:"67",
      mints:"50"
    },

    addressDetails:[
      {
        name:"Mint address",
        value:"7f884h8h9d8fhsjsh9s8dfhsf8sdfsf",
      },
      {
        name:"donaiton address",
        value:"94ji8ojsds90sj0s09sf9s9jfsf990d9",
      },
      {
        name:"Token address",
        value:"94ji8ojsds90sj0s09sf9s9jfsf990d9",
      },
      {
        name:"totla nft minted",
        value:"123"
      },
      {
        name:"totlal Supplies",
        value:"200"
      },
    ],
    comments: [
      {
        name: "Alex jane",
        img: '/images/alex-avatar.png',
        comment: "Using this NFT for a while now, it's amazing!",
        date: "12th Dec 2021",
        likes: "12",
        dislikes: "2",
        replies: "2",
      },
      {
        name: "Sarah Smith",
        img: '/images/sarah-avatar.png',
        comment: "Interesting perspective, thanks for sharing.",
        date: "16th Dec 2021",
        likes: "15",
        dislikes: "0",
        replies: "3",
      },
      {
        name: "John doe",
        img: 'https://prod-image-cdn.tensor.trade/images/90x90/freeze=false/https%3A%2F%2Fprod-tensor-creators-s3.s3.us-east-1.amazonaws.com%2Fimage%2F1a4d6563-b088-453a-b5c0-21cf52418710',
        comment: "I completely agree with you!",
        date: "15th Dec 2021",
        likes: "20",
        dislikes: "1",
        replies: "5",
      },
      {
        name: "chris-walker",
        img: 'https://prod-image-cdn.tensor.trade/images/90x90/freeze=false/https%3A%2F%2Fbafybeihcyjcoqvtuckgqadpvttex2cnxkghp3myu37pnv5uh74cqrykgvi.ipfs.dweb.link%2F',
        comment: "I don't quite understand, could you explain more?",
        date: "19th Dec 2021",
        likes: "5",
        dislikes: "6",
        replies: "0",
      },
      {
        name: "lisa-johnson",
        img: 'https://prod-image-cdn.tensor.trade/images/90x90/freeze=false/https%3A%2F%2Fimg-cdn.magiceden.dev%2Frs%3Afill%3A400%3A400%3A0%3A0%2Fplain%2Fhttps%3A%2F%2Fdl.airtable.com%2F.attachments%2F105d41cee69ae51b4e376caed9af9041%2Fc5140184%2FPFP.png',
        comment: "Thank you for this detailed explanation!",
        date: "20th Dec 2021",
        likes: "30",
        dislikes: "0",
        replies: "4",
      },
    ]
  }, 
  "crypto-fox": {
    nftName: "Crypto Fox",
    banner: "/images/banner-nft2.png",
    nftImage:
      "https://prod-image-cdn.tensor.trade/images/90x90/freeze=true/https%3A%2F%2Fi.imgur.com%2FbMH6qNc.png",
    currentOwner: "Ethan Hunt",
    creator: "Sophia Carter",
    joined: "2022",
    nftDetails: {
      buy: "7.80",
      sell: "3.10",
      listners: "4,100",
      mcap: "50",
      supply: "100",
      mints: "80",
    },
    addressDetails: [
      {
        name: "Mint address",
        value: "9sdf0a9sd0f9as8dfasf098asf08as0df",
      },
      {
        name: "Donation address",
        value: "as0df8asf08sd0f8as8df09as8d09fas",
      },
      {
        name: "Token address",
        value: "09asf8sd0fas8df098asf0asd8f0asf",
      },
      {
        name: "Total NFTs minted",
        value: "150",
      },
      {
        name: "Total supplies",
        value: "300",
      },
    ],
    comments: [
      {
        name: "Alex jane",
        img: '/images/alex-avatar.png',
        comment: "Using this NFT for a while now, it's amazing!",
        date: "12th Dec 2021",
        likes: "12",
        dislikes: "2",
        replies: "2",
      },
      {
        name: "Sarah Smith",
        img: '/images/sarah-avatar.png',
        comment: "Interesting perspective, thanks for sharing.",
        date: "16th Dec 2021",
        likes: "15",
        dislikes: "0",
        replies: "3",
      },
      {
        name: "John doe",
        img: 'https://prod-image-cdn.tensor.trade/images/90x90/freeze=false/https%3A%2F%2Fprod-tensor-creators-s3.s3.us-east-1.amazonaws.com%2Fimage%2F1a4d6563-b088-453a-b5c0-21cf52418710',
        comment: "I completely agree with you!",
        date: "15th Dec 2021",
        likes: "20",
        dislikes: "1",
        replies: "5",
      },
      {
        name: "chris-walker",
        img: 'https://prod-image-cdn.tensor.trade/images/90x90/freeze=false/https%3A%2F%2Fbafybeihcyjcoqvtuckgqadpvttex2cnxkghp3myu37pnv5uh74cqrykgvi.ipfs.dweb.link%2F',
        comment: "I don't quite understand, could you explain more?",
        date: "19th Dec 2021",
        likes: "5",
        dislikes: "6",
        replies: "0",
      },
      {
        name: "lisa-johnson",
        img: 'https://prod-image-cdn.tensor.trade/images/90x90/freeze=false/https%3A%2F%2Fimg-cdn.magiceden.dev%2Frs%3Afill%3A400%3A400%3A0%3A0%2Fplain%2Fhttps%3A%2F%2Fdl.airtable.com%2F.attachments%2F105d41cee69ae51b4e376caed9af9041%2Fc5140184%2FPFP.png',
        comment: "Thank you for this detailed explanation!",
        date: "20th Dec 2021",
        likes: "30",
        dislikes: "0",
        replies: "4",
      },
    ]
  },
  "pixel-dragon": {
    nftName: "Pixel Dragon",
    banner: "/images/banner-nft3.png",
    nftImage:
      "https://prod-image-cdn.tensor.trade/images/90x90/freeze=true/https%3A%2F%2Fprod-tensor-creators-s3.s3.us-east-1.amazonaws.com%2Fimage%2F950e7eef-4da1-47b7-9dd9-507375b9e741",
    currentOwner: "Liam Nelson",
    creator: "Olivia Brooks",
    joined: "2021",
    nftDetails: {
      buy: "10.50",
      sell: "5.25",
      listners: "3,800",
      mcap: "75",
      supply: "120",
      mints: "100",
    },
    addressDetails: [
      {
        name: "Mint address",
        value: "as9df8as0df9as8df0asd8f0a9sd8f0as",
      },
      {
        name: "Donation address",
        value: "sd8f0as8df0asd8f0a9sd8f0asd8f09as",
      },
      {
        name: "Token address",
        value: "s8df0asd8f09asd8f0as8df0asd8f0as",
      },
      {
        name: "Total NFTs minted",
        value: "200",
      },
      {
        name: "Total supplies",
        value: "400",
      },
    ],
    comments: [
      {
        name: "Chris Walker",
        img: "/images/chris-avatar.png",
        comment: "Pixel Dragon is one of the best NFTs out there!",
        date: "18th Dec 2021",
        likes: "40",
        dislikes: "2",
        replies: "10",
      },
      {
        name: "Sophia Lane",
        img: "/images/sophia-avatar.png",
        comment: "Amazing artwork, totally worth it!",
        date: "19th Dec 2021",
        likes: "50",
        dislikes: "0",
        replies: "12",
      },
    ],
  },
  "bulbasaur": {
    nftName: "Bulbasaur",
    banner: "/images/banner-nft3.png",
    nftImage:
      "https://prod-image-cdn.tensor.trade/images/90x90/freeze=true/https://arweave.net/31l6YPPbXN7JBlii4Z0UL-U9APJeyJS3v23uuKg85Cc",
    currentOwner: "Ethan Hunt",
    creator: "Olivia Brooks",
    joined: "2021",
    nftDetails: {
      buy: "10.50",
      sell: "5.25",
      listners: "3,800",
      mcap: "75",
      supply: "120",
      mints: "100",
    },
    addressDetails: [
      {
        name: "Mint address",
        value: "as9df8as0df9as8df0asd8f0a9sd8f0as",
      },
      {
        name: "Donation address",
        value: "sd8f0as8df0asd8f0a9sd8f0asd8f09as",
      },
      {
        name: "Token address",
        value: "s8df0asd8f09asd8f0as8df0asd8f0as",
      },
      {
        name: "Total NFTs minted",
        value: "200",
      },
      {
        name: "Total supplies",
        value: "400",
      },
    ],
    comments: [
      {
        name: "Chris Walker",
        img: "/images/sarah-avatar.png",
        comment: "Pixel Dragon is one of the best NFTs out there!",
        date: "18th Dec 2021",
        likes: "40",
        dislikes: "2",
        replies: "10",
      },
      {
        name: "Sophia Lane",
        img: "/images/alex-avatar.png",
        comment: "Amazing artwork, totally worth it!",
        date: "19th Dec 2021",
        likes: "50",
        dislikes: "0",
        replies: "12",
      },
    ],
  },
  "ayu-rug": {
    nftName: "Ayu Rug",
    banner: "/images/banner-nft2.png",
    nftImage:
      "https://prod-image-cdn.tensor.trade/images/90x90/freeze=true/https://arweave.net/E1AkEkxMT8Eieo8anjZwIPVCXtd1gAoVdsaeaqzWv-Q",
    currentOwner: "Alex Smith",
    creator: "Olivia Brooks",
    joined: "2021",
    nftDetails: {
      buy: "10.50",
      sell: "5.25",
      listners: "3,800",
      mcap: "75",
      supply: "120",
      mints: "100",
    },
    addressDetails: [
      {
        name: "Mint address",
        value: "as9df8as0df9as8df0asd8f0a9sd8f0as",
      },
      {
        name: "Donation address",
        value: "sd8f0as8df0asd8f0a9sd8f0asd8f09as",
      },
      {
        name: "Token address",
        value: "s8df0asd8f09asd8f0as8df0asd8f0as",
      },
      {
        name: "Total NFTs minted",
        value: "200",
      },
      {
        name: "Total supplies",
        value: "400",
      },
    ],
    comments: [
      {
        name: "Chris Walker",
        img: "/images/sarah-avatar.png",
        comment: "Pixel Dragon is one of the best NFTs out there!",
        date: "18th Dec 2021",
        likes: "40",
        dislikes: "2",
        replies: "10",
      },
      {
        name: "Sophia Lane",
        img: "/images/alex-avatar.png",
        comment: "Amazing artwork, totally worth it!",
        date: "19th Dec 2021",
        likes: "50",
        dislikes: "0",
        replies: "12",
      },
    ],
  },
}