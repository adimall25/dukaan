import axios from 'axios';
import getCookie from '../utils/cookies/getCookie';
const url = 'http://localhost:5000';

export const createBuyerProfile = async (buyer) => {
  const response = await axios.post(
    `${url}/api/profile/buyer/create`,
    {
      buyerProfileData: buyer,
    },
    {
      headers: { 'x-auth-token': getCookie('buyer-token') },
    }
  );
  return response;
};

export const getLoggedInBuyer = async () => {
  const response = await axios.get(`${url}/api/profile/buyer/me`, {
    headers: { 'x-auth-token': getCookie('buyer-token') },
  });
  return response;
};

export const createSellerProfile = async (seller) => {
  const response = await axios.post(
    `${url}/api/profile/seller/create`,
    {
      sellerProfileData: seller,
    },
    {
      headers: { 'x-auth-token': getCookie('seller-token') },
    }
  );
  return response;
};

export const getLoggedInSeller = async () => {
  const response = await axios.get(`${url}/api/profile/seller/me`, {
    headers: { 'x-auth-token': getCookie('seller-token') },
  });
  return response;
};

// export const authenticateLogin = async (user) => {
//     try {
//         return await axios.post(`${url}/login`, user)
//     } catch (error) {
//         console.log('error while calling login API: ', error);
//     }
// }

// export const authenticateSignup = async (user) => {
//     try {
//         return await axios.post(`${url}/signup`, user)
//     } catch (error) {
//         console.log('error while calling Signup API: ', error);
//     }
// }

// export const getProductById = async (id) => {
//     try {
//         return await axios.get(`${url}/product/${id}`);
//     } catch (error) {
//         console.log('Error while getting product by id response', error);
//     }
// }

// export  const payUsingPaytm = async (data) => {
//     try {
//         console.log('payment api');
//         let response = await axios.post(`${url}/payment`, data);
//         console.log(response.data);
//         return response.data;
//     } catch (error) {
//         console.log('error', error);
//     }
// }
