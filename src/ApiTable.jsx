// import React, { useEffect, useState } from 'react';
// import { Table, Avatar, Spin, Button, Modal, Form, Input, notification } from 'antd';
// import axios from 'axios';

// export default function ApiTable() {
//   const [users, setUsers] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [editingUser, setEditingUser] = useState(null);
//   const [isModalVisible, setIsModalVisible] = useState(false);
//   const [form] = Form.useForm();

//   // Fetch data from API using Axios
//   useEffect(() => {
//     axios
//       .get('https://reqres.in/api/users')
//       .then((response) => {
//         setUsers(response.data.data); // Set the user data
//         setLoading(false); // Stop loading spinner
//       })
//       .catch((error) => {
//         console.error('Error fetching data:', error);
//         setLoading(false); // Stop loading spinner even on error
//       });
//   }, []);

//   // Create user
//   const handleCreate = (values) => {
//     axios.post('https://reqres.in/api/users', values)
//       .then((response) => {
//         setUsers([...users, response.data]); // Add new user to the list
//         notification.success({ message: 'User created successfully!' });
//         setIsModalVisible(false); // Hide the modal
//         form.resetFields(); // Reset form fields
//       })
//       .catch((error) => {
//         console.error('Error creating user:', error);
//         notification.error({ message: 'Failed to create user.' });
//       });
//   };

//   // Update user
//   const handleUpdate = (values) => {
//     axios.put(`https://reqres.in/api/users/${editingUser.id}`, values)
//       .then((response) => {
//         const updatedUsers = users.map(user =>
//           user.id === editingUser.id ? response.data : user
//         );
//         setUsers(updatedUsers);
//         notification.success({ message: 'User updated successfully!' });
//         setIsModalVisible(false);
//         setEditingUser(null);
//         form.resetFields();
//       })
//       .catch((error) => {
//         console.error('Error updating user:', error);
//         notification.error({ message: 'Failed to update user.' });
//       });
//   };

//   // Delete user
//   const handleDelete = (id) => {
//     axios.delete(`https://reqres.in/api/users/${id}`)
//       .then(() => {
//         setUsers(users.filter(user => user.id !== id));
//         notification.success({ message: 'User deleted successfully!' });
//       })
//       .catch((error) => {
//         console.error('Error deleting user:', error);
//         notification.error({ message: 'Failed to delete user.' });
//       });
//   };

//   // Handle form submission
//   const handleOk = () => {
//     form.validateFields().then(values => {
//       if (editingUser) {
//         handleUpdate(values);
//       } else {
//         handleCreate(values);
//       }
//     }).catch(errorInfo => {
//       console.log('Failed:', errorInfo);
//     });
//   };

//   // Show modal for creating/editing users
//   const showModal = (user = null) => {
//     setEditingUser(user);
//     form.setFieldsValue(user || { first_name: '', last_name: '', email: '' });
//     setIsModalVisible(true);
//   };

//   // Define table columns
//   const columns = [
//     {
//       title: 'ID',
//       dataIndex: 'id',
//       key: 'id',
//     },
//     {
//       title: 'First Name',
//       dataIndex: 'first_name',
//       key: 'first_name',
//     },
//     {
//       title: 'Last Name',
//       dataIndex: 'last_name',
//       key: 'last_name',
//     },
//     {
//       title: 'Email',
//       dataIndex: 'email',
//       key: 'email',
//     },
//     {
//       title: 'Avatar',
//       dataIndex: 'avatar',
//       key: 'avatar',
//       render: (avatar) => <Avatar src={avatar} size={50} />, // Display avatar as an image
//     },
//     {
//       title: 'Action',
//       key: 'action',
//       render: (text, user) => (
//         <>
//           <Button onClick={() => showModal(user)}>Edit</Button>
//           <Button onClick={() => handleDelete(user.id)} style={{ marginLeft: 8 }}>Delete</Button>
//         </>
//       ),
//     },
//   ];

//   // Show loading spinner until data is fetched
//   if (loading) {
//     return (
//       <div style={{ textAlign: 'center', marginTop: '50px' }}>
//         <Spin size="large" />
//       </div>
//     );
//   }

//   return (
//     <div style={{ padding: '20px' }}>
//       <h1>Users List</h1>
//       <Button type="primary" onClick={() => showModal()}>Add User</Button>
//       <Table
//         columns={columns}
//         dataSource={users}
//         rowKey="id"
//         pagination={{ pageSize: 4 }}
//       />
//       <Modal
//         title={editingUser ? 'Edit User' : 'Add User'}
//         visible={isModalVisible}
//         onOk={handleOk}
//         onCancel={() => setIsModalVisible(false)}
//       >
//         <Form form={form} layout="vertical">
//           <Form.Item name="first_name" label="First Name" rules={[{ required: true, message: 'Please input the first name!' }]}>
//             <Input />
//           </Form.Item>
//           <Form.Item name="last_name" label="Last Name" rules={[{ required: true, message: 'Please input the last name!' }]}>
//             <Input />
//           </Form.Item>
//           <Form.Item name="email" label="Email" rules={[{ required: true, message: 'Please input the email!' }, { type: 'email', message: 'The input is not valid E-mail!' }]}>
//             <Input />
//           </Form.Item>
//         </Form>
//       </Modal>
//     </div>
//   );
// }

import React, { useEffect, useState } from 'react';
import { Table, Avatar, Spin, Button, Modal, Form, Input, notification } from 'antd';
import axios from 'axios';

export default function ApiTable() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [editingUser, setEditingUser] = useState(null);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [form] = Form.useForm();

  // Fetch data from API using Axios
  useEffect(() => {
    axios
      .get('https://reqres.in/api/users')
      .then((response) => {
        setUsers(response.data.data); // Set the user data
        setLoading(false); // Stop loading spinner
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        setLoading(false); // Stop loading spinner even on error
      });
  }, []);

  // Create user
  const handleCreate = (values) => {
    axios.post('https://reqres.in/api/users', values)
      .then((response) => {
        setUsers([...users, response.data]); // Add new user to the list
        notification.success({ message: 'User created successfully!' });
        setIsModalVisible(false); // Hide the modal
        form.resetFields(); // Reset form fields
      })
      .catch((error) => {
        console.error('Error creating user:', error);
        notification.error({ message: 'Failed to create user.' });
      });
  };

  // Update user
  const handleUpdate = (values) => {
    axios.put(`https://reqres.in/api/users/${editingUser.id}`, values)
      .then((response) => {
        const updatedUsers = users.map(user =>
          user.id === editingUser.id ? response.data : user
        );
        setUsers(updatedUsers);
        notification.success({ message: 'User updated successfully!' });
        setIsModalVisible(false);
        setEditingUser(null);
        form.resetFields();
      })
      .catch((error) => {
        console.error('Error updating user:', error);
        notification.error({ message: 'Failed to update user.' });
      });
  };

  // Delete user
  const handleDelete = (id) => {
    axios.delete(`https://reqres.in/api/users/${id}`)
      .then(() => {
        setUsers(users.filter(user => user.id !== id));
        notification.success({ message: 'User deleted successfully!' });
      })
      .catch((error) => {
        console.error('Error deleting user:', error);
        notification.error({ message: 'Failed to delete user.' });
      });
  };

  // Handle form submission
  const handleOk = () => {
    form.validateFields().then(values => {
      if (editingUser) {
        handleUpdate(values);
      } else {
        handleCreate(values);
      }
    }).catch(errorInfo => {
      console.log('Failed:', errorInfo);
    });
  };

  // Show modal for creating/editing users
  const showModal = (user = null) => {
    setEditingUser(user);
    form.setFieldsValue(user || { first_name: '', last_name: '', email: '', avatar: '' });
    setIsModalVisible(true);
  };

  // Define table columns
  const columns = [
    {
      title: 'ID',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: 'First Name',
      dataIndex: 'first_name',
      key: 'first_name',
    },
    {
      title: 'Last Name',
      dataIndex: 'last_name',
      key: 'last_name',
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
    },
    {
      title: 'Avatar',
      dataIndex: 'avatar',
      key: 'avatar',
      render: (avatar) => <Avatar src={avatar} size={50} />, // Display avatar as an image
    },
    {
      title: 'Action',
      key: 'action',
      render: (text, user) => (
        <>
          <Button onClick={() => showModal(user)}>Edit</Button>
          <Button onClick={() => handleDelete(user.id)} style={{ marginLeft: 8 }}>Delete</Button>
        </>
      ),
    },
  ];

  // Show loading spinner until data is fetched
  if (loading) {
    return (
      <div style={{ textAlign: 'center', marginTop: '50px' }}>
        <Spin size="large" />
      </div>
    );
  }

  return (
    <div style={{ padding: '20px' }}>
      <h1>Users List</h1>
      <Button type="primary" onClick={() => showModal()}>Add User</Button>
      <Table
        columns={columns}
        dataSource={users}
        rowKey="id"
        pagination={{ pageSize: 4 }}
      />
      <Modal
        title={editingUser ? 'Edit User' : 'Add User'}
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={() => setIsModalVisible(false)}
      >
        <Form form={form} layout="vertical">
          <Form.Item name="first_name" label="First Name" rules={[{ required: true, message: 'Please input the first name!' }]}>
            <Input />
          </Form.Item>
          <Form.Item name="last_name" label="Last Name" rules={[{ required: true, message: 'Please input the last name!' }]}>
            <Input />
          </Form.Item>
          <Form.Item name="email" label="Email" rules={[{ required: true, message: 'Please input the email!' }, { type: 'email', message: 'The input is not valid E-mail!' }]}>
            <Input />
          </Form.Item>
          <Form.Item name="avatar" label="Avatar URL" rules={[{ required: true, message: 'Please input the avatar URL!' }]}>
            <Input />
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
}

