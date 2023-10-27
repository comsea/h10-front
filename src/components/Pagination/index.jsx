export const Pagination = ({ employesPerPage, totalEmployes, paginate }) => {
    const pageNumbers = []

    for(let i = 1; i <= Math.ceil(totalEmployes / employesPerPage); i++){
        pageNumbers.push(i)
    }

    return(
        <div>
            <ul>
                {pageNumbers.map(number => (
                    <li key={number}>
                        <a onClick={() => paginate(number)}>{number}</a>
                    </li>
                ))}
            </ul>
        </div>
    )
}