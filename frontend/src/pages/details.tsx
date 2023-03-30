import { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useStateValue } from '../StateContext';
import { setOneClient } from '../contextapi';
import { useQuery, gql } from '@apollo/client';


const ONE_CLIENT_QUERY = gql`
    query MyQuery($oneClientId: ID!) {
        oneClient(id: $oneClientId) {
            id
            age
            name
            additionalInfo {
                phone
                address
                email
                company
                gender
            }
        }
    }
`;


export default function Details() {
    const { id } = useParams();


    const { loading, error, data } = useQuery<OneClient>(ONE_CLIENT_QUERY, {
        variables: { oneClientId: id }
    });


    const { state: { oneClient }, dispatch } = useStateValue();


    useEffect(() => {
        if (data) {
            dispatch(setOneClient(data?.oneClient));
        }
    }, [data]);


    return (
        <div className="flex justify-center items-center h-screen bg-gradient-to-r from-green-400 to-blue-500">
            {
                loading && (
                    <div> Loading... </div>
                )
            }
            {
                error && (
                    <div> Error: {error.message} </div>
                )
            }
            {
                !loading && !error && (
                    <div className="max-w-md w-full">
                        <h1 className="text-4xl font-bold mb-6 tracking-wide text-center text-white animate-bounce">
                            Client Details 👨
                        </h1>
                        <div className="bg-white rounded-lg overflow-hidden shadow-lg p-8">
                            {
                                oneClient?.name && (
                                    <div className="mb-4">
                                        <span className="font-bold mr-2">Name :</span> {oneClient?.name}
                                    </div>
                                )
                            }
                            {
                                oneClient?.id && (
                                    <div className="mb-4">
                                        <span className="font-bold mr-2">ID :</span> {oneClient?.id}
                                    </div>
                                )
                            }
                            {
                                oneClient?.age && (
                                    <div className="mb-4">
                                        <span className="font-bold mr-2">Age :</span> {oneClient?.age}
                                    </div>
                                )
                            }
                            {
                                oneClient?.additionalInfo.phone && (
                                    <div className="mb-4">
                                        <span className="font-bold mr-2">Phone :</span> {oneClient?.additionalInfo.phone}
                                    </div>
                                )
                            }
                            {
                                oneClient?.additionalInfo.address && (
                                    <div className="mb-4">
                                        <span className="font-bold mr-2">Address :</span> {oneClient?.additionalInfo.address}
                                    </div>
                                )
                            }
                            {
                                oneClient?.additionalInfo.email && (
                                    <div className="mb-4">
                                        <span className="font-bold mr-2">Email :</span> {oneClient?.additionalInfo.email}
                                    </div>
                                )
                            }
                            {
                                oneClient?.additionalInfo.company && (

                                    <div className="mb-4">
                                        <span className="font-bold mr-2">Company :</span> {oneClient?.additionalInfo.company}
                                    </div>
                                )
                            }
                            {
                                oneClient?.additionalInfo.gender && (
                                    <div className="mb-4">
                                        <span className="font-bold mr-2">Gender :</span> {oneClient?.additionalInfo.gender}
                                    </div>
                                )
                            }
                            <Link to="/" className="text-white font-bold bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 py-2 px-4 rounded-md">
                                &larr; Back to all clients
                            </Link>
                        </div>
                    </div>
                )
            }
        </div>
    )
}


interface AdditionalInfo {
    gender?: string;
    company: string;
    email: string;
    phone: string;
    address: string;
}


interface Client {
    id: string;
    name: string;
    age: number;
    gender?: string;
    additionalInfo: AdditionalInfo;
}


interface OneClient {
    oneClient: Client;
}