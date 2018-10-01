export const getFilteredList = (list, text) => {
    const filter = text.toLowerCase();
    
    return list.filter(list => {
        const name  = list.NameMobileWeb;
       
        return (
            name.toLowerCase().includes(filter)
        )
    })
};

