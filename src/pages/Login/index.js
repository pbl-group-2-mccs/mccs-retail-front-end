import './index.scss'
import {Card, Form, Input, Button, message} from 'antd'
import { useDispatch } from 'react-redux'
import { fetchLogin } from '@/store/module/user'
import { useNavigate } from 'react-router-dom'

const Login = () =>{
    const dispatch = useDispatch()
    const naviagte = useNavigate()
    const onFinish = async (values) =>{
        await dispatch(fetchLogin(values))

        naviagte('/')

        message.success('Login successfully')
    }
    return(
        <div className='login'>
            <Card className='login-container'>
                <Form onFinish={onFinish} validateTrigger = 'onBlur'>
                    <Form.Item
                        name="username"
                        rules={[
                            { 
                                required: true,
                                message: 'Please input your username!' 
                            }
                        ]}>
                        <Input size='large' placeholder='Please the username' />
                    </Form.Item>
                    <Form.Item
                        name="password"
                        rules={[
                            { 
                                required: true,
                                message: 'Please input your password!' 
                            }
                        ]}>
                        <Input size='large' placeholder='Please enter the password' />
                    </Form.Item>
                    <Form.Item>
                        <Button type='primary' htmlType='submit' size='large' block>
                            Login
                        </Button>
                    </Form.Item>
                </Form>
            </Card>
        </div>
    )
}

export default Login