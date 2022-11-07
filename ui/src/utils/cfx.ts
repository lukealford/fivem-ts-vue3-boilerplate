/* eslint-disable @typescript-eslint/no-explicit-any */
/**
 * Simple wrapper around fetch API tailored for CEF/NUI use.
 * @param eventName - The endpoint eventname to target
 * @param data - Data you wish to send in the NUI Callback
 *
 * @return returnData - A promise for the data sent back by the NuiCallbacks CB argument
 */

import { config } from '../../../config'

 
 async function fetchNui<T = any, D = any>(
   eventName: string,
   data?: D,
   resource?: string,
 ): Promise<T> {
   const options = {
     method: 'post',
     headers: {
       'Content-Type': 'application/json; charset=UTF-8',
     },
     body: JSON.stringify(data),
   };
 
   const resName = resource ? resource : (window as any).GetParentResourceName();
 
   const resourceName = (window as any).GetParentResourceName ? resName : config.name;
 
   const resp = await fetch(`https://${resourceName}/${eventName}`, options);
 
   const responseObj = await resp.json();
   
   return responseObj;
 }
 
 export default fetchNui;
 