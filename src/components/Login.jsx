import { Button, Input } from 'antd'
import { UserOutlined, EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';

import React from 'react'

export default function Login({ HandleLogin, heading }) {
    return (
        <div className='h-screen w-screen  flex justify-center items-center'>


            <div className='w-[400px] flex flex-col gap-5 '>
                <Input size="large" placeholder="Email" prefix={<UserOutlined />} />
                <Input.Password
                    placeholder="input password"
                    iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
                />
                <Button className='w-full' type="primary" loading={false}>
                    Login
                </Button>
            </div>
        </div>
    )
}
