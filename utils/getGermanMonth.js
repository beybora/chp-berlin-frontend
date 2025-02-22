export const getGermanMonth = (month) => {
    const months = {
        "01": "Jan",
        "02": "Feb",
        "03": "März",
        "04": "Apr",
        "05": "Mai",
        "06": "Jun",
        "07": "Jul",
        "08": "Aug",
        "09": "Sep",
        "10": "Okt",
        "11": "Nov",
        "12": "Dez",
    };
    
    return months[month] || "Unbekannt";
};
