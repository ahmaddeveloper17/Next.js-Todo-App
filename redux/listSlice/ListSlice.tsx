// import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import axios from "axios";
// interface CurrencyState {
//   textColor:string;
//   label: string;
//   loading: "idle" | "pending" | "succeeded" | "failed";
//   error: string | null;
//   borderColor: string;
//   bgColor: string;
// }
// export const fetchData = createAsyncThunk("currencyData", async () => {
//   try {
//     const axiosInstance = axios.create({
//       baseURL:
//         "http://localhost:3000/api/todoList",
//       timeout: 5000,
//     });

//     return {
//       data : axiosInstance.getData(),
//     }
//   } catch (error) {
//     throw new Error("Failed to fetch data");
//   }
// });
// const initialState: CurrencyState = {
//   label: "",

//   loading: "idle",
//   error: null,
// };
// const currencySlice = createSlice({
//   name: "currency",
//   initialState,
//   reducers: {
//     setLabel: (state, action) => {
//       state.label = action.payload;
//     },
//     setBgColor: (state, action) => {
//       state.bgColor = action.payload;
//     },
//     textColor: (state, action) => {
//       state.textColor = action.payload;
//     },
//     borderColor: (state, action) => {
//       state.borderColor = action.payload;
//     },
//   },
//   extraReducers: (builder) => {
//     builder
//       .addCase(fetchData.pending, (state) => {
//         state.loading = "pending";
//       })
//       .addCase(fetchData.fulfilled, (state, action) => {
//         state.loading = "succeeded";
//         state.bgColor = action.payload;
//         state.label = action.payload;
//       })
//       .addCase(fetchData.rejected, (state, action) => {
//         state.loading = "failed";
//         state.error = action.error.message || "An error occurred";
//       });
//   },
// });
// export const { setBaseCurrency, baseCurrency, setTargetCurrency } =
//   currencySlice.actions;
// export const selectCurrency = (state: { currency: CurrencyState }) =>
//   state.currency;
// export const selectSymbols = (state: { currency: CurrencyState }) =>
//   state.currency.symbols;
// export default currencySlice.reducer;

// import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import axios from "axios";

// interface CurrencyState {
//   textColor: string;
//   label: string;
//   loading: "idle" | "pending" | "succeeded" | "failed";
//   error: string | null;
//   borderColor: string;
//   bgColor: string;
// }

// export const fetchData: any = createAsyncThunk("currencyData", async () => {
//   try {
//     const response = await axios.get(`http://localhost:3000/api/todoList`);
//     // Assuming response.data contains the label
//     console.log(response);

//     return response;
//   } catch (error) {
//     throw new Error("Failed to fetch data");
//   }
// });

// const initialState: CurrencyState = {
//   label: "",
//   loading: "idle",
//   error: null,
//   textColor: "", // Initialize these fields to avoid undefined errors
//   borderColor: "",
//   bgColor: "",
// };

// const currencySlice = createSlice({
//   name: "currency",
//   initialState,
//   reducers: {
//     setLabel: (state, action) => {
//       state.label = action.payload;
//     },
//     setBgColor: (state, action) => {
//       state.bgColor = action.payload;
//     },
//     setTextColor: (state, action) => {
//       state.textColor = action.payload;
//     },
//     setBorderColor: (state, action) => {
//       state.borderColor = action.payload;
//     },
//   },
//   extraReducers: (builder) => {
//     builder
//       .addCase(fetchData.pending, (state) => {
//         state.loading = "pending";
//       })
//       .addCase(fetchData.fulfilled, (state, action) => {
//         state.loading = "succeeded";
//         state.label = action.payload; // Update label with the fetched data
//       })
//       .addCase(fetchData.rejected, (state, action) => {
//         state.loading = "failed";
//         state.error = action.error.message || "An error occurred";
//       });
//   },
// });

// export const { setBgColor, setTextColor, setBorderColor } =
//   currencySlice.actions;

// export const selectCurrency = (state: { currency: CurrencyState }) =>
//   state.currency;
// export const selectLabel = (state: { currency: CurrencyState }) =>
//   state.currency.label;

// export default currencySlice.reducer;
