# MID TERM Full Stack Engineer at Generasi GIGIH 3.
### Author : GG3FSGP0366 - JAMALUL IKHSAN.

## 1. Database Structure (MongoDB)
```
DB Name : tokoplay
Collections in the database : 
1. videolists
2. productlists
3. commentlists

Run on local server : mongodb://127.0.0.1:27017/tokoplay
```

## Video Collections
##### Document Structure (videolists) :
```
_id : ObjectId
videoId : String
thumbnail : String
altImage : String
```
##### Output (videolists) :
```
Example data output for videolists :

{
  "_id": {
    "$oid": "64c240d51db62f3ae34a7432"
  },
  "videoId": 123,
  "thumbnail": "https://nowpalembang.com/wp-content/uploads/2022/06/toko-sepatu-palembang-2.jpeg",
  "altImage": "Toko-sepatu"
}
```

## Product Collections
##### Document Structure (productlists) :
```
_id : ObjectId
productId : Number
linkProduct : String
title : String
price : Number
videoId : Number
```
##### Output (productlists) :
```
Example data output for productlists :

{
  "_id": {
    "$oid": "64c240e91db62f3ae34a743c"
  },
  "productId": 321,
  "linkProduct": "https://www.tokopedia.com/find/tas",
  "title": "Tas Pink",
  "price": 58000,
  "videoId": 456
}
```

## Comment Collections
##### Document Structure (commentlists) :
```
_id : ObjectId
username : String
comment : String
timestamp : Date
videoId : Number
```
##### Output (commentlists) :
```
Example data output for commentlists :

{
  "_id": {
    "$oid": "64c243a91db62f3ae34a744d"
  },
  "username": "Putri Kinan",
  "comment": "Berapa harga produk nya kak ? Aku mau checkout nnihh",
  "timestamp": {
    "$date": "2023-07-27T10:15:05.391Z"
  },
  "videoId": 456
}
```



## 2. API Structure
### Base Url for API
```
http://localhost:3000
```

### API information that can be used:
```
GET : http://localhost:3000/api/video       (For display all video list)
GET : http://localhost:3000/api/product     (For display all product list)
GET : http://localhost:3000/api/comment     (For display all comment list)
POST : http://localhost:3000/api/comment    (For send comment to DB)

```


## 3. List of API Request & Response
#### Video Thumbnail List  (GET)
```
GET : http://localhost:3000/api/video 
```
Displayed a list of video from database.


* __URL Params__ :  None

* __Data Params__ : None

* __Headers__   : Content-Type: application/json

* __Response__  :  
   
   Success Response : __200__ \
   __Content__: 
   ```
   [
    {object_of_video},
    {object_of_video},
    {object_of_video},
    {object_of_video}
   ]
   ```
    Success Response : __500__ \
   __Content__: 
   ```
   {
        message : error
    }
   ```


#### Product List  (GET)
```
GET : http://localhost:3000/api/product 
```
Displayed a list of product from database.


* __URL Params__ :  None

* __Data Params__ : None

* __Headers__   : Content-Type: application/json

* __Response__  :  
   
   Success Response : __200__ \
   __Content__: 
   ```
   [
    {object_of_product},
    {object_of_product},
    {object_of_product},
    {object_of_product},
   ]
   ```
    Success Response : __500__ \
   __Content__: 
   ```
   {
        message : error
    }
   ```


#### Comment List  (GET)
```
GET : http://localhost:3000/api/comment 
```
Displayed a list of comment from database.


* __URL Params__ :  None

* __Data Params__ : None

* __Headers__   : Content-Type: application/json

* __Response__  :  
   
   Success Response : __200__ \
   __Content__: 
   ```
   [
    {object_of_comment},
    {object_of_comment},
    {object_of_comment},
    {object_of_comment},
   ]
   ```
    Success Response : __500__ \
   __Content__: 
   ```
   {
        message : error
    }
   ```

#### Comment List  (POST)
```
POST : http://localhost:3000/api/comment 
```
Displayed a list of comment from database.


* __URL Params__ :  None

* __Headers__   : Content-Type: application/json

* __Data Params__ : 
   ```
   [
    username : String,
    comment : String,
    videoId : Number
   ]
   ```
* __Response__  :  
   
   Success Response : __200__ \
   __Content__: 
   ```
   [
    {object_of_comment}
   ]
   ```
    Success Response : __500__ \
   __Content__: 
   ```
   {
        message : error
    }
   ```

## 4. How to run this project on local computer

1. First you copy this project to your local computer using Git Clone or Download Zip.

2. Before running the project, turn on your MongoDB or mongoose terminal. You enter the database folder in (tokoplay-apps/database) and open your MongoDB Compass and create a database with the name tokoplay, then import all databases into the tokoplay database. If successful you can run the project with the npm start command

3. Enter the backend folder (tokoplay-apps/backend) and run the npm start command.
    ```
    npm start
    ```

