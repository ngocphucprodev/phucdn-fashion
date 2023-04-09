const mongoose = require('mongoose');
const Schema = mongoose.Schema;
//  

const Products = new Schema({
    name: {
        type: String, maxLength: 255
    },
    price: {
        type: String,
        maxLength: 255
    },
    image: {
        type: String,
        maxLength: 255
    },
    total: {
        type: Number
    },
    size: {
        type: [String],
        default: ["S", "M", "L"],
    },
    description: {
        type: String,
        default: "Áo sơ mi nữ dài tay YODY/Chất liệu vải thô đũi/Thấm hút mồ hôi tốt, mềm mại & bền màu/Thiết kế freesize thoải mái, linh hoạt nhiều kiểu mặc, phối đồ cho các chị em/Không chỉ mặc đi làm mà còn có thể làm áo khoác ngoài, phối áo croptop cá tính để diện đi chơi/YODY - Look good. Feel good."
    },
    gallery: {
        type: Schema.Types.ObjectId,
        ref: "Gallerys",
    },
}, {
    timestamps: true
});
module.exports = mongoose.model('Product', Products);

