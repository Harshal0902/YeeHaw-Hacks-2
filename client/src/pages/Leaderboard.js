import React from 'react'
import { databases } from '../services/appwriteConfig'

export default function Leaderboard() {

    const [users, setUsers] = React.useState()

    React.useEffect(() => {
        const db_id = "{process.env.APPWRITE_DB}"

        const getusers = databases.listDocuments(db_id)

        getusers.then(
            function (response) {
                setUsers(response.documents)
            },
            function (error) {
                console.log(error);
            }
        )
    }, [])

    return (
        <div>
            <div className='grid place-items-center py-6'>
                <h1 className='text-5xl font-bold text-white'>Leaderboard</h1>
                <div className='h-1 w-72 bg-secondary my-2'></div>
            </div>

            <div className="flex justify-center flex-col text-white py-2 px-16">
                <div className="grid grid-cols-2 place-items-center text-3xl">
                    <div className=''>Sheriff name</div>
                    <div className=''>Gangsters defeated</div>
                </div>
                <div className="grid grid-cols-2 place-items-center">
                    {users && users.map(item => (
                        <div key={item.$id} >
                            <div>
                                <div>
                                    <h1 className='text-2xl'>{item.userName}</h1>

                                </div>
                                <div>
                                    <h1 className='text-2xl'>{item.points}</h1>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
