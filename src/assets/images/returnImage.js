//! Function Export Image user
export const returnImage = (img_name) => {
    try{
        if(require(`../images/${img_name}`)) {
            return require(`../images/${img_name}`);
        }
    }catch(err) {
        // console.log(err);
    }
}