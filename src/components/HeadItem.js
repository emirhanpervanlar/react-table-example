export default function HeadItem({ item, index, headClick }){
    return (
        <div key={item.id} className={'table-right-head-item'+(item.checked ? ' table-right-head-item-checked' : '')}>

            <div className="table-right-head-item-title">
                {item.title}
                <span>{item.subtitle}</span>
            </div>
            <div className="table-right-head-item-checkbox">
                <input type='checkbox' checked={item.checked} onChange={() => headClick(index)} />
            </div>
        </div>
    );
}
