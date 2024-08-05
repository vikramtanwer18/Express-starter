const multer = require('multer');
const path = require('path')
// const uploder = multer({dest:'upload/'});


// if we want to give file name or extension
const storageConfigration = multer.diskStorage({
    destination:(req,file,next)=>{
        next(null,'upload/')
    },
    filename:(req,file,next)=>{
        // path.extname give the extension
        next(null,`${Date.now()}${path.extname(file.originalname)}`)
    }
}

)

const uploder = multer({storage:storageConfigration})

module.exports = {uploder}