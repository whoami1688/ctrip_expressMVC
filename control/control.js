const {getDb } = require("../service/service")

module.exports.testCtl = async (req, res) => {
    try {
        const data = await getDb()
        res.status(200).send(data)
    } catch (err) {
        console.log("错误",err);
        res.status(500).json({
            errMess: "发生错误"
        })
    }
} 