const packages = document.getElementById("packages")
const artikelBox = document.getElementById("artikel-box")
const orderBox = document.getElementById('order-box')
const packagesData = [
    {
        title : 'Ulun Danu',
        location : 'Bali, Indonesia',
        price : 'Rp. 2.500.000',
        imageSource : 'ulun-danu.png'
    },
    {
        title : 'Rialto Bridge',
        location : 'Venezia, Italy',
        price : 'Rp. 7.500.000',
        imageSource : 'rialto-bridge.png'
    },
    {
        title : 'Dubai',
        location : 'Uni Emirates Arab',
        price : 'Rp. 25.500.000',
        imageSource : 'dubai.png'
    },
    {
        title : 'Manarola',
        location : 'Manarola, Italy',
        price : 'Rp. 5.500.000',
        imageSource : 'Manarola.png'
    },
    {
        title : 'Eiffel tower</',
        location : 'Paris, France',
        price : 'Rp. 15.500.000',
        imageSource : 'Eiffel.png'
    },
    {
        title : 'Hurawalhi',
        location : 'Hurawalhi Maldives',
        price : 'Rp. 11.500.000',
        imageSource : 'Hurawalhi.png'
    },
    
]

const articleData = [
    {
        location : 'Bali, Indonesia',
        title : 'Ulun Danu',
        visitor : '3-10 People',
        visitTime : '3 Days',
        language : 'Bahasa indonesia, english, balinese',
        price : 'Rp. 2.500.000',
        imageSource : 'ulun-danu-article.png',
        konten : 'Pura Ulun Danu Bratan, Pura Ulun Danu Beratan atau Bratan Pura merupakan sebuah pura dan candi air besar di Bali, Indonesia - candi utama air lainnya menjadi Pura Ulun Danu Batur. Kompleks candi ini terletak di tepi barat laut Danau Bratan di pegunungan dekat Bedugul, Kabupaten Tabanan. Candi air memenuhi seluruh wilayah di daerah aliran; di tepi hilir ada banyak candi kecil air yang spesifik untuk setiap asosiasi irigasi (subak). Candi ini sebenarnya digunakan untuk upacara persembahan untuk dewi Dewi Danu, dewi air, danau dan sungai. Danau Bratan merupakan salah satu danau penting dalam hal irigasi. Danau Bratan dikenal sebagai danau "gunung suci", kawasan ini sangat subur, terletak pada ketinggian 1.200 meter, dan beriklim sangat dingin. '
    },
    {
        location : 'Venezia, Italy',
        title : 'Rialto Bridge',
        visitor : '7-9 People',
        visitTime : '6 Days',
        language : 'Italy, English',
        price : 'Rp. 12.500.000',
        imageSource : 'rialto-bridge-article.png',
        konten : 'Jembatan Rialto (bahasa Italia: Ponte di Rialto; bahasa Venesia: Ponte de Rialto) adalah salah satu dari empat jembatan yang menyeberangi Kanal Besar Venesia di Italia. Jembatan ini merupakan jembatan tertua yang menyeberangi kanal tersebut dan memisahkan distrik San Marco dengan San Polo.Struktur yang menjadi sarana penyeberangan darat pertama di Kanal Besar adalah sebuah jembatan ponton yang didirikan pada tahun 1181 oleh Nicolò Barattieri. Jembatan tersebut dijuluki Ponte della Moneta karena adanya tempat pembuatan uang logam di dekat pintu masuk timurn'
    },
    {
        location : 'Uni Emirates Arab',
        title : 'Dubai',
        visitor : '17-29 People',
        visitTime : '10 Days',
        language : 'Arab, English',
        price : 'Rp. 22.500.000',
        imageSource : 'dubai-article.jpg',
        konten : 'Dubai (Arab: دبي, translit. Dubayy [dʊˈbajj]) adalah kota terpadat di negara Uni Emirat Arab dan merupakan ibukota Emirat Dubai. Kota ini terletak di sepanjang pantai tenggara Jazirah Arab dan di selatan teluk Persia, Kotamadya Dubai disebut Kota Dubai untuk membedakannya dari Emirat Dubai. Dubai adalah salah satu tujuan pariwisata paling populer di dunia.[5] Kota ini memiliki hotel bintang lima terbanyak kedua di dunia[6] dan juga bangunan tertinggi di dunia, Burj Khalif'
    }
]
for (let i = 0; i < packagesData.length; i++) {
    packages.innerHTML += 
    `
                    <div style="background-image: url(../dist/images/${packagesData[i].imageSource});" class="relative min-h-[500px] bg-cover rounded-xl">
                        <div class="w-3/4 flex text-white p-4 justify-between rounded bottom-4 right-0 left-0 mx-auto bg-black/30 min-h-[100px] absolute backdrop-blur-xl ">
                            <div>
                                <h2 class="font-semibold text-lg">${packagesData[i].title}</h2>
                                <p class="text-slate-300 text-sm">${packagesData[i].location}</p>
                            </div>
                            <div class="">
                                <img src="../dist/images/Frame 15.png" alt="" class="mb-3">
                                <p>${packagesData[i].price}</p>
                            </div>
                        </div>
                    </div>
    `
}
artikelBox.getElementsByClassName('subtitle')[0].innerHTML = articleData[0].location
artikelBox.getElementsByClassName('title')[0].innerHTML = articleData[0].title
artikelBox.getElementsByTagName('p')[1].innerHTML = articleData[0].visitor
artikelBox.getElementsByTagName('span')[0].innerHTML = articleData[0].language
artikelBox.getElementsByTagName('img')[0].src = "../dist/images/"+articleData[0].imageSource
artikelBox.getElementsByTagName('p')[4].innerHTML = articleData[0].konten
orderBox.getElementsByTagName('h2')[0].innerHTML = articleData[0].price

    packages.children[0].addEventListener("click",function () {
        artikelBox.getElementsByClassName('subtitle')[0].innerHTML = articleData[0].location
        artikelBox.getElementsByClassName('title')[0].innerHTML = articleData[0].title
        artikelBox.getElementsByTagName('p')[1].innerHTML = articleData[0].visitor
        artikelBox.getElementsByTagName('span')[0].innerHTML = articleData[0].language
        artikelBox.getElementsByTagName('img')[0].src = "../dist/images/"+articleData[0].imageSource
        artikelBox.getElementsByTagName('p')[4].innerHTML = articleData[0].konten
        orderBox.getElementsByTagName('h2')[0].innerHTML = articleData[0].price
    })
    packages.children[1].addEventListener("click",function () {
        artikelBox.getElementsByClassName('subtitle')[0].innerHTML = articleData[1].location
        artikelBox.getElementsByClassName('title')[0].innerHTML = articleData[1].title
        artikelBox.getElementsByTagName('p')[1].innerHTML = articleData[1].visitor
        artikelBox.getElementsByTagName('span')[0].innerHTML = articleData[1].language
        artikelBox.getElementsByTagName('img')[0].src = "../dist/images/"+articleData[1].imageSource
        artikelBox.getElementsByTagName('p')[4].innerHTML = articleData[1].konten
        orderBox.getElementsByTagName('h2')[0].innerHTML = articleData[1].price
    })
    packages.children[2].addEventListener("click",function () {
        artikelBox.getElementsByClassName('subtitle')[0].innerHTML = articleData[2].location
        artikelBox.getElementsByClassName('title')[0].innerHTML = articleData[2].title
        artikelBox.getElementsByTagName('p')[1].innerHTML = articleData[2].visitor
        artikelBox.getElementsByTagName('span')[0].innerHTML = articleData[2].language
        artikelBox.getElementsByTagName('img')[0].src = "../dist/images/"+articleData[2].imageSource
        artikelBox.getElementsByTagName('p')[4].innerHTML = articleData[2].konten
        orderBox.getElementsByTagName('h2')[0].innerHTML = articleData[2].price
    })
