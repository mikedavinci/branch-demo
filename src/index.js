import { ApolloProvider, useQuery } from '@apollo/react-hooks';
import ApolloClient, { gql } from 'apollo-boost';
import {BrowserRouter,Route,Routes} from 'react-router-dom';
import React,{useEffect, useState} from 'react';
import ReactDOM from 'react-dom';
import env from './env';
import Users from './pages/user/users';
import AddUser from './pages/user/addUser';

const client = new ApolloClient({
  uri: env.GRAPHQL_ENDPOINT,
  request: operation => {
    operation.setContext({
      headers: {
        'x-api-key': env.GRAPHQL_API_KEY,
      }
    })
  }
});

const ALL_USERS_QUERY = gql`
  query {
    allUsers {
      email
      name
      role
    }
  }
`;

const App = () => {
  const { loading, error, data } = useQuery(ALL_USERS_QUERY);
  const [users,setUsers] =useState([]);
  const [isUserDeleteEnable,setUserDeleteEnable]=useState(false);

  useEffect(()=>{
    if(data&&data.hasOwnProperty('allUsers')){
      setUsers(data.allUsers.map((user)=>{
        return {...user,isSelected:false}
      }))
    }
  },[data])


  // if (error) {
  //   return <p>Error: {JSON.stringify(error)}</p>;
  // }

  // return (
  //   <pre>
  //     <code>
  //       {JSON.stringify(data, null, 2)}
  //     </code>
  //   </pre>
  // )
  
  const handleUserSelection=(index)=>{
        const updatedUsers=[...users];
        updatedUsers[index].isSelected=!updatedUsers[index].isSelected;
        setUsers(updatedUsers);
        setUserDeleteEnable(updatedUsers.some(user=> user.isSelected));
  }

  const handleUserRemove=()=>{
    const updatedUsers=users.filter(user => !user.isSelected);
    setUsers(updatedUsers);
    setUserDeleteEnable(updatedUsers.some(user=> user.isSelected));
  }

  const handleAddUser=(user)=>{
      const updatedUsers=[...users];
      updatedUsers.push({...user,isSelected:false});
      setUsers(updatedUsers);

  }

  return(
    <div>
      <Routes>
        <Route path='/' element={
        <Users 
              users={users} 
              onHandleUserSelection={handleUserSelection} 
              isUserDeleteEnable={isUserDeleteEnable}
              onHandleUserRemove={handleUserRemove}
              loading={loading}
              />} />

          <Route path='/add' element={ <AddUser onHandleAdduser={handleAddUser} />} />
      </Routes>
    </div>
  )
}

const Root = () => (
  <ApolloProvider client={client}>
    <BrowserRouter>
    <App />
    </BrowserRouter>
  </ApolloProvider>
);

ReactDOM.render(<Root />, document.getElementById('root'));