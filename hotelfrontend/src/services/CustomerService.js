import axios from 'axios'
const curl='http://localhost:8080/customer/';
class CustomerService{
    createHotel(Customer){
        return axios.post(curl+'createhotel',Customer);
    }
    
}

export default new CustomerService()
