const Item=({isPacked,name})=>{
    if(isPacked){
    return <li>{name} €</li>
    }
    return <li>{name}</li>
}


const ListItem = () => {
    return (
        <div>
            <Item isPacked={false} name='Pablo Picaso'/>
            <Item isPacked={true} name='Jahed Rabin'/>
            <Item isPacked={true} name='Vincen van Gog'/>
        </div>
    );
};

export default ListItem;