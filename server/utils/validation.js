const isRealString = (str) => {
    return typeof str === 'string' && str.trim().length > 0;
};
const formating=(obj)=>{
    obj.room = obj.room.toLowerCase();
    obj.name = obj.name.toLowerCase().replace(/^\w/, c => c.toUpperCase());
    return obj;
}
module.exports = {isRealString,formating};