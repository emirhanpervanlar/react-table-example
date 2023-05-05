export default function TableItem({ item, index, handleShow, tableClick, childShowCount, childCount }){
    return (
        <div
            key={item.id}
            className={
                'table-left-item'+
                (item.checked ? ' table-left-item-checked' : '') + 
                ( item.show ? ' table-left-item-show' : '')+
                ( childShowCount(index) > 0 ? ' table-left-item-child-show' : '')+
                ( childCount(index) > 0 ? ' table-left-item-child' : '')
            } 
            onClick={() => handleShow(index)}
        >
            <div className="table-left-item-checkbox">
                <input type='checkbox' checked={item.checked} onChange={() => tableClick(index)}/>
            </div>

            <div className="table-left-item-title" style={{marginLeft: item.deep*20}}>
                {item.title}
            </div>

        </div> 
    );
}
