const packages = document.getElementById("packages")

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

for (let i = 0; i < packagesData.length; i++) {
    packages.innerHTML += 
    `
    <a href="./konten.html">
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
                </a>
    `
}

