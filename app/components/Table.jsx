function Table(props){

    return(
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>URL</th>
                </tr>
            </thead>

            <tbody>
                <tr>
                    <td>Google</td>
                    <td>Google.com</td>
                </tr>
                <tr>
                    <td>Github</td>
                    <td>Github.com</td>
                </tr>

                <tr>
                    <td>{props.data.name}</td>
                    <td>{props.data.url}</td>
                </tr>

            </tbody>


        </table>
    )




}
export default Table