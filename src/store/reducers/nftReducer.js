import { createSlice } from "@reduxjs/toolkit";

const nftReducer = createSlice({
  name: "nft",
  initialState: {
    isLoading: false,
    nft:[],
    errorMsg: "",
  },

  reducers: {
    getNftSaga: (state, action) => {
      return { ...state };
    },

    getNftStart: (state) => {
      return {
        ...state,
        isLoading: true,
      };
    },

    getNftSuccess: (state, action) => {
      return {
        ...state,
        isLoading: false,
        nft: action.payload,
      };
    },
    getNftFail: (state, action) => {
      return {
        ...state,
         nft: {},
        isLoading: false,
        errorMsg: action.payload,
      };
    },
    
    createNftSaga: (state, action) => {
        return { ...state };
      },
     
     createNftStart:(state)=>{
        return {
            ...state,
            isLoading:true,
           
          };
      },

      createNftSuccess: (state, action) => {
        return {
          ...state,
          isLoading: false,
          isCreated: true,
          nft: action.payload,
          errorMsg: "",
        };
      },

      createNftFail:(state)=>{
        return {
            ...state,
            isLoading:false,
           
          };
      },


      getNftDetailSaga: (state, action) => {
        return { ...state };
      },
  
      getNftDetailStart: (state) => {
        return {
          ...state,
          isLoading: true,
        };
      },
  
      getNftDetailSuccess: (state, action) => {
        return {
          ...state,
          isLoading: false,
          nft: action.payload,
        };
      },
      getNftDetailFail: (state, action) => {
        return {
          ...state,
           nft: {},
          isLoading: false,
          errorMsg: action.payload,
        };
      },
      


  },
});

export const {
  getNftSaga,
  getNftStart,
  getNftSuccess,
  getNftFail,
  createNftSaga,
  createNftStart,
  createNftSuccess,
  createNftFail,
  getNftDetailFail,
  getNftDetailSaga,
  getNftDetailStart,
  getNftDetailSuccess,
} = nftReducer.actions;
export default nftReducer.reducer;
