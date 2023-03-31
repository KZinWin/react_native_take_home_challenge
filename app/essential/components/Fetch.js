
export async function getData(url = '') {
    return await fetch(url, {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'X-Api-Key': '1866c9ed-b141-40db-b5d6-5f6ba20aab87',
            'cache-control': 'no-cache'
        }
    }).then( (response) => response.json() );
}

// export async function postData(url = '', data = {}) {
//     return await fetchData(url, data);
// }

// export async function putData(url = '', data = {}) {
//     return await fetchData(url, data, 'PUT');
// }

// export async function deleteData(url = '', data = {}) {
//     return await fetchData(url, data, 'DELETE');
// }

// export async function fetchData(url = '', data = {}, method = 'POST') {
//     var token = await getToken();
//     return await fetch(url, {
//         method: method,
//         headers: {
//             'Accept': 'application/json',
//             'Content-Type': 'application/json',
//             'authorization': 'Bearer ' + token,
//             'cache-control': 'no-cache'
//         },  
//         body: JSON.stringify(data),

//     }).then(async (response) => {
//         if (response.ok) {
//             // you can call response.json() here too if you want to return json
//             var data = [];
//             if (response.status !== 204) {
//                 var promise = response.json();
//                 await promise.then(x => data = x);
//             }
//             return {
//                 ok: response.ok,
//                 status: response.status,
//                 data: data,
//             }

//         } else {

//             var promise = await response.json();
//             //handle errors in the way you want to
//             var message = '';
//             switch (response.status) {
//                 case 401:
//                     message = "Access Denied"
//                     break;
//                 case 403:
//                     message = "Forbidden Access"
//                     break;
//                 case 404:
//                     message = 'Object not found';
//                     break;
//                 case 500:
//                     message = 'Internal server error';
//                     break;
//                 default:
//                     message = 'Some error occured';
//                     break;
//             }
//             return {
//                 ok: response.ok,
//                 status: response.status,
//                 data: message,
//                 err: promise.message
//             }
//         }

//     }).then(json => json);
// }
