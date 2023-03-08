function AllData(){
  const ctx = React.useContext(UserContext);
  const label =JSON.stringify(Object.values(ctx.users[0]))
  const headings=JSON.stringify(Object.keys(ctx.users[0]))
  console.log(ctx)
  const DisplayData=ctx.users.map(
    (info)=>{
        return(
          
            <tr>
                <td>{info.name}</td>
                <td>{info.email}</td>
                <td>{info.password}</td>
                <td>{info.balance}</td>
                
            </tr>
        )
    }
)

return(
    <div>
        <table class="table table-striped">
            <thead>
                <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Password</th>
                <th>Balance</th>
                </tr>
            </thead>
            <tbody>


                {DisplayData}

            </tbody>
        </table>

    </div>
)
}
