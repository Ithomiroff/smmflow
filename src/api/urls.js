import client from "@/api/config";

const requests = {
  userInfo: () => client.get('/user/info'),
  allData: () => client.get('/data/all').then((res) => res.data),
  login: (formData) => client.post('/auth/login', formData).then((res) => res.data),
  register: (formData) => client.post('/auth/register', formData).then((res) => res.data),
  recovery: (formData) => client.post('/auth/recovery', formData).then((res) => res.data),
  createOrder: (formData) => client.post('/orders/create', formData).then((res) => res.data),
  checkoutOrder: (formData) => client.post('/orders/checkout', formData).then((res) => res.data),
  getOrder: (id) => client.get(`/orders/${id}`).then((res) => res.data),
};

export default requests;
