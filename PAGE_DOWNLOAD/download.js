function confirmLogout(){
    var useComfirm = confirm("Bạn có chắc chắn muốn thoát khỏi chương trình không! ?");
    if(useComfirm){
        window.location.href = "/PAGE_LOGIN/login.html";
    }
}
const searchBar = document.getElementById('search-bar');
const searchButton = document.getElementById('search-button');
const gameItems = document.querySelectorAll('.game-item');

// Dữ liệu game bạn muốn sử dụng
const gamesData = [
    {
        name: "PUBG",
        img: "https://thanhnien.mediacdn.vn/uploaded/truongnghi/2021_08_16/pubg_ANVG.jpg?width=500",
        link: "https://pubg.com/vi/main"
    },
    {
        name: "Liên Minh",
        img: "https://cdn.tgdd.vn/2020/06/content/hinh-nen-lien-minh-huyen-thoai-dep-mat-cho-pc-va-dien-thoai-background-800x450.jpg",
        link: "https://lienminh.vnggames.com/dang-ky/redownload/"
    },
    {
        name: "Naraka",
        img: "https://hoanghapc.vn/media/news/2406_naraka-bladepoint-1.jpg",
        link: "https://www.narakathegame.com/download/#/"
    },
    {
        name: "Valorant",
        img: "https://pcmarket.vn/media/news/1203_vavab9.png",
        link: "https://playvalorant.com/vi-vn/download/"
    }
    ,
    {
        name: "Black Myth Wukong",
        img: "https://cdnv2.tgdd.vn/mwg-static/common/News/1569314/thumb%20Black%20Myth%20Wukong.jpg",
        link: "https://store.steampowered.com/app/2358720/Black_Myth_Wukong/?l=vietnamese"
    }
    ,
    {
        name: "FC Online",
        img: "https://cdn.oneesports.vn/cdn-data/sites/4/2023/09/FCO-Update-man-hinh-cho.jpg",
        link: "https://fconline.garena.vn/huong-dan-tai-va-cai-dat-fc-online-tren-pc-va-mobile/"
    }
    ,
    {
        name: "Genshin Impact",
        img: "https://img.4gamers.com.tw/ckfinder-vn/image2/auto/2024-07/Genshin-Impact-4.8-release-date,-4.8-Banners-and-events-cover-240707-031107.jpg?versionId=hlvHtICaiv4i8_lz9VcdPngIJX4A44zF",
        link: "https://playvalorant.com/vi-vn/download/"
    }
];

// Thêm sự kiện khi nhấn nút tìm kiếm
searchButton.addEventListener('click', function() {
    const searchTerm = searchBar.value.toLowerCase().trim();

    // Ẩn tất cả các game ban đầu
    gameItems.forEach(game => {
        game.style.display = 'none';
    });

    // Tìm kiếm game
    let foundGame = gamesData.find(game => game.name.toLowerCase() === searchTerm);

    if (foundGame) {
        // Hiển thị một game-item duy nhất và cập nhật nội dung của nó
        const gameItem = gameItems[0]; // Lấy khung game đầu tiên để cập nhật
        gameItem.querySelector('.game-img').src = foundGame.img;
        gameItem.querySelector('.game-title').innerText = foundGame.name;
        gameItem.querySelector('.download-btn').parentNode.href = foundGame.link;

        // Hiển thị game ở giữa
        gameItem.style.display = 'block';
        gameItem.style.margin = '0 auto'; // Đặt giữa màn hình
    } else {
        alert('Không tìm thấy game nào!');
    }
});