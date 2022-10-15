import React from 'react'
import { databases } from '../services/appwriteConfig'
import { Link } from 'react-router-dom'
export default function Room() {

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
                <h1 className='text-5xl font-bold text-white'>Your Room</h1>
                <div className='h-1 w-56 bg-secondary my-2'></div>
            </div>

            <h1 className='text-2xl ml-16 text-white'>Find members in your room and challange them</h1>

            <div className="flex justify-center flex-col text-white py-2 px-16">
                <div className="grid grid-cols-3 place-items-center text-3xl">
                    <div className=''>Room's Sheriff name</div>
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
                                <div>
                                    <Link to='/play_game'>
                                        <button type="button" className="h-12 w-56 px-8 text-base font-semibold tracking-wider text-white border rounded-full shadow-sm font-fontVollkorn my-6 bg-secondary hover:shadow-lg">Challange opponent</button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
