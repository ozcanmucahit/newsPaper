import { HTTP } from 'meteor/http';
import { EJSON } from 'meteor/ejson';
import { Mongo } from 'meteor/mongo';
import '@fortawesome/fontawesome-free/js/all.js';
//import './main.html';







Meteor.startup(() => {  
  const apiUrl = 'https://api.collectapi.com/news/getNews?country=tr&tag=general';
  const headers = {
  'Authorization': 'apikey 1xIvut2bpgd9lCB2NAjVEt:3VdfMhl4qbHdKCxygBnStO',
  'Content-Type': 'application/json'
  };

  
  HTTP.get(apiUrl, { headers }, (error, response) => {
    if (error) {
      console.error(error);
    } else {
      let trNews = response.data.result;
      for (let i = 0; i < trNews.length; i++) {
        const TrApi = trNews[i];
        const TrDescription = TrApi.description;
        const TrName = TrApi.name;
        const TrDate = TrApi.date;
        const TrImage = TrApi.image;
        const TrKey = TrApi.key;
        const TrSource = TrApi.source;
        const TrUrl = TrApi.url;
        console.log(TrName, TrDescription,TrDate, TrImage, TrKey, TrSource , TrUrl);
      }
    }
  });  
  

  


const apiUrl2 = 'https://api.collectapi.com/news/getNews?country=de&tag=general';
const headers2 = {
  'Authorization': 'apikey 1xIvut2bpgd9lCB2NAjVEt:3VdfMhl4qbHdKCxygBnStO',
  'Content-Type': 'application/json'
};

 
  HTTP.get(apiUrl2, { headers }, (error, response) => {
    if (error) {
      console.error(error);
    } else {
      let deNews = response.data.result;
      for (let i = 0; i < deNews.length; i++) {
        const deApi = deNews[i];
        const deDescription = deApi.description;
        const deName = deApi.name;
        const deDate = deApi.date;
        const deImage = deApi.image;
        const deKey = deApi.key;
        const deSource = deApi.source;
        const deUrl = deApi.url;
        console.log(deName, deDescription, deDate, deImage, deKey, deSource, deUrl);
      }
    }
  });   




const apiUrl3 = 'https://api.collectapi.com/news/getNews?country=en&tag=general';
const headers3 = {
  'Authorization': 'apikey 1xIvut2bpgd9lCB2NAjVEt:3VdfMhl4qbHdKCxygBnStO',
  'Content-Type': 'application/json'
};

 
  HTTP.get(apiUrl3, { headers }, (error, response) => {
    if (error) {
      console.error(error);
    } else {
      let enNews = response.data.result;
      for (let i = 0; i < enNews.length; i++) {
        const enApi = enNews[i];
        const enDescription = enApi.description;
        const enName = enApi.name;
        const enDate = enApi.date;
        const enImage = enApi.image;
        const enKey = enApi.key;
        const enSource = enApi.source;
        const enUrl = enApi.url;
        console.log(enName, enDescription, enDate, enImage, enKey, enSource,enUrl);
      }
    }
  });   
});


/**    
 * 
 * BU KISMI AKTİF EDERSEM HTML KISIMDA Bİ DİV E İD VERİP EKRANA BASABİLİYORUM
 * 
 * 
const newsContainer = document.getElementById('news-container');


const apiUrl = 'https://api.collectapi.com/news/getNews?country=tr&tag=general';
const headers = {
  'Authorization': 'apikey 5uKnvUfcA05tIWGMfgBwuz:14MyPyxKJbY3vJANhQB3BG',
  'Content-Type': 'application/json'
};

HTTP.get(apiUrl, { headers }, (error, response) => {
  if (error) {
    console.error(error);
  } else {
    let trNews = response.data.result;
    let ul = document.createElement('ul');

    for (let i = 0; i < trNews.length; i++) {
      const TrApi = trNews[i];
      const TrName = TrApi.name;
      const li = document.createElement('li');
      li.innerText = TrName;
      ul.appendChild(li);
    }

    newsContainer.appendChild(ul);
  }
});*/



