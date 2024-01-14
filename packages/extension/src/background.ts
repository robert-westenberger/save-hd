// @ts-nocheck
import browser from 'webextension-polyfill';


console.log(`in background script...`, browser);
//
// browser.runtime.onMessage.addListener((message: Message, sender, sendResponse) => {
//     if (message.type === 'FETCH_ADDRESS') {
//         void store.dispatch(addressesApi.endpoints.queryRawAddress.initiate(message.payload)).then(res => {
//             sendResponse(res.data);
//         });
//         return true;
//     }
//
//     if (message.type === "SET_BEDS") {
//         void store.dispatch(filtersSlice.actions.setBeds(message.payload));
//         return true;
//     }
//
//     const state = store.getState();
//     sendResponse(state.filters);
// });
