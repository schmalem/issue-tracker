import React from 'react'

interface User {
     id: number;
     name: string;
     email: string;
}

const UsersPage = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users', 
        { next: {revalidate: 10}  })
    const users: User[] = await res.json();
    return (
    <>
        <h1 className='text-gray-500 font-sit'>Users</h1>
        <table className='table table-bordered'>
            <thead>
                <tr>
                    <th></th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {users.map(user => <tr className='text-black' key={user.id}>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                    </tr>
                    
                    )}
            </tbody>
        </table>
    </>
    )
}

export default UsersPage