// Create Database and using it.
// use tokoplay;

//Create Collection with name videolist.
db.createCollection('videolists');

//Create content data on the videolist collection.
db.videolists.insertMany(
  [
    {
      "videoId" : 123,
      "thumbnail" : "https://nowpalembang.com/wp-content/uploads/2022/06/toko-sepatu-palembang-2.jpeg",
      "altImage" : "Toko-sepatu",
      "video"    :"https://www.youtube.com/embed/EKwhy_R3Dyc",
      "views" : 151
    },
    {
      "videoId" : 456,
      "thumbnail" : "https://images.tokopedia.net/img/cache/850/BgtCLw/2021/12/17/131318ef-067c-4b85-b25c-2a0ccc479cd3.jpg?ect=4g",
      "altImage" : "Toko-tas",
      "video"    :"https://www.youtube.com/embed/Rtr6uax0Qrg",
      "views" : 122
    },
    {
      "videoId" : 789,
      "thumbnail" : "https://www.blibli.com/friends-backend/wp-content/uploads/2022/12/B110679-cover-scaled.jpg",
      "altImage" : "Toko-mainan",
      "video"    :"https://www.youtube.com/embed/UAbPSwVEhdg",
      "views" : 25
    },
    {
      "videoId" : 101,
      "thumbnail" : "https://images.tokopedia.net/img/cache/850/BgtCLw/2022/5/9/4eb9a3c5-36e2-4207-9f2c-acb5100cad2d.jpg?ect=4g",
      "altImage" : "Toko-boneka",
      "video"    :"https://www.youtube.com/embed/AkgEHXOguNg",
      "views" : 99
    },
    {
      "videoId" : 112,
      "thumbnail" : "https://beritabojonegoro.com/imageoptim/58c20643-foto-outlet-baju.lg.jpg",
      "altImage" : "Toko-pakaian",
      "video"    :"https://www.youtube.com/embed/89iQO1GhX68",
      "views" : 231
    },
    {
      "videoId" : 114,
      "thumbnail" : "https://www.sahabat-ukm.com/wp-content/uploads/2021/03/cahaya-sahabat-ukm-collection-2-1024x768-1.jpg",
      "altImage" : "Toko-sandal",
      "video"    :"https://www.youtube.com/embed/Kc_gr6TXqt4",
      "views" : 144
    },
    {
      "videoId" : 117,
      "thumbnail" : "https://inspirensis.id/data/media/2021/09/Jewelry-Store.jpg",
      "altImage" : "Toko-perhiasan",
      "video"    :"https://www.youtube.com/embed/QNrzTQZFPGY",
      "views" : 78
    },
    {
      "videoId" : 113,
      "thumbnail" : "https://968kpfm.co.id/uploads/lifestyle/1635165502.jpg",
      "altImage" : "Toko-kecantikan",
      "video"    :"https://www.youtube.com/embed/yaycpbNEMOI",
      "views" : 96
    },
    {
      "videoId" : 118,
      "thumbnail" : "https://sukangulik.com/wp-content/uploads/2023/03/Toko-Komputer-Blora.jpeg",
      "altImage" : "Toko-komputer",
      "video"    :"https://www.youtube.com/embed/KZqqAfI3GAE",
      "views" : 56
    },
    {
      "videoId" : 119,
      "thumbnail" : "https://asset-2.tstatic.net/kaltim/foto/bank/images/toko-buku-ilustrasi-balikpapan.jpg",
      "altImage" : "Toko-buku",
      "video"    :"https://www.youtube.com/embed/9cY_8Zc2wN4",
      "views" : 77
    },
  ]
);


//Create Collection with name productlist.
db.createCollection('productlists');

db.productlists.insertMany(
  [
    {
      "productId" : 321,
      "linkProduct" : "https://www.tokopedia.com/find/tas",
      "imgProduct"  : "https://media.istockphoto.com/id/1488773418/id/foto/tas-warna-warni-dengan-desain-lucu-dipajang-di-toko.jpg?s=612x612&w=0&k=20&c=0AZz2WaTv-u0fzCK-8XFl8WYFqzWDkIOPOdhsuILQIk=",
      "title" : "Tas Pink",
      "price" : 58000,
      "videoId" : 456
    },
    {
      "productId" : 773,
      "linkProduct" : "https://www.tokopedia.com/find/tas",
      "imgProduct"  : "https://media.istockphoto.com/id/1488773418/id/foto/tas-warna-warni-dengan-desain-lucu-dipajang-di-toko.jpg?s=612x612&w=0&k=20&c=0AZz2WaTv-u0fzCK-8XFl8WYFqzWDkIOPOdhsuILQIk=",
      "title" : "Tas Hitam",
      "price" : 48000,
      "videoId" : 456
    },
    {
      "productId" : 558,
      "linkProduct" : "https://www.tokopedia.com/find/tas",
      "imgProduct"  : "https://media.istockphoto.com/id/1488773418/id/foto/tas-warna-warni-dengan-desain-lucu-dipajang-di-toko.jpg?s=612x612&w=0&k=20&c=0AZz2WaTv-u0fzCK-8XFl8WYFqzWDkIOPOdhsuILQIk=",
      "title" : "Tas Cokelat",
      "price" : 38000,
      "videoId" : 456
    },
    {
      "productId" : 997,
      "linkProduct" : "https://www.tokopedia.com/find/tas",
      "imgProduct"  : "https://media.istockphoto.com/id/1488773418/id/foto/tas-warna-warni-dengan-desain-lucu-dipajang-di-toko.jpg?s=612x612&w=0&k=20&c=0AZz2WaTv-u0fzCK-8XFl8WYFqzWDkIOPOdhsuILQIk=",
      "title" : "Tas Biru",
      "price" : 48000,
      "videoId" : 456
    },
    {
      "productId" : 668,
      "linkProduct" : "https://www.tokopedia.com/find/tas",
      "imgProduct"  : "https://media.istockphoto.com/id/1488773418/id/foto/tas-warna-warni-dengan-desain-lucu-dipajang-di-toko.jpg?s=612x612&w=0&k=20&c=0AZz2WaTv-u0fzCK-8XFl8WYFqzWDkIOPOdhsuILQIk=",
      "title" : "Tas Merah",
      "price" : 58000,
      "videoId" : 456
    },
    {
      "productId" : 321,
      "linkProduct" : "https://www.tokopedia.com/find/tas",
      "imgProduct"  : "https://media.istockphoto.com/id/1488773418/id/foto/tas-warna-warni-dengan-desain-lucu-dipajang-di-toko.jpg?s=612x612&w=0&k=20&c=0AZz2WaTv-u0fzCK-8XFl8WYFqzWDkIOPOdhsuILQIk=",
      "title" : "Tas Putih",
      "price" : 68000,
      "videoId" : 456
    },
    {
      "productId" : 223,
      "linkProduct" : "https://www.tokopedia.com/find/tas",
      "imgProduct"  : "https://media.istockphoto.com/id/1488773418/id/foto/tas-warna-warni-dengan-desain-lucu-dipajang-di-toko.jpg?s=612x612&w=0&k=20&c=0AZz2WaTv-u0fzCK-8XFl8WYFqzWDkIOPOdhsuILQIk=",
      "title" : "Tas Abu-abu",
      "price" : 58000,
      "videoId" : 456
    },
    {
      "productId" : 225,
      "linkProduct" : "https://www.tokopedia.com/find/tas",
      "imgProduct"  : "https://media.istockphoto.com/id/1488773418/id/foto/tas-warna-warni-dengan-desain-lucu-dipajang-di-toko.jpg?s=612x612&w=0&k=20&c=0AZz2WaTv-u0fzCK-8XFl8WYFqzWDkIOPOdhsuILQIk=",
      "title" : "Tas Hijau",
      "price" : 38000,
      "videoId" : 456
    },
    {
      "productId" : 334,
      "linkProduct" : "https://www.tokopedia.com/find/tas",
      "imgProduct"  : "https://media.istockphoto.com/id/1488773418/id/foto/tas-warna-warni-dengan-desain-lucu-dipajang-di-toko.jpg?s=612x612&w=0&k=20&c=0AZz2WaTv-u0fzCK-8XFl8WYFqzWDkIOPOdhsuILQIk=",
      "title" : "Tas Kuning",
      "price" : 58000,
      "videoId" : 456
    },
    {
      "productId" : 665,
      "linkProduct" : "https://www.tokopedia.com/find/tas",
      "imgProduct"  : "https://media.istockphoto.com/id/1488773418/id/foto/tas-warna-warni-dengan-desain-lucu-dipajang-di-toko.jpg?s=612x612&w=0&k=20&c=0AZz2WaTv-u0fzCK-8XFl8WYFqzWDkIOPOdhsuILQIk=",
      "title" : "Tas Maroon",
      "price" : 78000,
      "videoId" : 456
    },
    {
      "productId" : 666,
      "linkProduct" : "https://www.tokopedia.com/find/sepatu",
      "imgProduct"  : "https://images.tokopedia.net/img/cache/700/VqbcmM/2022/3/4/40271847-bc0d-4b9d-80a1-bd73d87d9b37.jpg",
      "title" : "Casual Shoes",
      "price" : 68000,
      "videoId" : 123
    },
    {
      "productId" : 667,
      "linkProduct" : "https://www.tokopedia.com/find/sepatu",
      "imgProduct"  : "https://images.tokopedia.net/img/cache/700/VqbcmM/2022/9/5/485e8474-a8d1-4d03-895f-9ef89c1635aa.jpg",
      "title" : "Sneaker White",
      "price" : 99000,
      "videoId" : 123
    },
    {
      "productId" : 668,
      "linkProduct" : "https://www.tokopedia.com/find/mainan",
      "imgProduct"  : "https://images.tokopedia.net/img/cache/500-square/product-1/2017/9/22/8774768/8774768_75b0323a-0b35-42a4-87a4-6c61a36068f7_800_800.jpg",
      "title" : "Kuda Biru",
      "price" : 100000,
      "videoId" : 789
    },
    {
      "productId" : 669,
      "linkProduct" : "https://www.tokopedia.com/find/mainan",
      "imgProduct"  : "https://images.tokopedia.net/img/cache/700/product-1/2020/2/25/batch-upload/batch-upload_02ca878e-89c1-45a3-88c2-6a07fcb2291b.jpg",
      "title" : "Kuda Merah",
      "price" : 110000,
      "videoId" : 789
    },
    {
      "productId" : 670,
      "linkProduct" : "https://www.tokopedia.com/find/boneka",
      "imgProduct"  : "https://images.tokopedia.net/img/cache/500-square/VqbcmM/2021/8/20/0ae63b17-6330-4b52-a7e7-0506ea8e2128.jpg",
      "title" : "Boneka Brown",
      "price" : 55000,
      "videoId" : 101
    },
    {
      "productId" : 671,
      "linkProduct" : "https://www.tokopedia.com/find/boneka",
      "imgProduct"  : "https://dynamic.zacdn.com/tEJokwHD5uNXnAIkqFu4M4zukCc=/filters:quality(70):format(webp)/https://static-id.zacdn.com/p/istana-boneka-7951-4104973-1.jpg",
      "title" : "Boneka Pink",
      "price" : 99000,
      "videoId" : 101
    },
    {
      "productId" : 672,
      "linkProduct" : "https://www.tokopedia.com/find/dress",
      "imgProduct"  : "https://s1.bukalapak.com/img/17440240003/s-463-463/data.jpeg.webp",
      "title" : "Dress Blue",
      "price" : 68000,
      "videoId" : 112
    },
    {
      "productId" : 673,
      "linkProduct" : "https://www.tokopedia.com/find/dress",
      "imgProduct"  : "https://id-test-11.slatic.net/p/fc7ddddcb1e37d89e62f085922b2fe1d.jpg",
      "title" : "Dress Brown",
      "price" : 78000,
      "videoId" : 112
    },
    {
      "productId" : 674,
      "linkProduct" : "https://www.tokopedia.com/find/skincare",
      "imgProduct"  : "https://hips.hearstapps.com/hmg-prod/images/116224437-725802004886234-3668587510267552299-n-1628506751.jpg",
      "title" : "Serum Wajah",
      "price" : 85000,
      "videoId" : 113
    },
    {
      "productId" : 675,
      "linkProduct" : "https://www.tokopedia.com/find/sandal",
      "imgProduct"  : "https://lovelybogor.com/wp-content/uploads/2020/10/toko-grosir-dan-sepatu-bahan-karet-gilang-pasar-anyar-kebon-kembang-bogor.jpg",
      "title" : "Sandal Santai",
      "price" : 35000,
      "videoId" : 114
    },
  ]
);

//Create Collection with name videolist.
db.createCollection('commentlists');

db.commentlists.insertMany(
  [
    {
      "username" : "Putri Kinan",
      "comment" : "Berapa harga produk nya kak ? Aku mau checkout nnihh",
      "timestamp" : new Date(),
      "videoId" : 456
    },
    {
      "username" : "Aura Kinan",
      "comment" : "Berapa harga produk nya kak ? Aku mau COD nnihh",
      "timestamp" : new Date(),
      "videoId" : 456 
    },
    {
      "username" : "Wardah Hann",
      "comment" : "Berapa lama pengiriman ke Bandung kak ? Aku mau checkout nnihh",
      "timestamp" : new Date(),
      "videoId" : 456
    },
    {
      "username" : "Aurorra",
      "comment" : "Produk nya ready kan stok nya kak ?",
      "timestamp" : new Date(),
      "videoId" : 456 
    },
    {
      "username" : "Miya",
      "comment" : "Apakah ada garansi jika produk rusak kak ?",
      "timestamp" : new Date(),
      "videoId" : 456
    },
    {
      "username" : "Eudora",
      "comment" : "Live sampe jam berapa kak ?",
      "timestamp" : new Date(),
      "videoId" : 456 
    },
  ]
);
