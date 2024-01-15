import React from 'react';
import { Card } from "antd";
import Layout from 'components/MasterLayout';
import RoleList from 'modules/_Manage/Security/roleList';

const Dashboard = () => (               
    <Layout>
        <Card title="Welcome to the Demo Site!">
            You need to be logged in to see this!  Good Job!
        </Card>
    </Layout>
)

export default Dashboard;