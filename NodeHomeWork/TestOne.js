import axios from "axios";
import PropTypes from 'prop-types'


async function testOne (userID) {

    await axios("https://jsonplaceholder.typicode.com/users/"+ userID)
    .then ((data)=>data)
    .then ((users)=> console.log("User",users.data));

    await axios("https://jsonplaceholder.typicode.com/posts?userId="+ userID)
    .then ((data)=>data)
    .then ((users)=> console.log("Posts",users.data));

}

testOne.propTypes = { userID: PropTypes.number}

export default testOne;