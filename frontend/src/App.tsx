//REACT-ROUTER-DOM
import { BrowserRouter, Routes, Route } from 'react-router-dom';
//CONTEXT-API
import { StateProvider } from './StateContext';
//APOLLO-CLIENT
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
//PAGES
import Listing from './pages/listing';
import Details from './pages/details';



//APOLLO-CLIENT ( configuration )
const client = new ApolloClient({
    uri: 'http://localhost:4000/',
    cache: new InMemoryCache()
});


export default function App() {
    return (
        <ApolloProvider client={client}>
            <StateProvider>
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<Listing />} />
                        <Route path="/:id" element={<Details />} />
                    </Routes>
                </BrowserRouter>
            </StateProvider>
        </ApolloProvider>
    )
}